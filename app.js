// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const inputNoun1 = document.getElementById("noun-rainbow")
const inputNoun2 = document.getElementById("noun-butterfly")
const inputVerb = document.getElementById("verb-can-do")
const inputAdj = document.getElementById("adj-reading")
const submitButton = document.getElementById("submit-button")
const spanButterfly = document.getElementById("butterfly1")
const spanCanGo = document.getElementById("can-go1")
const spanAdj = document.getElementById("adj1")
const spanRainbow = document.getElementById("rainbow1")

submitButton.addEventListener('click', getInput) 


function getInput (){
     const input1 = inputNoun1.value;
     const input2 = inputNoun2.value;
 }