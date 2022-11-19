import { format } from "date-fns";

function store(plist) {
  // stop the execution if the plist is empty
  if (plist.length === 0) {
    return;
  }
  const projectNameList = _extractProjectNames(plist);
  const todoListsOfAllProjects = _extractAllToDos(plist);

  try {
    // store projectNameList
    localStorage.setItem("projectNameList", JSON.stringify(projectNameList));

    // store project
    projectNameList.forEach((projectName) => {
      localStorage.setItem(
        projectName,
        JSON.stringify(todoListsOfAllProjects[projectName])
      );
    });
  } catch (err) {
    if (isQuotaExceededError(err)) {
      // Handle the case where there wasn't enough space to store the
      // item in localStorage.
      alert("Local Storage is full: clear by removing unwanted projects");
    }
  }
}

function retrieve() {
  const projectNameList = JSON.parse(localStorage.getItem("projectNameList"));
  if (!projectNameList || projectNameList.length === 0) {
    return false;
  }

  const projects = {};
  projectNameList.forEach((projectName) => {
    projects[projectName] = JSON.parse(localStorage.getItem(projectName));
  });

  return { projects, projectNameList };
}

// remove a given project from the localStorage
function remove(projectName) {
  localStorage.removeItem(projectName);

  // remove project name from name list
  const names = JSON.parse(localStorage.getItem("projectNameList"));
  const index = names.indexOf(projectName);
  names.splice(index, 1);
  localStorage.setItem("projectNameList", JSON.stringify(names));
}

// clear all localStorage
function clear() {
  localStorage.clear();
}

/**
 * Determines whether an error is a QuotaExceededError.
 *
 * Browsers love throwing slightly different variations of QuotaExceededError
 * (this is especially true for old browsers/versions), so we need to check
 * different fields and values to ensure we cover every edge-case.
 *
 * @param err - The error to check
 * @return Is the error a QuotaExceededError?
 */
function isQuotaExceededError(err) {
  return (
    err instanceof DOMException &&
    // everything except Firefox
    (err.code === 22 ||
      // Firefox
      err.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      err.name === "QuotaExceededError" ||
      // Firefox
      err.name === "NS_ERROR_DOM_QUOTA_REACHED")
  );
}

function _extractProjectNames(projectList) {
  const namesList = [];

  for (let i = 0; i < projectList.getAll().length; i++) {
    namesList.push(projectList.getByIndex(i).getTitle());
  }

  return namesList;
}

function _extractAllToDos(projectList) {
  const toDos = {};

  for (let i = 0; i < projectList.getAll().length; i++) {
    const toDoList = [];
    for (
      let j = 0;
      j < projectList.getByIndex(i).getAllToDos().getList().length;
      j++
    ) {
      toDoList.push({
        title: projectList.getByIndex(i).getAllToDos().getByIndex(j).getTitle(),
        duedate: format(
          projectList.getByIndex(i).getAllToDos().getByIndex(j).getDueDate(),
          "yyyy-MM-dd"
        ),
        priority: projectList
          .getByIndex(i)
          .getAllToDos()
          .getByIndex(j)
          .getPriority(),
        status: projectList
          .getByIndex(i)
          .getAllToDos()
          .getByIndex(j)
          .getStatus(),
      });
    }

    toDos[projectList.getByIndex(i).getTitle()] = toDoList;
  }

  return toDos;
}

export default Storage = {
  store,
  retrieve,
  remove,
  clear,
};
