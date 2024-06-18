      // Using className
      let element = document.getElementById('myElement');
      element.className = 'newClass'; // Replaces all classes with 'newClass'
      alert(element.className); // Output: 'newClass'

      // Using classList
      element.classList.add('anotherClass'); // Adds 'anotherClass'
      element.classList.remove('newClass'); // Removes 'newClass'
      element.classList.toggle('toggleClass'); // Toggles 'toggleClass'
      alert(element.classList.contains('toggleClass')); // Output: true or false
      alert(element.classList.value); // Output: 'anotherClass toggleClass'