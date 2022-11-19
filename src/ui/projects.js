import storage from "../utils/storage";
import { pageLoad } from "./page_load";

function generateProject(projectList) {
  // cache DOM
  const projectsDisplay = document.getElementById("projectsDisplay");

  projectsDisplay.innerHTML = "";
  projectsDisplay.appendChild(_generateProjectHead());

  //   add already existing projects
  for (let i = 0; i < projectList.getAll().length; i++) {
    projectsDisplay.appendChild(
      _generateProjectItem(projectList.getByIndex(i), i)
    );
  }

  // cache DOM
  const removeProjectBtns = document.querySelectorAll(".removeProjectBtn");
  const addProjectBtn = document.getElementById("addProjectBtn");
  const projectItems = document.querySelectorAll(".project-title");
  // event binds
  eventBind("click", addProjectBtn, () => {
    addProject(projectList);
  });
  eventBind("click", removeProjectBtns, (e) => {
    removeProject(e, projectList);
  });
  eventBind("click", projectItems, (e) => {
    loadToDos(projectList.getByIndex(e.target.attributes["data-index"].value));
  });
}

function _generateProjectHead() {
  const div = document.createElement("div");
  div.classList.add("project-head");

  const span = document.createElement("span");
  span.textContent = "Projects";
  div.appendChild(span);

  const button = document.createElement("button");
  button.id = "addProjectBtn";
  button.textContent = "+";
  div.appendChild(button);

  return div;
}

function _generateProjectItem(project, index) {
  const div = document.createElement("div");
  div.classList.add("project-item");

  div.appendChild(_generateProjectItemTitle(project.getTitle(), index));
  div.appendChild(_generateProjectRemoveBtn(index));
  return div;
}

function _generateProjectItemTitle(projectTitle, index) {
  const span = document.createElement("span");
  span.textContent = projectTitle;
  span.classList.add("project-title");
  span.setAttribute("data-index", index);
  return span;
}

function _generateProjectRemoveBtn(projectIndex) {
  const btn = document.createElement("button");
  btn.classList.add("removeProjectBtn");
  btn.textContent = "-";
  btn.setAttribute("data-index", projectIndex);

  return btn;
}

function addProject(projectList) {
  console.log("add project");
}

function removeProject(e, projectList) {
  const index = e.target.attributes["data-index"].value;
  storage.remove(projectList.remove(index));
  pageLoad();
}

function loadToDos(project) {
  //   pass project to content page
  console.log(project);
}

function eventBind(event, element, action) {
  if (element instanceof NodeList) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(event, action);
    }
    return;
  }
  element.addEventListener(event, action);
}

export default generateProject;
