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

$(document).ready(function() {
  var player1;
  $("#player1_get_name").submit(function() {
    event.preventDefault();
    var p1_name = $("input#player1_get_name").val();
    player1 = new Player(p1_name, 0,0);
    $("u#player_1_name").text(player1.name);
    $("form#player1_get_name").hide();
  });

  var player2;
  $("#player2_get_name").submit(function() {
    event.preventDefault();
    var p2_name = $("input#player2_get_name").val();
    player2 = new Player(p2_name, 0,0);
    $("u#player_2_name").text(player2.name);
    $("form#player2_get_name").hide();
  });
});
