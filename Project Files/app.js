

alert("Welcome To My Tamagotchi Project!");
alert("This game is simple...");
alert(
  "You're objective is to keep me in this server by feeding me, entertaing me, and making sure I get some good sleep! "
);
alert(
  "If any of my metrics touch 0 OR if I age to be 100 then sorry hun I'm moving on to the next DOMAIN!"
);
confirm("If you're up for it press 'OK' then enter your name!");
let entry = prompt("Hello! What is your name?");
alert(`Hi ${entry}! Let's begin!`)
document.getElementById("nameEntry").innerText = `Hello ${entry}!`;

class Tamagotchi {
  constructor(name, hunger, sleepiness, boredom, age) {
    this.name = name;
    this.hunger = 50;
    this.sleepiness = 50;
    this.boredom = 50;
    this.age = 0;
    this.runGame = setInterval(() => {
      this.age += 2;
      this.hunger -= 1;
      this.sleepiness -= 1;
      this.boredom -= 1;
      console.log(`Current hunger is:`, this.hunger,`.`, `Current age is:`, this.age, `.`,`Current sleepiness is:`, this.sleepiness, `.`,`Ccurrent boredom is:`, this.boredom, `.`);
      document.getElementById("hungerNum").innerText = taariq.hunger;
      document.getElementById("boredomNum").innerText = taariq.boredom;
      document.getElementById("sleepNum").innerText = taariq.sleepiness;
      document.getElementById("age-update").innerText = taariq.age;
      if (this.age == 30) {
        this.name = entry;
        alert("You unlocked a new fit!");
        document.getElementById("riq-gif").src = "./Project Files/gif folder/2.gif";
      } else if (this.age == 66) {
        this.name = entry;
        alert(`Woah...${entry} unlocked another wardrobe change!`);
        document.getElementById("riq-gif").src = "./Project Files/gif folder/3.gif";
      }
      if (
        this.age >= 100 ||
        this.hunger <= 0 ||
        this.sleepiness <= 0 ||
        this.boredom <= 0
      ) {
        clearInterval(this.runGame);
        console.log(this.hunger, this.boredom, this.sleepiness,this.age);
        console.log("DONE");
        document.getElementById("riq-gif").src = "./Project Files/gif folder/jet.gif";
        document.getElementById(
          "nameEntry"
        ).innerText = `${entry} went to a new server! Game Over!`;
      }
    }, 1000);
  }
  feedMe() {
    this.hunger += 1;
    console.log(`Hunger is`, this.hunger);
  }
  bedTime() {
    this.sleepiness += 1;
    console.log(`Sleep is`, this.sleepiness);
  }
  playTime() {
    this.boredom += 1;
    console.log(`Boredom is`, this.boredom);
  }
}

const taariq = new Tamagotchi("Taariq");
taariq.name = entry;

// FUNCTIONS THAT WILL RUN FUNCTIONS AND  UPDATE THE RESPECTIVE NUMBER ELEMENT
const updateHunger = () => {
  taariq.feedMe();
  document.getElementById("hungerNum").innerText = taariq.hunger;
  document.body.style.backgroundColor = "#5c3e2c";
  for (let box of boxes) {
    box.style.borderColor = "#45301f";
  }
};

const updateBoredeom = () => {
  taariq.playTime();
  document.getElementById("boredomNum").innerText = taariq.boredom;
  document.body.style.backgroundColor = "#5c3e2c";
  for (let box of boxes) {
    box.style.borderColor = "#45301f";
  }
};

const updateSleep = () => {
  taariq.bedTime();
  document.getElementById("sleepNum").innerText = taariq.sleepiness;
  document.body.style.backgroundColor = "#5c3e2c";
  for (let box of boxes) {
    box.style.borderColor = "#45301f";
  }
};

function displayName() {
  let name = document.getElementById("nameBox").value;
  document.getElementById("nameEntry").innerText = `Hello ${name}!`;
  console.log(`Your name is ${name}`);
  taariq.name = name;
}

function lightsOut() {
  document.body.style.backgroundColor = "black";
  alert("It's about to get dark!");
}

// DECLARING VARIABLES THAT SELECT THE BUTTONS////////////////////////////////////////////////////

let hungerBtn = document.querySelector("#hunger-button");
let boredBtn = document.querySelector("#boredom-button");
let sleepBtn = document.querySelector("#sleep-button");
let lightsOff = document.querySelector("#suprise-button");
let boxes = document.querySelectorAll(".move-us");


// ADDING EVENT LISTENERS TO THE BUTTONS WHEN CLICKED////////////////////////////////////////////

hungerBtn.addEventListener("click", updateHunger);
boredBtn.addEventListener("click", updateBoredeom);
sleepBtn.addEventListener("click", updateSleep);
lightsOff.addEventListener("click", lightsOut);

// let el = document.getElementById("riq-gif"); // get a reference to the targeted element
// el.classList.add("riq-gif"); // add the class name to that element
