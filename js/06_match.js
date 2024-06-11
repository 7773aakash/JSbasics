"use strict"

// Select all <a> elements with href ending in "zip"
let anchors = document.querySelectorAll('a[href$="zip"]');

// Iterate over the selected anchors and alert their href attributes
for (let anchor of anchors) {
alert("The archive reference: " + anchor.href);
}
  