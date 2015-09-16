function pigDice(player1, initialScore1) {
  this.player1Name = player1;
  this.initialScore1 = initialScore1;
  this.balance1 = initialScore1;
  var depositAmount = (Math.round(Math.random) * 6);

}

pigDice.prototype.deposit = function(depositAmount) {
  if (depositAmount === 1) {
  var balance1 = 0;
  
  }
  else {
  this.balance1 += depositAmount;
  }

}
