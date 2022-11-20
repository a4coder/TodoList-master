// identify html elemens
let todoList_box = document.querySelector("#todoList_box");
const todoListUrl = "http://localhost:8008/servicebus/run/todoList";

// craete function: just building table rows
const createTableRow = (arr) => {
  console.log(arr);
  let tableRows = arr.map((elem) => {
    return `
      <tr>
        <td>${elem.Id}</td>
        <td>${elem.taskTitle}</td>
        <td>${elem.completed ? "آری" : "خیر"}</td>
      </tr>`;
  });
  return tableRows;
};

// create function: 1.event handler for #todoList_wrap 2.fetch data to show data in #todoList_wrap
function fetchData_In_TodoListWrap(arrayOfObject) {
  console.log(arrayOfObject);
  todoList_box.addEventListener("click", function () {
    todoList_box.outerHTML = `
                    <div id="todoList_box" class="overflowScroll">
                      <table id="todosTable">
                        <tr>
                          <th>شماره</th>
                          <th>عنوان</th>
                          <th>تکمیل</th>
                        </tr>
                        ${createTableRow(arrayOfObject)}
                    </table>
                    <div>`;
  });
}

// fetching data and use top functions
try {
  async function getResponse() {
    const response = await fetch(todoListUrl, {
      method: "POST",
      headers: {
        contentType: "application/json; charset=utf-8",
      },
    });
    const data = await response.json();
    fetchData_In_TodoListWrap(JSON.parse(data));
  }
  getResponse();
} catch (e) {
  console.log(e);
}
