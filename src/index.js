// import createProjectList from "./core/project_list.js";
// import Storage from "./utils/storage.js";

// const project_list = createProjectList();

// const todo1 = {
//   title: "Banana",
//   duedate: new Date("2022-12-01"),
//   priority: "HIGH",
//   status: true,
// };

// const todo2 = {
//   title: "Jam",
//   duedate: new Date("2022-12-01"),
//   priority: "LOW",
//   status: true,
// };

// const todo3 = {
//   title: "Rice",
//   duedate: new Date("2022-12-01"),
//   priority: "HIGH",
//   status: true,
// };

// const todo4 = {
//   title: "Pack Clothes",
//   duedate: new Date("2022-12-01"),
//   priority: "HIGH",
//   status: true,
// };

// const todo5 = {
//   title: "Pack water bottle",
//   duedate: new Date("2022-12-01"),
//   priority: "HIGH",
//   status: true,
// };

// const todo6 = {
//   title: "Pack a jacket",
//   duedate: new Date("2022-12-01"),
//   priority: "HIGH",
//   status: true,
// };

// const todo7 = {
//   title: "Pack a Gun",
//   duedate: new Date("2022-12-01"),
//   priority: "NORMAL",
//   status: true,
// };

// const todo8 = {
//   title: "Custom",
//   duedate: new Date("2022-12-01"),
//   priority: "NORMAL",
//   status: true,
// };

// project_list.add("Grocery");

// project_list.getByIndex(0).addToDo(todo1);
// project_list.getByIndex(0).addToDo(todo2);
// project_list.getByIndex(0).addToDo(todo3);

// project_list.add("Pack Bag");
// project_list.getByIndex(1).addToDo(todo4);
// project_list.getByIndex(1).addToDo(todo5);
// project_list.getByIndex(1).addToDo(todo6);
// project_list.getByIndex(1).addToDo(todo7);

// project_list.add("Custom");
// project_list.getByIndex(2).addToDo(todo8);

// Storage.store(project_list.getAll());
// // Storage.remove("Pack Bag");
// // Storage.clear();
// // console.log(project_list.getAll()[0].getAllToDos());

// const projectList = createProjectList();
// const storedProjects = Storage.retrieve();

// for (let i = 0; i < storedProjects.projectNameList.length; i++) {
//   const element = storedProjects.projectNameList[i];
//   projectList.add(element);
// }

// for (let i = 0; i < projectList.getAll().length; i++) {
//   const singleProject = projectList.getByIndex(i);
//   const todoList = storedProjects.projects[singleProject.getTitle()];
//   for (let j = 0; j < todoList.length; j++) {
//     singleProject.addToDo({
//       title: todoList[j].title,
//       duedate: new Date(todoList[j].duedate),
//       priority: todoList[j].priority,
//       status: todoList[j].status,
//     });
//   }
// }

// console.log(projectList.getAll()[0].getAllToDos()[0].getTitle());
