function userName(user) {
  return user;
}
userName(user);

var user = prompt('What is your name?');
console.log('user: ' + user);

  alert('welcome to my page ' + user);

function uAnswer(userAnswer) {
  return userAnswer;
}
uAnswer();

var userAnswer = prompt('Do you want to continue playing?').toLowerCase();
console.log('userAnswer: ' + userAnswer);

if (userAnswer === 'yes') {
    alert('Nice! Lets keep going!')
} else {
    alert('Well... we gotta keep going anyway because this is my assignment')
}

function mAge(myAge) {
  return myAge;
}
myAge();

var myAge = prompt('Guess what my age is ' + user);
console.log('age: ' + myAge);

if (myAge === '28') {
  alert('NO WAY! How did you know?')
} else {
  alert ('you\'re close but not quite there yet, I am actually 28');
}

/*
var myFood = prompt('Alright ' + user + ' lets try another one, what is my favorite food?');
console.log('food: ' + myFood);

if ('pizza' || 'burger' || 'ice cream' || 'sandwiches') {
  alert('How did you know I like ' + myFood + ' ?');
}

else {
  alert('try again!');
}

var userAnswerTwo = prompt('Are you bored yet?').toLowerCase();
console.log('userAnswerTwo: ' + userAnswerTwo);

if (userAnswerTwo === 'yes') {
  alert('You\'re awesome! But we are done! Now lets look at my about me page');
}
else {
  alert('Ohh man I was having fun, ok bye!');
}
*/
