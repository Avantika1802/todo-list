function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <span class="task-text">${taskText}</span>
        <input type="datetime-local" class="due-time">
        <button class="remove-button" onclick="removeTask(event)">Remove</button>
      `;
      taskList.appendChild(newTask);
  
      // Clear the input after adding a task
      taskInput.value = '';
    }
  }
  
  function removeTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
  