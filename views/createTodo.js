

// class CreateTodo {
//   //create form todo
//   static insertFormInHtmlElement = (elementId = "createTodo_box") => {
//     const selectedElement = document.querySelector(`#${elementId}`);
//     selectedElement.outerHTML = CreateTodo.createFormHtml();
//   };
//   static createFormHtml = (id = "createTodoForm") => {
//     return [].join("");
//   };
//   // Prepare the form to send information
//   static readFormFeildAndSendData = (formId = "createTodoForm") => {
//     const formElem = document.querySelector(`#${formId}`);
//     formElem.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const data = CreateTodo.createBodyRequest(
//         event.target.title.value,
//         event.target.complete.checked
//       );
//       CreateTodo.sendFormDataTodo(data);
//       CreateTodo.findLastTodoId();
//       ToDoTable.updateForm();
//     });
//   };

//   // send form data by js to todos list before without reload
//   static findLastTodoId = async () => {
//     console.log(await DB.getTodoItems());
//   };
//   static createTodoByJs = () => {};
//   static updateTodoList = () => {};
// }
