/*
	Programmer: Cory Nelson
	Artist: Hannah Owens
	Musician: Phillip Scott
		
	State Info: First Game Level
*/

var firstLevel = {
	
	preload: function(){
	//load assets
	game.load.spritesheet("radDude", "assets/radSheet.png", 157,240);
	game.load.tilemap("mapTiles", "assets/level1.json",null, Phaser.Tilemap.TILED_JSON);
	game.load.image("tileSheet","assets/tileSheettemp.png");
	game.load.image("sky", "assets/sky.png");
	game.load.audio("levelSong1", "audio/levelsong1.wav");
	},
	
	create: function(){
		
		
		skyPicture = game.add.sprite(0,0,"sky");
		skyPicture.scale.setTo(1.75,1.5);
		skyPicture.fixedToCamera = true;
		
		game.physics.startSystem(Phaser.Physics.NINJA);	
		
		map = game.add.tilemap("mapTiles");
		map.addTilesetImage("grass","tileSheet",200,200);
		mainLayer = map.createLayer("mainLayer");
		mainLayer.resizeWorld();
	
		
		var slopeMap = [1,1,1,1,2,1,22,26,1,3,1,23,27,1,15,19,1,1,1,18,14,0,0,0];
		tiles = game.physics.ninja.convertTilemap(map,mainLayer,slopeMap);
		
		
		player = game.add.sprite(100, 0, "radDude");
		game.physics.ninja.enable(player);
		player.animations.add("moveRight", [6,7,8],8,true);
		player.animations.add("moveLeft", [6,7,8],5,true);
		player.animations.add("jump", [3,4,5,6], 5, true);
		
		
		game.physics.ninja.gravity = 2;
		
		game.camera.follow(player);
		
		cursors = game.input.keyboard.createCursorKeys();
		
		
		//add music, loop	
		levelSong1 = game.add.audio("levelSong1",1,true);
		levelSong1.play();
		
	},
	
	update: function(){

	
	
		//PLAYER COLLISIONS
		for(var i = 0; i < tiles.length; i++)
		{
			player.body.aabb.collideAABBVsTile(tiles[i].tile);
		}
	

	
		if(cursors.right.isDown){
			player.body.moveRight(150);
			player.animations.play("moveRight");
		}
		else if (cursors.left.isDown){
			player.body.moveLeft(70);	
			player.animations.play("moveLeft");
		}
		else{
			player.animations.stop();
			player.frame = 1;
		}
		
		if(cursors.up.isDown){
			player.body.y -= 5;
			player.animations.play("jump");
			
		}
	},
	
};