import createToDoList from "./todo_list.js";

export default function createProject(title) {
  let _title = title;
  const _todoList = createToDoList();

  const getTitle = () => {
    return _title;
  };

  const addToDo = ({ title, duedate, priority, status }) => {
    _todoList.add({ title, duedate, priority, status });
  };

  const removeToDo = (index) => {
    _todoList.remove(index);
  };

  const getAllToDos = () => {
    return _todoList.getList();
  };

  return {
    getTitle,
    getAllToDos,
    addToDo,
    removeToDo,
  };
}
