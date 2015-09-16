describe('pigDice', function(){
  it("sets a player score to zero", function(){
    var player1 = new pigDice("brandon", 0);
    expect(player1.player1Name).to.equal("brandon");
    expect(player1.initialScore1).to.equal(0);
    expect(player1.balance1).to.equal(0);
  });
  it("adds an amount to the player score", function(){
    var player1 = new pigDice("brandon", 0);
    player1.deposit(4);
    expect(player1.balance1).to.equal(4);
  });
  it("adds a random amount between range 1-6 to the player score", function(){
    var player1 = new pigDice("brandon", 4);
    player1.deposit(3);
    expect(player1.balance1).to.equal(7);
  });
  it("resets a player score to 0 if a 1 is rolled", function(){
    var player1 = new pigDice("brandon", 7);
    player1.deposit(1);
    expect(player1.balance1).to.equal(0);
  });
});
