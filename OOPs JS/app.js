// Constructor function(parent class)

function Creature(ls){
    this.lifeSpan = ls;
}
Creature.prototype.breath = function(){
    console.log("breathing...");
}
let creature1 = new Creature ('100')
console.log(creature1)


// Constructor Function working as Class (PROPERTY)

function Person (first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}
    // PROTOTYPE METHOD

    Person.prototype.fullName = function (){
    console.log(this.firstName + " " + this.lastName)
}
   //CONNECT TO PERSON OBJECT WITH CREATURE FUNCTION PROTOTYPE

   Person.prototype.fullName.__proto__ = Object.create(Creature.prototype);

   // create object
let person1 = new Person ("Adarsh", "Srivastava", 22)
let person2 = new Person ("Shivam", "Garg", 25)

console.log(person1)
console.log(person2.breath())

