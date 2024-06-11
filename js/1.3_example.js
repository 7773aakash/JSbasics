document.body.firstElementChild                 // for div
// or
document.body.children[0]
// or (the first node is space, so we take 2nd)
document.body.childNodes[1]

document.body.lastElementChild
// or
document.body.children[1]                      // for ul

// get <ul>, and then get its last element child
document.body.lastElementChild.lastElementChild