



class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = 100;
        this.sleepiness = 100;
        this.boredom = 100;
        this.age = 0;
        
    } feedMe(){
        this.hunger += 1;
        console.log(`Hunger is`, this.hunger);
    } bedTime(){
        this.sleepiness += 1;
        console.log(`Sleep is`, this.sleepiness);
    } playTime(){
        this.boredom += 1;
        console.log(`Boredom is` ,this.boredom);
    } 
}

const taariq = new Tamagotchi('Taariq')

console.log(taariq);




// FUNCTIONS THAT WILL RUN FUNCTIONS AND  UPDATE THE RESPECTIVE NUMBER ELEMENT
const updateHunger = () => {
    taariq.feedMe()
    document.getElementById("hungerNum").innerText = taariq.hunger
}

const updateBoredeom = () =>{
    taariq.playTime()
    document.getElementById("boredomNum").innerText = taariq.boredom
}

const updateSleep = () => {
    taariq.bedTime();
    document.getElementById("sleepNum").innerText = taariq.sleepiness
}

function displayName(){
    let name = document.getElementById("nameBox").value;
    document.getElementById("nameEntry").innerText = `Hello ${name}!`
    console.log(`Your name is ${name}`);  
    taariq.name = name;
}

// DECLARING VARIABLES THAT SELECT THE BUTTONS
let hungerBtn = document.querySelector("#hunger-button")
let boredBtn = document.querySelector("#boredom-button")
let sleepBtn = document.querySelector("#sleep-button")



// ADDING EVENT LISTENERS TO THE BUTTONS WHEN CLICKED
hungerBtn.addEventListener("click", updateHunger)
boredBtn.addEventListener("click", updateBoredeom)
sleepBtn.addEventListener("click", updateSleep)



