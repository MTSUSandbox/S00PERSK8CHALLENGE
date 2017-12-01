/*
	Programmer: Cory Nelson
	Artist: Hannah Owens
	Musician: Andrew Scott
		
	State Info: This state handles the main menu.
*/

var menuState = {

	preload:function(){
		game.load.spritesheet("radDude", "assets/radSheet.png", 157,240);
		game.load.image("sky", "assets/sky.png");
		game.load.audio("titleSong", "audio/TitleSong.wav");
	},
	
	
	create: function(){
		
		//create background
		background = game.add.sprite(0,0,"sky");
		background.scale.setTo(1.75,1.5);
		
		//add radDude to main menu
		radDude = game.add.sprite(game.world.width/2, game.world.height/2 + 175, "radDude");
		radDude.animations.add("idle", [6,7,8],3,true);
		radDude.anchor.setTo(0.5);
		radDude.scale.setTo(2,1.75);
		
		var nameLabel = game.add.text(80, 80, "S00PER SK8:\nCHALLENGE",
			{font: "180px Arial", fill: "#ff8000"});
		var startLabel = game.add.text(80, game.world.height-80, "Press E to Start",
			{font: "50px Arial", fill: "#ffffff"});
		
		var ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
		ekey.onDown.addOnce(this.goToLevelOne,this);
		
		//add music, loop	
		titleSong = game.add.audio("titleSong",1,true);
		titleSong.play();

	},
	
	update: function(){
		radDude.animations.play("idle");	
	},

	goToLevelOne: function(){
		titleSong.mute = true;
		game.state.start("firstLevel");
	},
	/*
	goToLevelTwo: function(){
		game.state.start("secondLevel");	
	},
	
	goToLevelThree:function(){
		game.state.start("thirdLevel");
	},
	*/

};