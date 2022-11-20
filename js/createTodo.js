// identify html elemens
let createTodo_box = document.querySelector("#createTodo_box");
const craeteToDo = "http://localhost:8008/servicebus/run/createTodo";

//create function: return static form
function createTodoFormFunc() {
  return `
          <div id="createTodo_box" class="overflowScroll">
            <form id="createTodoForm">
              <div class="input">
                <label for="title">عنوان</label>
                <input type="text" name="title" id="title" placeholder="عنوان را وارد کنید" />
              </div>
              <div class="input">
                <input type="checkbox" name="complete" id="complete" placeholder="عنوان را وارد کنید" />
                <label for="complete">کامل شده</label>
              </div>
              <div class="submit">
                <input type="submit" name="submit" id="submit" value="ارسال" />
              </div>
            </form>
          <div>
    `;
}

//create function: return event handler for

function createTodoHandler() {
  return createTodoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const dataInput = JSON.stringify([
      { Name: "taskTitle", Value: event.target.title.value },
      { Name: "completed", Value: event.target.complete.checked },
    ]);

    // add task and fetching data
    axios
      .post(craeteToDo, dataInput)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });
}

//event handler for #createTodo_wrap 2.fetchData to show data in #createTodo_wrap
createTodo_box.addEventListener("click", function (event) {
  createTodo_box.outerHTML = createTodoFormFunc();
  let createTodoForm = document.querySelector("#createTodoForm");
  createTodoHandler();
});
