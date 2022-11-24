import ServerDataViewModel from "../model/viewModel.js";
import DB from "../model/db.js";

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
    try {
      const response = await axios.post(
        `${BASE_URL}/createTodo`,
        JSON.stringify([
          { Name: "taskTitle", Value: ServerDataObject.taskTitle() },
          { Name: "completed", Value: ServerDataObject.completed() },
        ])
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }

    const newTodo = {
      taskTitle: ServerDataObject.taskTitle(),
      completed: ServerDataObject.completed(),
    };
    ServerDataObject.addTodo(newTodo);
  });
};
fetchTodos();
