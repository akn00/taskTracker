class LocalStorage {
    static getTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      return tasks || [];
    }
  
    static saveTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  
  export default LocalStorage;
  