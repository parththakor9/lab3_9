const output = document.getElementById('output');

// STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces)
let person = {
    name: {
        "firstName": "Priyansh",
        "lastName": "Thakar"
    },
    age: 16,
    gender: "Male",
    address: "1 Georgian Drive",
    interests: ["swimming", "reading", "dancing"],
    greeting: function () {
        alert(`Hello ${this.name.firstName}, How are you?`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, living at ${this.address} are ${this.interests.join(", ")}.`;
    }
}

// STEP 2a: Add other data items to the above object, like name, age, gender, address, and interests

// STEP 2b: Enter the following directly into the console:
// person.name.firstName
// person.age
// person.gender
// person.interests[0]

// STEP 3: Add a simple function (now called a method in this context) to the above object called "greeting"
person.greeting(); // Call the greeting method to see the alert

// STEP 4: Add a more complicated function to the object that describes the person
// This is already done in the bio() method above

// STEP 5a: Access the name, age, and gender of the person object, and put it inside the <p id="output"></p>.
output.textContent = person.bio(); // Display the bio in the output paragraph

// STEP 5b: Update the above bio() function inside the person object to return the string, instead of the alert().
// This is already done in the bio() method above

// STEP 6a: An object can even contain another object - update object person above to include a name object.
person.name = {
    firstName: "Priyansh",
    lastName: "Thakar"
};

// Update the greeting function to use this sub-namespace
person.greeting = function () {
    alert(`Hello ${this.name.firstName}, How are you?`);
};

// STEP 6b: Fix the bio() function to use the sub-namespace of 'name' as well
person.bio = function () {
    return `The interests of ${this.name.firstName}, of age ${this.age}, living at ${this.address} are ${this.interests.join(", ")}.`;
};

// STEP 7: You can also use bracket notation, just like an array
console.log(person["address"]); // Accessing address using bracket notation

// STEP 8: You can also set members of an object - try changing the person's name, and age
person.age = 80; // Update age

// STEP 9a: It is also possible to add new members to an object - include eye color
person.eyeColor = "Green"; // Add eye color property

// STEP 9b: Add a new function called 'goodbye' to the person object
person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
};

// STEP 10: Dynamically set both names and values for objects
let key = "hairColor";
let value = "Black";
person[key] = value; // Add hairColor property dynamically

// STEP 11a: Create two new objects, each with a name, and a function that outputs the name
let person1 = {
    name: "Parth",
    hello: function () {
        alert(`Hello, this is ${this.name}.`);
    }
};

let person2 = {
    name: "Ram",
    hello: function () {
        alert(`Hello, this is ${this.name}.`);
    }
};

// STEP 11b: Call up both person1.hello() and person2.hello() in the console
person1.hello(); // Alerts: Hello, this is P1.
person2.hello(); // Alerts: Hello, this is P2.

// You have already been using objects all along:
let myString = 'Words, words, words.'; // This creates an instance of the class String
const elem = document.getElementById('output'); // This accesses the Document object

// Next, open up oop.html and we will delve a bit deeper into JavaScript objects.