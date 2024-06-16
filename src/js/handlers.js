import { createNewList, deleteList, doneList, editList, updateTaskList } from "./listAction.js";
import { listGroup, taskInput } from "./selectors.js";

//Handler Functions
export const addList = (task) => {
  listGroup.append(createNewList(task));
  taskInput.value = null;
  updateTaskList();
};

export const addTaskBtnHandler = () => {
  if (taskInput.value.trim() ? true : false) {
    addList(taskInput.value);
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim() ? true : false) {
      addList(taskInput.value);
    }
  }
};

export const listGroupHandler = (event) => {
  // console.log(event.target);
  // console.log(event.target.closest(".list"));
  // console.log(event.target.classList.contains("delete-btn"));

  const list = event.target.closest(".list");

  if (event.target.classList.contains("list-done-check")) {
    doneList(list.id);
  }

  if (event.target.classList.contains("delete-btn")) {
    deleteList(list.id);
  }

  if (event.target.classList.contains("edit-btn")) {
    editList(list.id);
  }
};
