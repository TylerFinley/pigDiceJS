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

  $("#player1_get_name").submit(function() {
    event.preventDefault();
    var p1_name = $("input#player1_get_name").val();
    var player1 = new Player(p1_name, 0,0);
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
        alert("Congraulations, you win!");
      }
    });
  });

  $("#player2_get_name").submit(function() {
    event.preventDefault();
    var p2_name = $("input#player2_get_name").val();
    var player2 = new Player(p2_name, 0,0);
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
        alert("Congraulations, you win!");
      }
    });
  });
});



  //play game button
    // hide play game button
    //var turn? instead of global
    //game loop
      //odd turn
        //hide player2 "actions"
        //player1.deposit ()
        //if player1.initialScore === 0
          //iterate turn
        //else
          //if hold-score button is pressed $().submit()
            //player1.hold()
            //iterate turn
      //even turn
        //hide player1 "actions"
    //loop game-loop
