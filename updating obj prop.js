// Updating Object Properties 


/* Update the myDog object's name property. 
    Change her name from Coder to Happy Coder */

const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
console.log(myDog);

//console output :
{ name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: [ 'freeCodeCamp Campers' ] }

  // ********** 
//Add New Properties to a JS Object

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ['freeCodeCamp Campers']
};

myDog.bark = "woof";

console.log(myDog);
//console output:
{ name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: [ 'freeCodeCamp Campers' ],
  bark: 'woof' }

// *********** //
  //Delete Properties from a JS Object

  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };

  delete myDog.tails;

  console.log(myDog);

  //console output:
  { name: 'Happy Coder',
  legs: 4,
  friends: [ 'freeCodeCamp Campers' ],
  bark: 'woof' }
