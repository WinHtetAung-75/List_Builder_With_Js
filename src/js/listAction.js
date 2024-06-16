//Actions or Business Logic

import { doneTaskTotal, listTemplate, taskTotal } from "./selectors.js";

//To create new list
export const createNewList = (currentTask) => {
  const templateFragList = listTemplate.content.cloneNode(true);
  templateFragList.querySelector(".list").id = "List" + Date.now();
  templateFragList.querySelector(".list-para").innerText = currentTask;
  return templateFragList;
};

//To count list task
export const updateTaskList = () => {
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

//To count done lists
export const listDoneTotal = () => {
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

//To delete list
export const deleteList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  if (window.confirm("Are you sure to delete")) {
    currentList.remove();
    updateTaskList();
    listDoneTotal();
  }
};

//To edit list
export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const editBtn = currentList.querySelector(".edit-btn");
  const listPara = currentList.querySelector(".list-para");

  editBtn.setAttribute("disabled", true);
  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    "border border-stone-900 pl-2 focus-visible:outline-none";
  listPara.after(newTaskInput);
  listPara.classList.add("hidden");
  newTaskInput.value = listPara.innerText;
  newTaskInput.focus();

  newTaskInput.addEventListener("change", () => {
    editBtn.removeAttribute("disabled");
    listPara.innerText = newTaskInput.value;
    listPara.classList.remove("hidden");
    newTaskInput.remove();
  });
};

//To check done list
export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const editBtn = currentList.querySelector(".edit-btn");
  const listPara = currentList.querySelector(".list-para");

  if (listDoneCheck.checked) {
    editBtn.setAttribute("disabled", true);
  } else {
    editBtn.removeAttribute("disabled");
  }
  listDoneTotal();
  listPara.classList.toggle("line-through");
  currentList.classList.add("duration-300");
  currentList.classList.toggle("scale-75");
  currentList.classList.toggle("opacity-20");
};
