const craeteToDo = "http://localhost:8008/servicebus/run/createTodo";

[
  `<div id="createTodo_box" class="overflowScroll">`,
  `  <form id="createTodoForm">`,
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
