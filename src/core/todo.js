export default function createToDo({ title, duedate, priority, status }) {
  // Data Fields
  let _title = title;
  let _duedate = new Date(duedate);
  let _priority = priority;
  let _status = status;

  //   title getter and setter
  const getTitle = () => {
    return _title;
  };

  const setTitle = (title) => {
    _title = title;
  };

  //   dueDate getter and setter
  const getDueDate = () => {
    return _duedate;
  };

  const setDueDate = (duedate) => {
    _duedate = new Date(duedate);
  };

  //   priority getter and setter
  const getPriority = () => {
    return _priority;
  };

  const setPriority = (priority) => {
    _priority = priority;
  };

  //   status getter and setter
  const getStatus = () => {
    return _status;
  };

  const setStatus = (status) => {
    _status = status;
  };

  // edit a todo
  const edit = ({ title, duedate, priority, status }) => {
    setTitle(title);
    setDueDate(duedate);
    setPriority(priority);
    setStatus(status);
  };

  return {
    getTitle,
    setTitle,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getStatus,
    setStatus,
    edit,
  };
}
