/*
	Programmer: Cory Nelson
	Artist: Hannah Owens
	Musician: Andrew Scott

	State Info: Loads game and initializes Phaser Game object
*/

var game = new Phaser.Game(1280, 1020, Phaser.AUTO, "gameDisplay");

//define game states
game.state.add("menu", menuState);
game.state.add("firstLevel",firstLevel);
game.state.add("secondLevel", secondLevel);
game.state.add("thirdLevel", thirdLevel);


//enter game
game.state.start("menu");