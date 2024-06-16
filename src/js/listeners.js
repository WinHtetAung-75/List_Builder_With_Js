import { addTaskBtnHandler, listGroupHandler, taskInputHandler } from "./handlers.js";
import { addTaskBtn, listGroup, taskInput } from "./selectors.js";

const listener = () => {
  //Listener
  //Event on add task btn
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  //Listen Event On The Parent listGroup
  listGroup.addEventListener("click", listGroupHandler);
  //Listen Event On the taskInput
  taskInput.addEventListener("keyup", taskInputHandler);
};
export default listener;
