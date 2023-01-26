


alert("Welcome To My Tamagotchi Project!")
alert("This game is simple...")
alert("You're objective is to keep me in this server by feeding me, entertaing me, and making sure I get some good sleep! ")
alert("If any of my metrics touch 0, then sorry hun I'm moving on to where I'm appreciated!")
confirm("If you're up for it press 'OK' then enter your name")
let entry = prompt("Hello what is your name?")
document.getElementById("nameEntry").innerText = `Hello ${entry}!`;

class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = 100;
        this.sleepiness = 100;
        this.boredom = 100;
        this.age = 0;
        this.runGame = setInterval(() =>{
            this.age +=1;
            this.hunger -= 1;
            this.sleepiness -= 1;
            this.boredom -= 1;
            console.log(`The current hunger is`, this.hunger,`.` );
            console.log(`The current age is`, this.age,`.` );
            console.log(`The current sleepiness is`, this.sleepiness,`.` );
            console.log(`The current boredom is`, this.boredom,`.` );
            document.getElementById("hungerNum").innerText = taariq.hunger;
            document.getElementById("boredomNum").innerText = taariq.boredom;
            document.getElementById("sleepNum").innerText = taariq.sleepiness;
            document.getElementById("age-update").innerText = taariq.age;
            if (this.age === 33) {
                alert("Woahhh... I feel myself becoming a man!")
                document.getElementById("riq-gif").src="./gif folder/2.gif";
            } else if(this.age === 66){
                alert("My knees are starting to ache and every morning my back bothers me.... I must be getting older")
                document.getElementById("riq-gif").src="./gif folder/3.gif";
                
            }
            
        
        }, 600);
        
    } feedMe(){
        this.hunger += 1;
        this.sleepiness -= 2;
        this.boredom -= 2;
        console.log(`Hunger is`, this.hunger);
    } bedTime(){
        this.sleepiness += 1;
        this.hunger -= 2;
        this.boredom -= 2;
        console.log(`Sleep is`, this.sleepiness);
    } playTime(){
        this.boredom += 1;
        this.sleepiness -= 2;
        this.boredom -= 2;
        console.log(`Boredom is` ,this.boredom);
    } 
}

const taariq = new Tamagotchi('Taariq')

console.log(taariq);




// FUNCTIONS THAT WILL RUN FUNCTIONS AND  UPDATE THE RESPECTIVE NUMBER ELEMENT
const updateHunger = () => {
    taariq.feedMe()
    document.getElementById("hungerNum").innerText = taariq.hunger;
    document.body.style.backgroundColor = "#5c3e2c"
    for (let box of boxes) {
        box.style.borderColor = "#45301f"
    }
    
}

const updateBoredeom = () =>{
    taariq.playTime()
    document.getElementById("boredomNum").innerText = taariq.boredom
    document.body.style.backgroundColor = "#5c3e2c";
    for (let box of boxes) {
        box.style.borderColor = "#45301f";
        
    }
}

const updateSleep = () => {
    taariq.bedTime();
    document.getElementById("sleepNum").innerText = taariq.sleepiness
    document.body.style.backgroundColor = "#5c3e2c";
    for (let box of boxes) {
        box.style.borderColor = "#45301f"
    }
}

function displayName(){
    let name = document.getElementById("nameBox").value;
    document.getElementById("nameEntry").innerText = `Hello ${name}!`;
    console.log(`Your name is ${name}`);  
    taariq.name = name;
}

function lightsOut() {
    document.body.style.backgroundColor = "black";
    alert("HA WE DON'T GET YOUNGER")
    
    
    
}

// DECLARING VARIABLES THAT SELECT THE BUTTONS
let hungerBtn = document.querySelector("#hunger-button")
let boredBtn = document.querySelector("#boredom-button")
let sleepBtn = document.querySelector("#sleep-button")
let lightsOff = document.querySelector("#suprise-button")
let boxes = document.querySelectorAll(".move-us");




// ADDING EVENT LISTENERS TO THE BUTTONS WHEN CLICKED
hungerBtn.addEventListener("click", updateHunger)
boredBtn.addEventListener("click", updateBoredeom)
sleepBtn.addEventListener("click", updateSleep)
lightsOff.addEventListener("click", lightsOut)



