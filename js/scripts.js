var Player = function(name, balanceScore, initialScore) {
  this.name = name;
  this.initialScore = initialScore;
  this.balanceScore = balanceScore;
  //
  // initial score changes with result of dice roll
  // balance score that updates when a player chooses to hold
  // balance is never affected by the dice roll
  // initial score that is put to 0 when the dice === 1
  //
  //
  this.balanceScore = balanceScore + initialScore;

};

Player.prototype.deposit = function() {
  var depositAmount = (Math.floor(Math.random() * (7 - 1)) +1);
  // debugger;
  if (depositAmount === 1) {
    this.initialScore = 0;
  } else {
    this.initialScore += depositAmount;
  }
};

Player.prototype.hold = function() {
  this.balanceScore += this.initialScore;
  return this.balanceScore;

};
