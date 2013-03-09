"use strict";

let nodeList;

// Change submit
nodeList = document.querySelectorAll("input[type=submit]");

[].forEach.call(nodeList, function(e) {
    e.setAttribute("title", e.getAttribute("value"));
    e.setAttribute("value", "Hopla!");
});

// Change buttons
nodeList = document.querySelectorAll("button");

[].forEach.call(nodeList, function(e) {
    if (e.childNodes.length === 1 && e.childNodes[0].textContent) {
        e.setAttribute("title", e.childNodes[0].textContent.replace(/^\s*/, "").replace(/\s*$/, ""));
        e.removeChild(e.childNodes[0]);
        e.appendChild(document.createTextNode("Hopla!"));
    }
});
