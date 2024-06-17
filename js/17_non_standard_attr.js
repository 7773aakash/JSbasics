"use strict"
  const task1 = document.getElementById('task1');
  const task2 = document.getElementById('task2');
  const task3 = document.getElementById('task3');

  // Read the data attribute
  alert(task1.dataset.taskStatus); // not-started

  // Modify the data attribute
  task1.dataset.taskStatus = "in-progress"; // Changes the status and style
  task2.dataset.taskStatus = "complete"; // Changes the status and style

