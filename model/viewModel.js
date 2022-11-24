class ServerDataViewModel {
  constructor(data) {
    this.completedString = ko.observable("false");
    // customize
    this.userName = ko.observable("علیرضا شهریاری");
    this.leftClass = ko.observable(0);
    this.rightClsss = ko.observable(0);
    // visible and hidden variable
    this.showTable = ko.observable(false);
    this.showForm = ko.observable(false);
    // array of all todo in table
    this.allTodo = ko.observableArray(data);
    this.whichShowData = ko.observable("all");
    // add todo
    this.taskTitle = ko.observable("");
    this.completed = ko.observable(false);
    this.perTaskTitle = ko.observable("");
    this.perCompleted = ko.observable(false);
    this.perId = ko.observable(0);
    this.numOfAllTodos = ko.observable(this.allTodo().length);
    this.numOfDoneTodos = ko.observable(
      this.allTodo().filter((elem) => elem.completed == true).length
    );
    this.numOfNotDoneTodos = ko.observable(
      this.allTodo().filter((elem) => elem.completed == false).length
    );
    this.doneTodos = ko.observableArray(
      this.allTodo().filter((elem) => elem.completed == true)
    );
    this.notDoneTodos = ko.observableArray(
      this.allTodo().filter((elem) => elem.completed == false)
    );
  }
  // create table
  addTodo = function (item) {
    this.allTodo.push(item);
  };
  // toggle compelte
  toggleCompleted() {
    var previousComplete = this.completed();
    this.completed(!previousComplete);
    console.log(previousComplete);
  }
  // delete task
  async deleteTask(id) {
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
  // edit task
  async updateTask(data) {
    console.log(data);
    this.leftClass(1);
    this.perTaskTitle(data.taskTitle);
    this.perCompleted(data.completed);
    this.perId(data.Id);
  }
  async sendUpdatedTask() {
    console.log(this.perCompleted(), this.perId(), this.perTaskTitle());
    try {
      const response = await axios.post(
        `${BASE_URL}/eidtTodo`,
        JSON.stringify([
          { Name: "taskTitle", Value: this.perTaskTitle() },
          { Name: "completed", Value: this.perCompleted() },
          { Name: "UID", Value: this.perId() },
        ])
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }
  leftClassZero() {
    this.leftClass(0);
  }
  rightClassZero() {
    this.rightClsss(0);
  }
}

const createBodyRequest = (titleValue, completedValue) => {
  const todoUserInput = JSON.stringify([
    { Name: "taskTitle", Value: titleValue },
    { Name: "completed", Value: completedValue },
  ]);
  return todoUserInput;
};
const sendFormDataTodo = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/createTodo`, data);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
const fetchTodos = async () => {
  const todoItems = await DB.getTodoItems();
  const ServerDataObject = new ServerDataViewModel(todoItems);
  console.log(todoItems);

  ServerDataObject.completedString.subscribe(() => {
    if (ServerDataObject.completed() == true) {
      ServerDataObject.completed(false);
    } else {
      ServerDataObject.completed(true);
    }
  });
  ServerDataObject.whichShowData.subscribe(() => {
    if (ServerDataObject.whichShowData() == "all") {
      ServerDataObject.allTodo(todoItems);
    }
    if (ServerDataObject.whichShowData() == "done") {
      ServerDataObject.allTodo(ServerDataObject.doneTodos);
    }
    if (ServerDataObject.whichShowData() == "notDone") {
      ServerDataObject.allTodo(ServerDataObject.notDoneTodos);
    }
  });
  ServerDataObject.leftClassStatus = ko.pureComputed(function () {
    return ServerDataObject.leftClass() > 0 ? "left-0" : "";
  }, ServerDataObject);
  ServerDataObject.rightClassStatus = ko.pureComputed(function () {
    return ServerDataObject.rightClsss() > 0 ? "right-0" : "";
  }, ServerDataObject);

  ko.applyBindings(ServerDataObject);
  window.getVM = () => ServerDataObject;
  const createTodoForm = document.getElementById("createTodoForm");

  createTodoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("send clicked");
    sendFormDataTodo(
      createBodyRequest(
        ServerDataObject.taskTitle(),
        ServerDataObject.completed()
      )
    );
    const newTodo = {
      taskTitle: ServerDataObject.taskTitle(),
      completed: ServerDataObject.completed(),
    };
    ServerDataObject.addTodo(newTodo);
  });
};
fetchTodos();
// 0: {Id: 198, taskTitle: 'این یک داده آزمایشی است', completed: false}
