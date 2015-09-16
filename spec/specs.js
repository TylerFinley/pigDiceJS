describe('Player', function(){
  it("sets a player score to zero", function(){
    var name = new Player("brandon", 0, 0);
    expect(name.name).to.equal("brandon");
    expect(name.initialScore).to.equal(0);
  });
  it("adds an amount to the player score", function(){
    var name = new Player("brandon", 0, 0);
    name.deposit;
    expect(name.initialScore).to.be.lessThan(7);
  });
  it("adds a random amount between range 1-6 to the player score", function(){
    var name = new Player("brandon", 0, 0);
    name.deposit();
    expect(name.initialScore).to.be.greaterThan(-1);
  });
  it("holds the players score if they choose to stop rolling", function(){
    var name = new Player("brandon", 2, 0);
    var turn = new nextTurn(0);
    name.hold(turn);
    expect(name.balanceScore).to.be.greaterThan(0);

  });

  it("changes the turn if you're holding", function(){
    var brandon = new Player("brandon", 2, 0);
    var tyler = new Player("tyler", 2, 0);
    var turn = new nextTurn(0);
    brandon.hold(turn);
    expect(turn.turn).to.equal(0);
    var newTurn = turn.changeTurn(brandon, tyler, turn.turn);
    expect(newTurn).to.equal(1);

  });
});
