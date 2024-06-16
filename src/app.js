//Selectors
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskTotal = document.querySelector("#task-total");
const listGroup = document.querySelector("#list-group");
const doneTaskTotal = document.querySelector("#done-task-total");
const listTemplate = document.querySelector("#listTemplate");

//Actions or Business Logic
//To create new list
const createNewList = (currentTask) => {
  const templateFragList = listTemplate.content.cloneNode(true);
  templateFragList.querySelector(".list").id = "List" + Date.now();
  templateFragList.querySelector(".list-para").innerText = currentTask;
  return templateFragList;
};

// const listDoneCheck = list.querySelector(".list-done-check");
// const listPara = list.querySelector(".list-para");
// const deleteBtn = list.querySelector(".delete-btn");
// const editBtn = list.querySelector(".edit-btn");

// listDoneCheck.addEventListener("change", () => {
//   if (listDoneCheck.checked) {
//     editBtn.setAttribute("disabled", true);
//   } else {
//     editBtn.removeAttribute("disabled");
//   }
//   listDoneTotal();
//   listPara.classList.toggle("line-through");
//   list.classList.add("duration-300");
//   list.classList.toggle("scale-75");
//   list.classList.toggle("opacity-20");
// });

// deleteBtn.addEventListener("click", () => {
//   if (window.confirm("Are you sure to delete")) {
//     list.remove();
//     updateTaskList();
//     listDoneTotal();
//   }
// });

// editBtn.addEventListener("click", () => {
//   editBtn.setAttribute("disabled", true);
//   const newTaskInput = document.createElement("input");
//   newTaskInput.className =
//     "border border-stone-900 pl-2 focus-visible:outline-none";
//   listPara.after(newTaskInput);
//   listPara.classList.add("hidden");
//   newTaskInput.value = listPara.innerText;
//   newTaskInput.focus();

//   newTaskInput.addEventListener("change", () => {
//     editBtn.removeAttribute("disabled");
//     listPara.innerText = newTaskInput.value;
//     listPara.classList.remove("hidden");
//     newTaskInput.remove();
//   });
// });

//To count list task
const updateTaskList = () => {
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};

//To count done lists
const listDoneTotal = () => {
  const lists = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = lists.length;
};

//To delete list
const deleteList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  if (window.confirm("Are you sure to delete")) {
    currentList.remove();
    updateTaskList();
    listDoneTotal();
  }
};

//To edit list
const editList = (listId) => {
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
const doneList = (listId) => {
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

//Handler Functions
const addList = (task) => {
  listGroup.append(createNewList(task));
  taskInput.value = null;
  updateTaskList();
};

const addTaskBtnHandler = () => {
  if (taskInput.value.trim() ? true : false) {
    addList(taskInput.value);
  }
};

const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim() ? true : false) {
      addList(taskInput.value);
    }
  }
};

const listGroupHandler = (event) => {
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

//Listener
//Event on add task btn
addTaskBtn.addEventListener("click", addTaskBtnHandler);
//Listen Event On The Parent listGroup
listGroup.addEventListener("click", listGroupHandler);
//Listen Event On the taskInput
taskInput.addEventListener("keyup", taskInputHandler);
