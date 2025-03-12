const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    var obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(", ")}.`;
    }
    obj.greeting = function () {
        alert(`Hello ${this.name.firstName}, how are you?`);
    }
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);
person1.greeting(); // Call the greeting method to see the alert

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(", ")}.`;
    }
    this.greeting = function () {
        alert(`Hello ${this.name.firstName}, how are you?`);
    }
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person2 = new Person("Parth", "Thakor", 19, "Male", ["coding", "playing"]);
let person3 = new Person("Janki", "Thakor", 25, "Female", ["sleeping", "jumping"]);

person2.greeting(); // Call greeting for person2
person3.greeting(); // Call greeting for person3

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
// This has already been done in the Person constructor above

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person4 = new Person("Ram", "Kshatriya", 28, "Male", ["Archary", "Carring animal"]);

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

// Accessing properties in the console
console.log(person1['age']); // 16
console.log(person1.interests[1]); // dancing
console.log(person1.bio()); // The interests of Priyansh, of age 16, of gender Male are swimming, dancing, cooking.

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car */
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.model = "Civic";
car.year = 2020;
car.getCarInfo = function () {
    return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
};

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.getCarInfo() function */
car.year = 2021; // Update the year
console.log(car.getCarInfo()); // Car: Honda Civic, Year: 2021

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
output2.textContent = `Another Car: ${anotherCar.brand}`; // Outputs: Another Car: Honda

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

function Hamburger(bunType, meatType, cheeseType, toppings) {
    this.bunType = bunType;
    this.meatType = meatType;
    this.cheeseType = cheeseType;
    this.toppings = toppings || []; // Default to an empty array if no toppings are provided

    this.describe = function () {
        return `This hamburger has a ${this.bunType} bun, ${this.meatType} patty, ${this.cheeseType} cheese, and is topped with ${this.toppings.join(", ")}.`;
    }
}

// Example of creating a hamburger object
let myBurger = new Hamburger("sesame", "beef", "cheddar", ["lettuce", "tomato", "onion"]);
console.log(myBurger.describe()); // Outputs: This hamburger has a sesame bun, beef patty, cheddar cheese, and is topped with lettuce, tomato, onion.