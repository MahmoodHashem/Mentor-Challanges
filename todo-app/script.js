
const body = document.querySelector('body')

const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById('task-template');

const newTaskForm = document.querySelector('[data-new-task-form');
const newTaskinput = document.querySelector('[data-new-task-input');
const tasksCount = document.querySelector('[task-count]');

const clearCompletedButton = document.querySelector('.clear-completed');

const allTab = document.querySelectorAll('.all');
const activeTab = document.querySelectorAll('.active-tasks');
const completedTab = document.querySelectorAll('.completed');

const themeToggler = document.querySelector('.picture'); 
const togglerImage = document.querySelector('.picture img'); 



let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];



themeToggler.addEventListener('click', function(){

  isDarkMode = !isDarkMode;
  updateTheme();

})


tasksContainer.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
        const taskId = e.target.id;
        const task = tasks.find((t) => t.id === taskId);
        task.complete = e.target.checked;
        renderTaskCount()
    }

    if (e.target.classList.contains('cross')) {
        const taskId = e.target.parentElement.querySelector('input').id;
        tasks = tasks.filter((t) => t.id !== taskId);
        saveTasksToLocalStorage()
        render();
    }
});


clearCompletedButton.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.complete);
    saveTasksToLocalStorage();
    render();
});


allTab.forEach(allTab =>{
    allTab.addEventListener('click', () => {
        renderTasks(tasks);
        updateActiveTab(allTab);
    });
})

activeTab.forEach(activeTab =>{
    activeTab.addEventListener('click', () => {
        renderTasks(tasks.filter((task) => !task.complete));
        updateActiveTab(activeTab);
    });
})

completedTab.forEach(completedTab =>{
    completedTab.addEventListener('click', () => {
        renderTasks(tasks.filter((task) => task.complete));
        updateActiveTab(completedTab);
    });
})


function updateTheme() {
  if (isDarkMode) {
    body.classList.add('dark-mode');
    togglerImage.src = './images/icon-sun.svg'; 
    body.classList.remove('light-mode');
  } else {
    body.classList.add('light-mode');
    togglerImage.src = './images/icon-moon.svg'
    body.classList.remove('dark-mode');
  }
}

function updateActiveTab(activeTab) {
    const tabs = document.querySelectorAll('span');
    tabs.forEach((tab) => tab.classList.remove('active'));
    activeTab.classList.add('active');
}


newTaskForm.addEventListener('submit', e => {

    e.preventDefault();

    let taskName = newTaskinput.value;
    if (taskName === null || taskName === '') return;

    const newTask = createtask(taskName);
    newTaskinput.value = ''
    tasks.push(newTask);
    saveTasksToLocalStorage()
    render();



})

function createtask(name) {
    return { id: Date.now().toString(), name: name, complete: false }
}

  
  function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


function render() {
    clearElements(tasksContainer);
    renderTasks();
    renderTaskCount()
}


function renderTaskCount() {
    let unCompleteTaskCount = tasks.filter(task => !task.complete).length;
    let taskString = unCompleteTaskCount === 1 ? 'item' : 'items';
    tasksCount.innerText = `${unCompleteTaskCount} ${taskString} left`
}



function renderTasks(tasksToRender = tasks) {
    clearElements(tasksContainer);
    tasksToRender.forEach((task, index) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkbox = taskElement.querySelector('input');
      checkbox.id = task.id;
      checkbox.checked = task.complete;
      const label = taskElement.querySelector('label');
      label.htmlFor = task.id;
      label.append(task.name);
  
      // Add drag and drop attributes and event listeners
      taskElement.querySelector('.task').draggable = true;
      taskElement.querySelector('.task').dataset.index = index;
      taskElement.querySelector('.task').addEventListener('dragstart', dragStart);
      taskElement.querySelector('.task').addEventListener('dragover', dragOver);
      taskElement.querySelector('.task').addEventListener('drop', drop);
  
      tasksContainer.appendChild(taskElement);
    });
  }


  let draggedItem = null;

function dragStart(e) {
  draggedItem = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', null);
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function drop(e) {
  e.preventDefault();
  if (e.target !== draggedItem) {
    const draggedIndex = parseInt(draggedItem.dataset.index);
    const dropIndex = parseInt(e.target.dataset.index);
    swapTasks(draggedIndex, dropIndex);
    render();
  }
  draggedItem = null;
}


function swapTasks(index1, index2) {
    [tasks[index1], tasks[index2]] = [tasks[index2], tasks[index1]];
  }

function clearElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()