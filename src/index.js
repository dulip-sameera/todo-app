// import { isEqual, format } from "date-fns";

// const date = format(new Date(), "yyyy-MM-dd");

// console.log(isEqual(new Date(date), new Date("2022-11-17")));
// console.log(new Date());
// console.log(new Date("2022-11-17"));
// function (date) {
//   if ()
// }
import createProjectList from "./core/project_list";
import Storage from "./utils/storage";
import Priority from "./utils/priority";
import { pageLoad } from "./ui/page_load";
import Status from "./utils/status";

const projectList = createProjectList();
projectList.add("Grocery");
projectList.add("Pack Bag");

const item1 = {
  title: "1",
  duedate: "2022-11-17",
  priority: Priority.LOW,
  status: Status.ACTIVE,
};

const item2 = {
  title: "2",
  duedate: "2022-11-17",
  priority: Priority.LOW,
  status: Status.ACTIVE,
};

const item3 = {
  title: "3",
  duedate: "2022-11-18",
  priority: Priority.LOW,
  status: Status.ACTIVE,
};
const item4 = {
  title: "4",
  duedate: "2022-11-18",
  priority: Priority.LOW,
  status: Status.ACTIVE,
};
const item5 = {
  title: "5",
  duedate: "2022-11-18",
  priority: Priority.LOW,
  status: Status.ACTIVE,
};
const item6 = {
  title: "Buy Banana",
  duedate: "2022-11-18",
  priority: Priority.LOW,
  status: Status.INACTIVE,
};

projectList.getByIndex(0).addToDo(item1);
projectList.getByIndex(0).addToDo(item2);
projectList.getByIndex(0).addToDo(item3);

projectList.getByIndex(1).addToDo(item4);
projectList.getByIndex(1).addToDo(item5);
projectList.getByIndex(1).addToDo(item6);
// console.log(projectList.getByIndex(0).getAllToDos().getList()[0].getDueDate());

Storage.clear();

Storage.store(projectList);

// console.log(pageLoad().newProjectList.getByIndex(0).getTitle());
pageLoad();
