const toastMessage = document.getElementById("toastMessage");
const message = document.getElementById("message");

export class Toast {
  static success(e) {
    toastMessage.style.display = "block";
    message.style.backgroundColor = "green";
    message.innerHTML = `${e}`;
    setTimeout(() => {
      toastMessage.style.display = "none";
    }, 2000);
  }
  static warnning(e) {
    toastMessage.style.display = "block";
    message.style.backgroundColor = "orange";
    message.innerHTML = `${e}`;
    setTimeout(() => {
      toastMessage.style.display = "none";
    }, 2000);
  }
  static error(e) {
    console.log(e);
  }
}
