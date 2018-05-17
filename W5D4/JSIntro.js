
function madLib (verb, adj, noun){
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

function isSubstring(searchString, subString){
  return searchString.includes(subString);
}

function fizzBuzz(array) {
  var result = [];
  array.forEach(function (el){
    if (el % 3 === 0 && el % 5 !== 0){
      result.push(el);
    }
    if (el % 5 === 0 && el % 3 !== 0){
      result.push(el);
    }
  }
);
  return result;
}

function isPrime(number){
  if (number === 2){
  return true;
}
  var count = 2;
  while (count < number) {
    if (number % count === 0){
      return false;
    }
    count++;
  }
  return true;
}

function sumOfNPrimes(number) {
  if (number === 0){
    return 0;
  }
  var i = 2;
  var count = 0;
  var sum = 0;
  while (count < number){
    if (isPrime(i)){
      sum = sum + i;
      count++;
    }
    i++;
  }
  return sum;
}

function printCallback(array) {
  array.forEach( el => console.log(el));
}

function titleize(array, callback) {
  let arr = array.map((el) => `Mx. ${el} Jingleheimer Schmidt`);
  callback(arr);
}

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
  console.log(`${this.name} the elephant goes 'phrRRRR!!!'`);
};

Elephant.prototype.grow = function(){
  this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (newTrick) {
      this.tricks.push(newTrick);
};

Elephant.prototype.play = function () {
  let index = Math.floor(this.tricks.length * Math.random());
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};


let harry = new Elephant('harry', 60, ['running fast','eating alot', 'swimming upstream' ]);

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

herd.forEach( function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
});

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (newOrder) {
    let please = order.slice(order.length - 7, order.length - 1);
    let begining = order.slice(0, order.length - 8);
    order = `${begining} and ${newOrder} ${please}.`;
    console.log(order);
  };
}

let breakfast = dinerBreakfast();
