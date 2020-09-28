

    // Inputs and Button

const inputNoun1 = document.getElementById('noun-rainbow');
const inputNoun2 = document.getElementById('noun-butterfly');
const inputVerb = document.getElementById('verb-can-do');
const inputAdj = document.getElementById('adj-reading');
const submitButton = document.getElementById('submit-button');




    // Words

const spanButterfly = document.getElementById('butterfly1');


const spanCanGo = document.getElementById('can-go1');
const spanCanGo2 = document.getElementById('can-go2');


const spanReading = document.getElementById('reading1');
const spanReading2 = document.getElementById('reading2');
const spanReading3 = document.getElementById('reading3');
const spanReading4 = document.getElementById('reading4');
const spanReading5 = document.getElementById('reading5');

const spanRainbow = document.getElementById('rainbow1');
const spanRainbow2 = document.getElementById('rainbow2');
const spanRainbow3 = document.getElementById('rainbow3');
const spanRainbow4 = document.getElementById('rainbow4');
const spanRainbow5 = document.getElementById('rainbow5');




    // Sections to be hidden

const lyrics = document.getElementById('lyrics');
const inputs = document.getElementById('inputs');



    // Click Handler

submitButton.addEventListener('click', getInput); 

function getInput() {

    const input1 = inputNoun1.value;
    const input2 = inputNoun2.value;
    const input3 = inputVerb.value;
    const input4 = inputAdj.value;

    spanButterfly.textContent = input2;

    spanCanGo.textContent = input3;
    spanCanGo2.textContent = input3;

    spanReading.textContent = input4;
    spanReading2.textContent = input4;
    spanReading3.textContent = input4;
    spanReading4.textContent = input4;
    spanReading5.textContent = input4;

    spanRainbow.textContent = input1;
    spanRainbow2.textContent = input1;
    spanRainbow3.textContent = input1;
    spanRainbow4.textContent = input1;
    spanRainbow5.textContent = input1;

    lyrics.classList.toggle('hidden');
    inputs.classList.toggle('hidden');

    document.body.style.backgroundImage = "url('https://i.insider.com/539f33426bb3f7b543726c04?width=1100&format=jpeg&auto=webp')";
}