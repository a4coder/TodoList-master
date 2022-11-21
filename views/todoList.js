// create table form database when user click on todoList_box
const todoList_box = document.getElementById("todoList_box");
todoList_box.addEventListener("click", () => {
  ToDoTable.createTableFromDatabase();
});

class ToDoTable {
  // create table form database
  static createTableFromDatabase = async () => {
    const tableData = JSON.parse(await DB.getTodoItems());
    ToDoTable.insertTodosInTable(tableData, "todoList_box");
  };
  static insertTodosInTable = async (tableData, elementId) => {
    const table = [
      `<div id="todoList_box" class="overflowScroll displayBlock">`,
      `  <table id="todosTable">`,
      `    <tr>`,
      `     <th>شماره</th>`,
      `     <th>عنوان</th>`,
      `     <th>تکمیل</th>`,
      `    </tr>`,
      `    ${ToDoTable.createTableRow(tableData)}`,
      `  </table>`,
      `<div>`,
    ].join("");
    ToDoTable.insertDataInHtmlElement(table, elementId);
  };
  static createTableRow = (arraysOfObject) => {
    return arraysOfObject.map((elem, index) => {
      return [
        `<tr>`,
        `  <td>${index + 1}</td>`,
        `  <td>${elem.taskTitle}</td>`,
        `  <td>${elem.completed ? "آری" : "خیر"}</td>`,
        `</tr>`,
      ].join();
    });
  };
  static insertDataInHtmlElement = (htmlData, elementId) => {
    const element = document.querySelector(`#${elementId}`);
    console.log(htmlData);
    element.outerHTML = htmlData;
  };
  // update table form user input
  static updateForm = async () => {
    const tableData = JSON.parse(await DB.getTodoItems());
    ToDoTable.insertTodosInTable(tableData, "todoList_box");
  };
}
