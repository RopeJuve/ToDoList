const data = [];


const createButton = document.querySelector(".btn-create");
const input = document.querySelector(".task-text");
const list = document.querySelector(".list");

const createTaskRow = (task,index) => {
  list.innerHTML += `<div class="task-row">
        <li id='${index}'>${task.taskName}</li>
        <div><button id='btn-done-${index}'>Done</button><button id='btn-del-${index}'>Delete</button></div>
      </div>`;
};

createButton.addEventListener("click", () => {
 
  data.push({
      taskName: input.value,
      completed: false
  });
  let index = data.length - 1;
  createTaskRow(data[index], index)
  input.value = "";
  console.log(data);
});
