const createTodo_box = document.getElementById("createTodo_box");

createTodo_box.addEventListener("click", () => {
  CreateTodo.insertFormInHtmlElement("createTodo_box");
  CreateTodo.readFormFeildAndSendData();
});

class CreateTodo {
  //create form todo
  static insertFormInHtmlElement = (elementId = "createTodo_box") => {
    const selectedElement = document.querySelector(`#${elementId}`);
    selectedElement.outerHTML = CreateTodo.createFormHtml();
  };
  static createFormHtml = (id = "createTodoForm") => {
    return [
      `<div id="createTodo_box" class="overflowScroll">`,
      `  <form id="${id}">`,
      `    <div class="input">`,
      `      <label for="title">عنوان</label>`,
      `      <input type="text" name="title" id="title" placeholder="عنوان را وارد کنید" />`,
      `    </div>`,
      `    <div class="input">`,
      `      <input type="checkbox" name="complete" id="complete" placeholder="عنوان را وارد کنید" />`,
      `      <label for="complete">کامل شده</label>`,
      `    </div>`,
      `    <div class="submit">`,
      `      <input type="submit" name="submit" id="submit" value="ارسال" />`,
      `    </div>`,
      `  </form>`,
      `<div>`,
    ].join("");
  };
  // Prepare the form to send information
  static readFormFeildAndSendData = (formId = "createTodoForm") => {
    const formElem = document.querySelector(`#${formId}`);
    formElem.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = CreateTodo.createBodyRequest(
        event.target.title.value,
        event.target.complete.checked
      );
      CreateTodo.sendFormDataTodo(data);
      CreateTodo.findLastTodoId();
      ToDoTable.updateForm();
    });
  };
  static createBodyRequest = (titleValue, completedValue) => {
    const todoUserInput = JSON.stringify([
      { Name: "taskTitle", Value: titleValue },
      { Name: "completed", Value: completedValue },
    ]);
    console.log(todoUserInput);
    return todoUserInput;
  };
  static sendFormDataTodo = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${BASE_URL}/createTodo`, data);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  // send form data by js to todos list before without reload
  static findLastTodoId = async () => {
    console.log(await DB.getTodoItems());
  };
  static createTodoByJs = () => {};
  static updateTodoList = () => {};
}
