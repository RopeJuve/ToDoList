const data = [];
const input = document.querySelector(".task-text");
const createButton = document.querySelector(".btn-create");
const list = document.querySelector(".list");

const createTaskRow = (task, index) => {
  list.innerHTML += `<div class="task-row">
        <li id='list'>${task.taskName}</li>
        <div><button id='btn-done-${index}' value='done' name='${index}'>Done</button><button id='btn-del-${index}' value='delete'>Delete</button></div>
      </div>`;
};

createButton.addEventListener("click", (e) => {
  e.preventDefault();
  input.innerText = e.target.value;

  data.push({
    taskName: input.value,
    completed: false,
  });
  let index = data.length - 1;

  createTaskRow(data[index], index);
  input.value = "";
  console.log(data);
});
const deleteTask = (e) => {
  console.log(e.target)
  const taskToRemove = e.target.parentElement.parentElement;
  list.removeChild(taskToRemove);
  let index = e.target.value;
  console.log(data.slice(index, 1))
};

 const checkTask = e =>{
  const divList = e.target.parentElement.parentElement;
  const listElement = divList.querySelector('#list');
  data[e.target.name].completed = true
  listElement.style.textDecoration = 'line-through';
  listElement.style.opacity = '0.5'
} 


list.addEventListener("click", (e) => {
  const value = e.target.value
  console.log(value)
  if(value === 'delete'){
    deleteTask(e);
  }else if(value === 'done'){
    checkTask(e);
    console.log(data)
  }
});
