"use strict"



function createCell(htmlElement, className){
    const element = document.createElement(htmlElement);
    element.classList.add(className);

    return element;
}


function myAppendElement (containerElement, htmlElement){
    containerElement.append(htmlElement);
}

const containerBoard = document.querySelector(".board");
createCell("div", "cell");