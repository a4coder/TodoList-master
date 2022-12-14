import ServerDataViewModel from "../model/viewModel.js";
import { BASE_URL } from "../model/db.js";
import DB from "../model/db.js";
import { Toast } from "./toast.js";

export const fetchTodos = async () => {
  const todoItems = await DB.getTodoItems();
  const ServerDataObject = new ServerDataViewModel(todoItems);

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

  createTodoForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (ServerDataObject.taskTitle()) {
      try {
        const response = await axios.post(
          `${BASE_URL}/createTodo`,
          JSON.stringify([
            { Name: "taskTitle", Value: ServerDataObject.taskTitle() },
            { Name: "completed", Value: ServerDataObject.completed() },
          ])
        );
        ServerDataObject.rightClsss(0);
        Toast.success("تسک با موفقیت افزوده شد");
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }

      const newTodo = {
        taskTitle: ServerDataObject.taskTitle(),
        completed: ServerDataObject.completed(),
      };
      ServerDataObject.addTodo(newTodo);
    } else {
      Toast.warnning("لطفا عنوان تسک را وارد کنید");
    }
  });
};
fetchTodos();
