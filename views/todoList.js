// create table form database when user click on todoList_box
// const todoList_box = document.getElementById("todoList_box");
// todoList_box.addEventListener("click", () => {
//   ToDoTable.insertTodosInTable("todoList_box");
// });

// class ToDoTable {
//   // create table from database
//   static createTableFromDatabase = async () => {};
//   static insertTodosInTable = async (elementId) => {
//     const table = [
//       `<div id="todoList_box" class="overflowScroll displayBlock">`,
//       `  <table id="todosTable">`,
//       `    <tr>`,
//       `     <th>شماره</th>`,
//       `     <th>عنوان</th>`,
//       `     <th>تکمیل</th>`,
//       `    </tr>`,
//       `    <tbody data-bind="foreach: seats">`,
//       `      <tr>`,
//       `        <td data-bind="text: Id"></td>`,
//       `        <td data-bind="text: taskTitle"></td>`,
//       `        <td data-bind="text: completed"></td>`,
//       `      </tr>`,
//       `    </tbody>`,
//       `  </table>`,
//       `<div>`,
//     ].join("");
//     document.getElementById(elementId).outerHTML = table;
//   };
//   static createTableRow = (arraysOfObject) => {
//     return arraysOfObject.map((elem, index) => {
//       return [
//         `<tr>`,
//         `  <td>${index + 1}</td>`,
//         `  <td>${elem.taskTitle}</td>`,
//         `  <td>${elem.completed ? "آری" : "خیر"}</td>`,
//         `</tr>`,
//       ].join();
//     });
//   };
//   static insertDataInHtmlElement = (htmlData, elementId) => {};
//   // update table form user input
//   static updateForm = async () => {};
// }
