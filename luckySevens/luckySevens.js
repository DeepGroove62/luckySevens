// function rollDice() {
//   var results = Math.ceil(Math.random() * (1 + 6 - 1));
//   alert('rollDice() results:' + results);
//   return results;
// }

function onClickPlay () {
  var startingBetAmount = document.getElementById('bet').value

  // if starting bet is less than $0, display an error message
  if (startingBetAmount < 0) alert('Starting bet cannot be less than 0!')
}

/*
do {
	rollTally++;
	die1=Math.ceil(Math.random() * (1 + 6 - 1));
	die2=Math.ceil(Math.random() * (1 + 6 - 1));
	dice=die1+die2;
var money=0;
var die1=0;
var die1=0;
var dice=0;
var rollTally=0;
var maxmoney=0;
var maxTally=0;
*/