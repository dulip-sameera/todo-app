import storage from "../utils/storage";
import generateContent from "./content";
import { pageLoad } from "./page_load";
import eventBind from "../utils/event_bind";

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
  const projectTitle = document.querySelectorAll(".project-title");
  const projectItem = document.querySelectorAll("project-item");
  // event binds
  eventBind("click", addProjectBtn, () => {
    addProject(projectList);
  });
  eventBind("click", removeProjectBtns, (e) => {
    removeProject(e, projectList);
  });
  eventBind("click", projectTitle, (e) => {
    loadToDos(projectList, e.target.attributes["data-index"].value);
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

function loadToDos(projectList, index) {
  //   pass project to content page
  console.log(projectList, index);
  generateContent(projectList, index);
}

export default generateProject;
