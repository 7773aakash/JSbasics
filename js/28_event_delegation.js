document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      alert('Clicked on ' + event.target.textContent);
    }
  });
  document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      let action = event.target.getAttribute('data-action');
      alert('Button action: ' + action);
    }
  });
    