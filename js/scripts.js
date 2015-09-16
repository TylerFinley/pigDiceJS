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
};

var nextTurn = function(turn) {
this.turn = turn;
};

nextTurn.prototype.changeTurn = function(player1, player2, turn) {
  if (turn === 1) {
    return turn = 0;
  } else {
    return turn = 1;
  }
}



Player.prototype.deposit = function() {
  var depositAmount = (Math.floor(Math.random() * (7 - 1)) +1);
  // debugger;
  if (depositAmount === 1) {
    this.initialScore = 0;
  } else {
    this.initialScore += depositAmount;
  }
};

Player.prototype.hold = function(turn) {
  this.balanceScore += this.initialScore;
  var player = turn.changeTurn(turn);
  return this.balanceScore;


};
