class ServerDataViewModel {
  constructor(data) {
    // customize
    this.userName = ko.observable("علیرضا شهریاری");
    // visible and hidden variable
    this.showTable = ko.observable(false);
    this.showForm = ko.observable(false);
    // array of all todo in table
    this.allTodo = ko.observableArray(data);
    // add todo
    this.taskTitle = ko.observable("");
    this.completed = ko.observable(false);
  }
  // update table
  addTodo = function (item) {
    this.allTodo.push(item);
  };
  // toggle compelte
  toggleCompleted() {
    var previousComplete = this.completed();
    this.completed(!previousComplete);
    console.log(previousComplete);
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
  ko.applyBindings(ServerDataObject);

  const createTodoForm = document.getElementById("createTodoForm");
  console.log(createTodoForm);

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
