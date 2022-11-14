import createToDo from "./todo.js";

export default function createToDoList() {
  let _list = [];

  const getList = () => {
    return _list;
  };

  // return total number of ToDos in the list
  const getToDoCount = () => {
    return _list.length;
  };

  // get active ToDos in the list
  const getActiveToDoCount = () => {
    let count = 0;
    for (let i = 0; i < _list.length; i++) {
      if (_list[i].getStatus()) {
        count++;
      }
    }
    return count;
  };

  // add ToDo item to the list
  // accept ToDo details as parameters and pass them to ToDo factory to create a ToDo
  const add = ({ title, duedate, priority, status }) => {
    const todo = createToDo({ title, duedate, priority, status });
    _list.push(todo);
  };

  // remove ToDo from the list
  const remove = (index) => {
    _list.splice(index, 1);
  };

  // get ToDos by there index
  const getByIndex = (index) => {
    return _list[index];
  };

  return {
    getList,
    getToDoCount,
    getActiveToDoCount,
    add,
    remove,
    getByIndex,
  };
}
