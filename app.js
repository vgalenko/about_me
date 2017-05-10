//
// var user = prompt('What is your name?');
// console.log('user: ' + user);
//
//   alert('welcome to my page ' + user);
//
// var userAnswer = prompt('Do you want to continue playing?').toLowerCase();
// console.log('userAnswer: ' + userAnswer);
//
// if (userAnswer === 'yes') {
//     alert('Nice! Lets keep going!')
// }
//
// else {
//     alert('Well... we gotta keep going anyway because this is my assignment')
// }
//
// var myAge = prompt('Guess what my age is ' + user);
// console.log('age: ' + myAge);
//
// if (myAge === '28') {
//   alert('NO WAY! How did you know?')
// }
//
// else {
//   alert ('you\'re close but not quite there yet, I am actually 28');
// }
//
// var myFood = prompt('Alright ' + user + ' lets try another one, what is my favorite food?');
// console.log('food: ' + myFood);
//
// if ('pizza' || 'burger' || 'ice cream' || 'sandwiches') {
//   alert('How did you know I like ' + myFood + ' ?');
// }
//
// else {
//   alert('try again!');
// }
//
// var userAnswerTwo = prompt('Are you bored yet?').toLowerCase();
// console.log('userAnswerTwo: ' + userAnswerTwo);
//
// if (userAnswerTwo === 'yes') {
//   alert('You\'re awesome! But we are done! Now lets look at my about me page');
// }
// else {
//   alert('Ohh man I was having fun, ok bye!');
// }


var faveNumber = 5;

for (var i=0; i < 4; i++) {
  var answer = prompt('guess my favorite number from 1 to 10');
  console.log('number:' + answer);
  if (answer < faveNumber) {
    alert('too low, try again');
  } else if (answer > faveNumber) {
    alert('too high, try again');
  } else {
    alert('you got it!');
    break;
  }
}
