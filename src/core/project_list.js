import createProject from "./project";

export default function createProjectList() {
  const _list = [];

  const getAll = () => {
    return _list;
  };

  const add = (title) => {
    const project = createProject(title);
    _list.push(project);
  };

  const remove = (index) => {
    const title = getByIndex(index).getTitle();
    _list.splice(index, 1);
    return title;
  };

  const getByIndex = (index) => {
    return _list[index];
  };

  return {
    getAll,
    getByIndex,
    add,
    remove,
  };
}
