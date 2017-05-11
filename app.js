// function userName(u) {
//   alert('welcome to my page ' + u);
//   return;
// }
// var user = prompt('What is your name?');
//   console.log('user: ' + user);
// userName(user);
//
// function uAnswer(us) {
//   if (userAnswer === 'yes') {
//       alert('Nice! Lets keep going!' + us);
//   } else {
//       alert('Well... we gotta keep going anyway because this is my assignment');
//   }
//   return userAnswer;
// }
// var userAnswer = prompt('Do you want to continue playing?').toLowerCase();
//   console.log('userAnswer: ' + userAnswer);
// uAnswer(userAnswer);
//
//
// function mAge(age) {
//   if (myAge === '28') {
//     alert('NO WAY! How did you know?' + age);
//   } else {
//     alert('you\'re close but not quite there yet, I am actually 28');
//   }
//   return myAge + age;
// }
//
// var myAge = prompt('Guess what my age is ' + user);
// console.log('age: ' + myAge);
//
// mAge(myAge);
//
//
//
// function mFood(food) {
//   if ('pizza' || 'burger' || 'ice cream' || 'sandwiches') {
//     alert('How did you know I like ' + myFood + ' ?');
//   } else {
//     alert('try again!' + food);
//   }
//   return myFood;
// }
//
// var myFood = prompt('Alright ' + user + ' lets try another one, what is my favorite food?');
// console.log('food: ' + myFood);
//
// mFood(myFood);
//
// function uATwo(two) {
//   if (userAnswerTwo === 'yes') {
//     alert('You\'re awesome! But we are done! Now lets look at my about me page');
//   }
//   else {
//     alert('Ohh man I was having fun, ok bye!');
//   }
//   return userAnswerTwo;
// }
// var userAnswerTwo = prompt('Are you bored yet?').toLowerCase();
// console.log('userAnswerTwo: ' + userAnswerTwo);
//
// uATwo(userAnswerTwo);

function fNumber(f){
if (answer < faveNumber) {
  alert('too low, try again');
} else if (answer > faveNumber) {
  alert('too high, try again');
} else {
  alert('you got it!');
}
return faveNumber + f;
}

var faveNumber = 5;
// this loop will loop 4 times and give the user 4 tries to get the correct answer
for (var i=0; i < 4; i++) {
  var answer = prompt('guess my favorite number from 1 to 10');
  console.log('number:' + answer);

    break; // once the user gets it right this break will stop the loop.
  }
fNumber(faveNumber);
//
// var states = ['washington', 'oregon', 'new york'];
// var userGuess = 0; // user will start off with 0
//
// while(userGuess < 6){
//   var answer7 = prompt('what states have i lived in?').toLowerCase();
//   for (var i=0; i < states.length; i++) {
//     console.log(states);
//     if (states[i] === answer7) {
//       alert('you got it right!');
//       userGuess = 6; // user will have 6 tries to guess.
//       break;
//     }
//   }
//   userGuess++;
//   if (userGuess < 6){
//     alert('try again');
//   }
// console.log(answer7);
// console.log(userGuess);
// }
