const todoListUrl = "http://localhost:8008/servicebus/run/todoList";
[
  `<div id="todoList_box" class="overflowScroll displayBlock">`,
  `  <table id="todosTable">`,
  `    <tr>`,
  `     <th>شماره</th>`,
  `     <th>عنوان</th>`,
  `     <th>تکمیل</th>`,
  `    </tr>`,
  `    ${createTableRow(arrayOfObject)}`,
  `  </table>`,
  `<div>`,
].join("");
