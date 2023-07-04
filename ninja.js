class Ninja {
    constructor (name, health = 90, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`My name is ${this.name}, and my strength is ${this.strength}, my speed is ${this.speed}, and my health is ${this.health}!`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`I feel even better! ${this.name} gained 10 health. My health is now ${this.health}!`);
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
