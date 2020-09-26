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
const spanAdj2 = document.getElementById("adj2")
const spanAdj3 = document.getElementById("adj3")
const spanAdj4 = document.getElementById("adj4")
const spanRainbow = document.getElementById("rainbow1")
const spanRainbow2 = document.getElementById("rainbow2")
const spanRainbow3 = document.getElementById("rainbow3")
const spanRainbow4 = document.getElementById("rainbow4")
const spanRainbow5 = document.getElementById("rainbow5")
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
     spanAdj2.textContent = input2;
     spanAdj3.textContent = input2;
     spanAdj4.textContent = input2;
     spanRainbow.textContent = input4;
     spanRainbow2.textContent = input4;
     spanRainbow3.textContent = input4;
     spanRainbow4.textContent = input4;
     spanRainbow5.textContent = input4;
     lyrics.classList.toggle('hidden');
     inputs.classList.toggle('hidden');
     document.body.style.backgroundImage = "url('https://i.insider.com/539f33426bb3f7b543726c04?width=1100&format=jpeg&auto=webp')";
}