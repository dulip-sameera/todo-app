function generateContent(projectList, index) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  content.appendChild(_generateProjectTitle(projectList.getByIndex(index)));
  content.appendChild(_generateToDoList(projectList.getByIndex(index)));
}

function _generateProjectTitle(project) {
  const div = document.createElement("div");
  div.classList.add("projecttitle");

  const span = document.createElement("span");
  span.textContent = project.getTitle();
  div.appendChild(span);

  const button = document.createElement("button");
  button.classList.add("addtodobtn");
  button.id = "addtodobtn";
  button.textContent = "+";
  div.appendChild(button);

  return div;
}

function _generateToDoList(project) {
  const div = document.createElement("div");
  div.classList.add("todolist");

  for (let i = 0; i < project.getAllToDos().getList().length; i++) {
    div.appendChild(_generateToDo(project.getAllToDos().getByIndex(i), i));
  }

  return div;
}

function _generateToDo(todo, index) {
  const div = document.createElement("div");
  div.classList.add("todoitem");

  div.appendChild(_generateToDoCheckBtn(todo, index));
  div.appendChild(_generateToDoTitle(todo, index));
  div.appendChild(_generateToDoRemoveBtn(index));

  return div;
}

function _generateToDoCheckBtn(todo, index) {
  const button = document.createElement("button");
  button.className = "checkbtn";
  button.setAttribute("data-index", index);

  if (!todo.getStatus()) {
    button.classList.add("done");
  }

  return button;
}

function _generateToDoTitle(todo, index) {
  const span = document.createElement("span");
  span.className = "todotitle";
  if (!todo.getStatus()) {
    span.classList.add("done");
  }
  span.textContent = todo.getTitle();
  span.setAttribute("data-index", index);

  return span;
}

function _generateToDoRemoveBtn(index) {
  const button = document.createElement("button");
  button.classList.add("removetodobtn");
  button.textContent = "-";
  button.setAttribute("data-index", index);

  return button;
}

export default generateContent;
