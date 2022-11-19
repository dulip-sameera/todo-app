import Storage from "../utils/storage.js";
import createProjectList from "../core/project_list.js";
import generateProject from "./projects.js";

function createProjectListFromLocalStorage() {
  const projectList = createProjectList();
  const storedProjects = Storage.retrieve();

  if (!storedProjects) {
    return false;
  }

  for (let i = 0; i < storedProjects.projectNameList.length; i++) {
    const element = storedProjects.projectNameList[i];
    // console.log(element);
    projectList.add(element);
  }

  for (let i = 0; i < projectList.getAll().length; i++) {
    const singleProject = projectList.getByIndex(i);
    const todoList = storedProjects.projects[singleProject.getTitle()];
    // console.log(todoList);
    for (let j = 0; j < todoList.length; j++) {
      singleProject.addToDo({
        title: todoList[j].title,
        duedate: new Date(todoList[j].duedate),
        priority: todoList[j].priority,
        status: todoList[j].status,
      });
    }
  }

  return projectList;
}

function isProjectListAvailableInLocalStorage() {
  if (Storage.retrieve()) {
    return true;
  }
  return false;
}

function pageLoad() {
  // get a project list if there is one in local storage or create new one
  const projectList = isProjectListAvailableInLocalStorage()
    ? createProjectListFromLocalStorage()
    : createProjectList();

  generateProject(projectList);
}

export { pageLoad };
