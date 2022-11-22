class ServerDataViewModel {
  constructor(data) {
    this.allTodo = ko.observableArray(data);
    this.userName = ko.observable("Alireza Shahryari");
    this.showTable = ko.observable(false);
    this.showForm = ko.observable(true);
    this.taskTitle = ko.observable("");
    this.completed = ko.observable(false);
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
  console.log(data);
  try {
    const response = await axios.post(`${BASE_URL}/createTodo`, data);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

const fetchData = async () => {
  const todoItems = await DB.getTodoItems();
  const ServerDataObject = new ServerDataViewModel(todoItems);
  ko.applyBindings(ServerDataObject);

  const createTodoForm = document.getElementById("createTodoForm");

  createTodoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    sendFormDataTodo(
      createBodyRequest(
        ServerDataObject.taskTitle(),
        ServerDataObject.completed()
      )
    );
    const x = {
      taskTitle: ServerDataObject.taskTitle(),
      completed: ServerDataObject.completed(),
    };
    console.log(x);
    ServerDataObject.allTodo().push(x);
  });
};
fetchData();
