//Selectors
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskTotal = document.querySelector("#task-total");
const listGroup = document.querySelector("#list-group");
const doneTaskTotal = document.querySelector("#done-task-total");

//Actions or Business Logic
//To create new list
const createNewList = (currentTask) => {
  const list = document.createElement("div");
  list.id = "List" + Date.now();
  list.classList.add("list");
  list.innerHTML = `<div
    class="flex justify-between border-2 border-stone-900 p-4 mb-3"
    style="border-radius: 30px 0px 30px 0px"
  >
    <div class="flex items-center gap-2">
      <input type="checkbox" class="list-done-check" />
      <p class="font-mono list-para">${currentTask}</p>
    </div>
    <div class="flex items-center gap-2">
      <button class="border edit-btn border-stone-900 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 pointer-events-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      <button class="border delete-btn border-stone-900 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 pointer-events-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  </div>`;

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

  return list;
};

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
