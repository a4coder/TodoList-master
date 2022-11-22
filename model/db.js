const BASE_URL = "http://localhost:8008/servicebus/run";

class DB {
  static getTodoItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/todoList`);
      const todoItems = response.data;
      return JSON.parse(todoItems);
    } catch (errors) {
      console.error(errors.message);
    }
  };
}
DB.getTodoItems();
