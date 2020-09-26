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
const lyrics = document.getElementById("lyrics")
const inputs = document.getElementById("inputs")

submitButton.addEventListener('click', getInput) 


function getInput (){
     const input1 = inputNoun1.value;
     const input2 = inputNoun2.value;
     const input3 = inputVerb.value;
     const input4 = inputAdj.value;
     
     spanButterfly.textContent = input1;
     spanCanGo.textContent = input3;
     spanAdj.textContent = input2;
     spanRainbow.textContent = input4;
     lyrics.classList.toggle('hidden');
     inputs.classList.toggle('hidden');
     document.body.style.backgroundImage = "url('https://i.insider.com/539f33426bb3f7b543726c04?width=1100&format=jpeg&auto=webp')";
     
     

}