
/* function sendCars(day, ...allCarIds){
    allCarIds.forEach(id => console.log(id));
}

sendCars('Monday', 100, 200, 555); */

/* let carIds = [1, 2, 5];
let [car1, car2, car3] = carIds;

console.log(car1, car2, car3); */

/* let carIds = [1, 2, 5];
let [car1, ...remainingCars] = carIds;

console.log(car1, remainingCars); */

/* let car = {id: 5000, style: 'convertible'};
let id, style;

({id, style} = car);

console.log(id, style); */

/* function startCars(car1, car2, car3){
    console.log(car1, car2, car3);
}

let carCodes = 'abc';
startCars(...carCodes); */

/* function startCars(car1, car2, car3, ...rest){
    console.log(rest);
}

let carCodes = 'abcdefg';
startCars(...carCodes); */

/* console.log(typeof(1));
console.log(typeof(true));
console.log(typeof('Hello'));
console.log(typeof([]));
console.log(typeof(function(){}));
console.log(typeof({}));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN)); */

/* console.log(Number.parseInt('55'));
console.log(Number.parseInt('55ABC'));
console.log(Number.parseFloat('55.55ABC'));
console.log(Number.parseFloat('ABC')); */

/*function startCar(carId) {
  let message = 'Starting...';
  let startFn = function turnKey() {
    let message = 'Override';
    console.log(message);
  };
  startFn();
  console.log(message);
}

startCar(123);*/

/*let app = (function () {
  let carId = 123;
  let getId = function () {
    return carId;
  };
  return {getId: getId};
})();
console.log(app.getId());*/

/*function showName(firstName, lastName) {
  let nameIntro = 'Your name is ';

  function makeFullName() {
    return nameIntro + firstName + ' ' + lastName;
  }

  return makeFullName();
}

console.log(showName('Michael', 'Jackson'));*/

/*function celebrityName(firstName) {
  let nameIntro = 'This celebrity is ';

  function lastName(theLastName) {
    return nameIntro + firstName + ' ' + theLastName;
  }
  return lastName;
}

let mjName = celebrityName("Michael");

console.log(mjName("Jackson"));*/

/*function celebrityID() {
  let celebrityID = 999;

  return {
    getID: function () {
      return celebrityID;
    },
    setID: function (theNewID) {
      celebrityID = theNewID;
    }
  };
}

let mjID = celebrityID();
console.log(mjID.getID());
mjID.setID(567);
console.log(mjID.getID());*/

/*function celebrityIDCreator(theCelebrites) {
  let i;
  let uniqueID = 100;
  for(i = 0; i < theCelebrites.length; i++){
    theCelebrites[i]['id'] = function () {
      return uniqueID + i;
    };
  }

  return theCelebrites;
}

let actionCelebs = [{name: 'Stallone', id: 0}, {name: 'Cruise', id: 0},
  {name: 'Willis', id: 0}];

let createdIDForActionCelebs = celebrityIDCreator(actionCelebs);

let stalloneID = createdIDForActionCelebs[0];

console.log(stalloneID.id());*/

/*
function celebrityIDCreator(theCelebrites) {
  let i;
  let uniqueID = 100;
  for(i = 0; i < theCelebrites.length; i++){
    theCelebrites[i]['id'] = function (j) {
      return function () {
        return uniqueID + j;
      }();
    }(i);
  }

  return theCelebrites;
}

let actionCelebs = [{name: 'Stallone', id: 0}, {name: 'Cruise', id: 0},
  {name: 'Willis', id: 0}];

let createdIDForActionCelebs = celebrityIDCreator(actionCelebs);

let stalloneID = createdIDForActionCelebs[0];

console.log(stalloneID.id);

let cruiseID = createdIDForActionCelebs[1];

console.log(cruiseID.id);*/

/*let o = {
  carId: 123,
  getId: function () {
    console.log(this);
    return this.carId;
  }
};

console.log(o.getId());*/

/*
let o = {
  carId: 123,
  getId: function () {
    console.log(this);
    return this.carId;
  }
};

let newCar = {carId: 456};
console.log(o.getId.call(newCar));*/

/*
let o = {
  carId: 123,
  getId: function (prefix, postfix) {
    console.log(this);
    return prefix + this.carId + postfix;
  }
};

let newCar = {carId: 456};
console.log(o.getId.apply(newCar, ['ID: ', ' Test']));*/

