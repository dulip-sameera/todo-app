import { format } from "date-fns";

function store(plist) {
  // stop the execution if the plist is empty
  if (plist.length === 0) {
    return;
  }
  const projectNameList = [];
  const todoListsOfAllProjects = {};

  // outer loop: add project names to projectNameList array
  // projectNameList array will be stored in localStorage
  // projectNameList will be used to store keys of each project that going to
  // be stored in localStorage
  for (let i = 0; i < plist.length; i++) {
    const project = plist[i];
    projectNameList.push(project.getTitle());

    // inner loop: store all the ToDos in a single project to todos array
    // which later will assign to todoListsOfAllProjects object with a
    // key(project title)
    const todos = [];
    for (let j = 0; j < project.getAllToDos().length; j++) {
      const todo = project.getAllToDos()[j];
      const todoObject = {
        title: todo.getTitle(),
        // store the duedate as string according to the defined format
        duedate: format(todo.getDueDate(), "yyyy-MM-dd"),
        priority: todo.getPriority(),
        status: todo.getStatus(),
      };
      todos.push(todoObject);
    }
    todoListsOfAllProjects[project.getTitle()] = todos;
  }

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

export default Storage = {
  store,
  retrieve,
  remove,
  clear,
};
