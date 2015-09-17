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

Player.prototype.reset = function() {
  this.balanceScore = 0;
  this.initialScore = 0;
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

Player.prototype.hold = function(turn) {
  this.balanceScore += this.initialScore;
  this.initialScore = 0;
  //var player = turn.changeTurn(turn);
  return this.balanceScore;

};

$(document).ready(function() {
  //turn?
  var player1;
  var player2;

  $("#player1_get_name").submit(function() {
    event.preventDefault();
    var p1_name = $("input#player1_get_name").val();
    player1 = new Player(p1_name, 0,0);
    $("u#player_1_name").text(player1.name);
    $("form#player1_get_name").hide();

    $("button#player1_roll").click(function() {
      event.preventDefault();
      player1.deposit();
      $("#player_1_current").text(player1.initialScore);
    });

    $("button#player1_hold").click(function() {
      event.preventDefault();
      player1.hold();
      $("#player_1_score").text(player1.balanceScore);
      $("#player_1_current").text(player1.initialScore);
      if (player1.balanceScore >= 100) {
        player1.reset();
        $("#player_1_score").text(player1.balanceScore);

        player2.reset();
        $("#player_2_score").text(player2.balanceScore);

        alert("Congraulations, Player 1 wins!");

      } // Check out the difference between player 1 and player 2 win condition
      // resets are before the alert for player 1 and after the alert for player 2
      // Player2 alert works, player 1 alert doesnt.
    });
  });

  $("#player2_get_name").submit(function() {
    event.preventDefault();
    var p2_name = $("input#player2_get_name").val();
    player2 = new Player(p2_name, 0,0);
    $("u#player_2_name").text(player2.name);
    $("form#player2_get_name").hide();

    $("button#player2_roll").click(function() {
      event.preventDefault();
      player2.deposit();
      $("#player_2_current").text(player2.initialScore);
    });

    $("button#player2_hold").click(function() {
      event.preventDefault();
      player2.hold();
      $("#player_2_score").text(player2.balanceScore);
      $("#player_2_current").text(player2.initialScore);
      if (player2.balanceScore >= 100) {
        player1.reset();
        $("#player_1_score").text(player1.balanceScore);

        player2.reset();
        $("#player_2_score").text(player2.balanceScore);

        alert("Congraulations, Player 2 wins!");
      }
    });
  });
});