/*let o = {
  carId: 123,
  getId: function () {
    console.log(this);
    return this.carId;
  }
};

let newCar = {carId: 456};

let newFn = o.getId.bind(newCar);

console.log(newFn());*/



/*let getId = () => 123;

console.log(getId());*/


/*let getId = (prefix, postfix) => prefix + 123 + postfix;

console.log(getId('ID: ', '!'));*/

/*let trackCar = function (carId, city = 'New York') {
  console.log(`Tracking ${carId} in ${city}.`);
};

trackCar(123);

trackCar(123, 'Chicago');*/


/*
function Car(id) {
  this.carId = id;

  this.start = function () {
    console.log('start: ' + this.carId);
  };
}

let vehicle = new Car(123);
console.log(vehicle);
vehicle.start();*/


/*
let person = {};
Object.defineProperty(person, "name", {
  writable: false,
  value: 'Nicholas'
});

console.log(person.name);
person.name = "Greg";
console.log(person.name);*/


/*let person = {};
Object.defineProperty(person, "name", {
  configurable: false,
  value: 'Nicholas'
});

console.log(person.name);
delete person.name;
console.log(person.name);*/


/*
let book = {
  _year: 2004,
  edition: 1
};

Object.defineProperty(book, 'year', {
  get: function () {
    return this._year;
  },
  set: function (newVal) {
    if(newVal > 2004){
      this._year = newVal;
      this.edition += newVal - 2004;
    }
  }
});

book.year = 2005;
console.log(book._year);
console.log(book.year);
console.log(book);

let descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

let descriptor1 = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor1.value);
console.log(descriptor1.enumerable);
console.log(typeof descriptor1.get);*/

/*function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  };
}

let person1 = new Person('Nicholas', 29, 'Software Engineer');
let person2 = new Person('Greg', 27, 'Doctor');

console.log(person1);

console.log(person1.constructor === Person);
console.log(person2.constructor === Person);

console.log(typeof person1);
console.log(person1 instanceof Person);*/

/*

function Person() {
}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  console.log(this.name);
};

let person1 = new Person();
person1.sayName();

let person2 = new Person();
person2.sayName();

console.log(person1.sayName === person2.sayName);

console.log(person1);
console.log(person2);

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));

console.log(Object.getPrototypeOf(person1) === Person.prototype);

person1.name = 'Greg';
person1.sayName();
person2.sayName();

delete person1.name;
person1.sayName();
*/

/*

function Person() {
}

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function () {
  console.log(this.name);
};

let person1 = new Person();
let person2 = new Person();

console.log(person1.hasOwnProperty('name'));
console.log('name' in person1);

person1.name = 'Greg';
console.log(person1.name);
console.log(person1.hasOwnProperty('name'));
console.log('name' in person1);

console.log(person2.name);
console.log(person2.hasOwnProperty('name'));
console.log('name' in person2);

delete person1.name;
console.log(person1.name);
console.log(person1.hasOwnProperty('name'));
console.log('name' in person1);

function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);
}

for(let prop in person1){
  console.log(prop);
}
*/

/*

function Person() {

}

Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName : function () {
    console.log(this.name);
  }
};

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
});

let friend = new Person();
friend.sayName();
console.log(friend);
*/

/*

function Person() {

}

let friend = new Person();

Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName : function () {
    console.log(this.name);
  }
};

Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
});

let newFriend = new Person();
try{
  friend.sayName();
}
catch (err) {
  console.log(err);
}
newFriend.sayName();
*/

/*

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['Shelby', 'Court'];
}

Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  }
};

let person1 = new Person('Nicholas', 29, 'Software Engineer');
let person2 = new Person('Greg', 27, 'Doctor');

person1.friends.push("Van");

console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
console.log(person1.sayName === person2.sayName);
*/


/*

function Person(name, age, job) {
  let obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.job = job;
  obj.sayName = function () {
    console.log(this.name);
  };
  return obj;
}

let friend = new Person('Nicholas', 29, 'Software Engineer');
friend.sayName();

console.log(friend);
*/

/*


function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

let instance = new SubType();
console.log(instance.getSubValue());
console.log(instance.getSuperValue());
console.log(instance);

console.log(instance instanceof Object);
console.log(instance instanceof SubType);
console.log(instance instanceof SuperType);

*/


