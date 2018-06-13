// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.
// Object.keys(bob).length should return 6.

const Person = function personCreator(firstAndLast) {
  this.getFullName = () => firstAndLast;

  this.getFirstName = () => firstAndLast.split(' ')[0];

  this.getLastName = () => firstAndLast.split(' ')[1];

  this.setFullName = (fullName) => { firstAndLast = fullName };

  this.setFirstName = (firstName) => {
    const [first] = firstAndLast.split(' ');
    firstAndLast = firstAndLast.replace(first, firstName);
  };

  this.setLastName = (lastName) => {
    const [first, last] = firstAndLast.split(' ');
    firstAndLast = firstAndLast.replace(last, lastName);
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
bob.getFullName();
bob.getLastName();
