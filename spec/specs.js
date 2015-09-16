describe('Player', function(){
  it("sets a player score to zero", function(){
    var name = new Player("brandon");
    expect(name.name).to.equal("brandon");
    expect(name.initialScore).to.equal(0);

  });
  it("adds an amount to the player score", function(){
    var name = new Player("brandon");
    name.deposit();
    expect(name.initialScore).to.be.lessThan(7);
  });
  it("adds a random amount between range 1-6 to the player score", function(){
    var name = new Player("brandon");
    name.deposit();
    expect(name.initialScore).to.be.greaterThan(-1);
  });
  it("holds the players score if they choose to stop rolling", function(){
    var name = new Player("brandon");
    name.hold();
    expect(name.balanceScore).to.be.greaterThan(0);

  });
});