/*


function SuperType() {
  this.colors = ['Red', 'Green', 'Blue'];
}

function SubType() {

}

SubType.prototype = new SuperType();

let instance1 = new SubType();
instance1.colors.push('Black');
console.log(instance1.colors);

let instance2 = new SubType();
console.log(instance2.colors);

*/


/*


function SuperType() {
  this.colors = ['Red', 'Green', 'Blue'];
}

function SubType() {
  SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push('Black');
console.log(instance1.colors);

let instance2 = new SubType();
console.log(instance2.colors);

console.log(instance1);
console.log(instance2);

*/

/*


function SuperType(name) {
  this.name = name;
  this.colors = ['Red', 'Green', 'Blue'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

let instance1 = new SubType('Nicholas', 29);
instance1.colors.push('Black');
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

let instance2 = new SubType('Greg', 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();

console.log(instance1);
console.log(instance2);

*/


/*

let jsonIn =
  `[
      {"carId": 123},
      {"carId": 456},
      {"carId": 789}
   ]
  `;

let carIds = JSON.parse(jsonIn);
console.log(carIds);
console.log(JSON.stringify(carIds));

*/

/*


let carIds = [
  { carId: 123, style: 'sedan'},
  { carId: 456, style: 'convertible'},
  { carId: 789, style: 'sedan'}
];

carIds.forEach(car => console.log(car));
carIds.forEach((car, index) => console.log(car, index));

let convertibles = carIds.filter(car => car.style === 'convertible');
console.log(carIds);
console.log(convertibles);

let result = carIds.every(car => car.carId > 0);
console.log(result);

let  car = carIds.find(car => car.carId > 450);
console.log(car);

*/

/*

class Car {
  constructor(id){
    this.id = id;
  }

  identify(postfix){
    return `Car Id: ${this.id} ${postfix}`;
  }
}

let car1 = new Car(123);
console.log(car1);
console.log(car1.identify('TTT'));

*/

/*


class Vehicle {
  constructor(){
    this.type = 'car';
  }
  start(){
    return `Starting: ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor(){
    super();
  }

  start(){
    return 'In car start ';
  }
}

let car = new Car();
console.log(car);


*/


/*


import { Car } from './models/car.js';

let car1 = new Car(123);
console.log(car1);

*/



// let timeoutId = setTimeout(function () {
//   console.log(`10 second passed`);
// }, 10000);


// let intervalId = setInterval(function () {
//   console.log(`1 second passed`);
// }, 1000);


//console.log(location.href);

/*

let el = document.getElementById('first');
console.log(el);

let els1 = document.getElementsByClassName('p1');
console.log(els1);

let els2 = document.getElementsByTagName('p');
console.log(els2);
*/

/*


let el = document.getElementById('first');

el.textContent = 'New content...';
el.setAttribute('foo', 'fooValue');

el.classList.add('p2');

el.style.color = 'blue';

console.log(el);

*/


/*

try{
  //code here
  throw new Error('custom error');
}
catch (e) {
  console.log(`error: ${e}`);
}
finally {
  console.log('continuing...');
}
*/

/*


let promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'someValue');
});

promise.then(
  value => console.log('fullfilled: ' + value),
  error => console.log('rejected: ' + error)
);

console.log(promise);

*/

/*


import $ from 'jquery';

let promise = $.get('http://5bb8ffcdb6ed2c0014d47515.mockapi.io/api/v1/users');
promise.then(
  data => console.log('success: ', data),
  error => console.log('error: ', error)
);
*/


/*

import $ from 'jquery';
let user = {
  name: 'Wei Shuai',
  avatar: 'mark.jpg'
};

let promise = $.post('http://5bb8ffcdb6ed2c0014d47515.mockapi.io/api/v1/users', user);
promise.then(
  data => console.log('success: ', data),
  error => console.log('error: ', error)
);

*/

/*

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
  let user = form.elements['user'];
  //let avatarFile = form.elements['avatar-file'];
  let userError = document.getElementById('user-error');

  if(user.value.length < 4){
    userError.textContent = 'Invalid entry';
    userError.style.color = 'red';
    user.style.color = 'red';
    user.focus();

    event.preventDefault();
  }
});

*/

/*


import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
  let user = form.elements['user'];
  let avatarFile = form.elements['avatar-file'];

  let postData = {
    user: user.value,
    avatarFile: avatarFile.value
  };

  let promise = $.post('http://5bb8ffcdb6ed2c0014d47515.mockapi.io/api/v1/users',
    postData);
  promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
  );

  event.preventDefault();
});


*/



