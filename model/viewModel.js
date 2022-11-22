class ServerDataViewModel {
  constructor(data) {
    this.seats = ko.observableArray(data);
    console.log(this.seats());
    this.userName = ko.observable("Alireza Shahryari");
    this.showTable = ko.observable(false);
    this.showForm = ko.observable(false);
  }
}

const fetchData = async () => {
  const todoItems = await DB.getTodoItems();
  console.log(new ServerDataViewModel());
  ko.applyBindings(new ServerDataViewModel(todoItems));
};
fetchData();
