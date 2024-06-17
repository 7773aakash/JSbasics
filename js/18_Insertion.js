ol.before('before'); // insert string "before" before <ol>
ol.after('after'); // insert string "after" after <ol>

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // insert liLast at the end of <ol>