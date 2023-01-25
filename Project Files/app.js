


// Instantiate your Tamagotchi (If you created a class)
// Display a character of your choice on the screen to represent your pet

class Tamagotchi {
    constructor(name,hunger,sleep){
        this.name = name;
        this.hunger = 100;
        this.sleepiness = 100;
        this.boredom = 100;
    }
}

const taariq = new Tamagotchi('Taariq')

console.log(taariq);