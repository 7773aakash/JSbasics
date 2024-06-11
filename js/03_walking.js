// parent of <body> is <html>
alert( document.body.parentNode === document.documentElement ); // true

alert (document.head.nextElementSibling);  //HTMLbodyElement 
// if we not use element it gives text because meta has newline and space

alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement ); // null

