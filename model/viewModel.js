import "../public/js/axios.min.js";
import { BASE_URL } from "./db.js";

export default class ServerDataViewModel {
  constructor(data) {
    this.completedString = ko.observable("false");

    // username info
    this.userName = ko.observable("علیرضا شهریاری");

    // initial number for class (upadate and add todo section)
    // use in method for show and hidden [leftClassZero, rightClassZero]
    this.leftClass = ko.observable(0);
    this.rightClsss = ko.observable(0);

    // visible and hidden table after loaded index.html
    this.showTable = ko.observable(false);

    // array of fetch data from db.js
    this.allTodo = ko.observableArray(data);

    // customize: viewmodels button for show datas in table
    this.whichShowData = ko.observable("all");
    this.doneTodos = ko.observableArray(
      this.allTodo().filter((elem) => elem.completed == true)
    );
    this.notDoneTodos = ko.observableArray(
      this.allTodo().filter((elem) => elem.completed == false)
    );

    // customize: number of todos
    this.numOfAllTodos = ko.observable(this.allTodo().length);
    this.numOfDoneTodos = ko.observable(
      this.allTodo().filter((elem) => elem.completed == true).length
    );
    this.numOfNotDoneTodos = ko.observable(
      this.allTodo().filter((elem) => elem.completed == false).length
    );

    // add todo section viewmodel
    this.taskTitle = ko.observable("");
    this.completed = ko.observable(false);

    // edit todo section viewmodel
    this.perTaskTitle = ko.observable("");
    this.perCompleted = ko.observable(false);
    this.perId = ko.observable(0);
  }

  // create todo and add to table (ui and data base)
  addTodo = function (item) {
    this.allTodo.push(item);
  };

  // delete task
  async deleteTask(id) {
    if (confirm("آیا از حذف این تسک مطمئنید ؟")) {
      const x = this.allTodo().filter((elem) => elem.Id != id);
      this.allTodo(x);
      try {
        const response = await axios.post(
          `${BASE_URL}/deleteTodo`,
          JSON.stringify([{ Name: "ID", Value: id }])
        );
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  // show && save && edit task

  // show
  async showUpdateTask(data) {
    // open update section html
    this.leftClass(1);
    // read data from table and save in view model
    this.perTaskTitle(data.taskTitle);
    this.perCompleted(data.completed);
    this.perId(data.Id);
  }

  // save
  async sendUpdatedTask() {
    // use saved datas in viewmodel [this.perCompleted(), this.perId(), this.perTaskTitle()]
    try {
      // send axios request for update data in database
      const response = await axios.post(
        `${BASE_URL}/eidtTodo`,
        JSON.stringify([
          { Name: "taskTitle", Value: this.perTaskTitle() },
          { Name: "completed", Value: this.perCompleted() },
          { Name: "UID", Value: this.perId() },
        ])
      );
      this.leftClass(0);
      // update in viewmodel
      let thisTodo = this.allTodo().filter((elem) => elem.Id == this.perId());
      thisTodo = {
        ...thisTodo[0],
        taskTitle: this.perTaskTitle(),
        completed: this.completed(),
      };
      alert("ویرایش با موفقیت انجام شد");
      console.log(response);
      location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  // use in top initial leftClass && rightClsss
  // for show and hidden sectinos [update_box, add_box] index.html
  leftClassZero() {
    this.leftClass(0);
  }
  rightClassZero() {
    this.rightClsss(0);
  }
  // click cancel button
  cancelRequest() {
    this.rightClassZero();
    this.leftClassZero();
  }

  //onChangeTaskTitleInput
  async onChangeTaskTitleInput(data) {
    console.log(data);
    try {
      // send axios request for update data in database
      const response = await axios.post(
        `${BASE_URL}/eidtTodo`,
        JSON.stringify([
          { Name: "taskTitle", Value: data.taskTitle },
          { Name: "completed", Value: data.completed },
          { Name: "UID", Value: data.Id },
        ])
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }
}
