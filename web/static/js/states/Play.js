export class Play extends Phaser.State {
  preload({load}) {
    load.image("sky", "images/sky1.png")
    load.image("ground", "images/platform.png")
    load.spritesheet("dude", "images/dude.png", 32, 48);
    load.image("diamond", "images/diamond.png")
  }

  create(game) {
    game.physics.startSystem(Phaser.Physics.NINJA);
    game.physics.ninja.gravity = 1;
    game.physics.ninja.setBoundsToWorld();

    game.add.sprite(0, 0, 'sky');

    this.platforms = game.add.group();

    var ground = this.platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);

    game.physics.ninja.enable(ground);
    ground.body.immovable = true;
    ground.body.gravityScale = 0;

    var ledge = this.platforms.create(400, 400, 'ground');

    game.physics.ninja.enable(ledge);
    ledge.body.immovable = true;
    ledge.body.gravityScale = 0;

    ledge = this.platforms.create(-150, 250, 'ground');

    game.physics.ninja.enable(ledge);
    ledge.body.immovable = true;
    ledge.body.gravityScale = 0;

    this.player = game.add.sprite(64, game.world.height - 190, 'dude');
    game.physics.ninja.enable(this.player);
    this.player.body.bounce = 0.5;
    this.player.body.friction = 0.5;

    this.player.body.collideWorldBounds = true;

    var count = 0;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = game.input.keyboard.createCursorKeys();
    
    //  Pushable object
    this.diamond = game.add.sprite(200, game.world.height - 150, 'diamond');
    game.physics.ninja.enable(this.diamond);
    this.diamond.body.collideWorldBounds = true;
    this.diamond.body.bounce = 0.5;
  }

  update(game) {
    game.physics.ninja.collide(this.player, this.platforms)
    game.physics.ninja.collide(this.diamond, this.platforms)
    game.physics.ninja.collide(this.player, this.diamond)
    
    if (this.cursors.left.isDown)
    {
        this.player.body.moveLeft(150);
        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.moveRight(150);
        this.player.animations.play('right');
    }
    else
    {
        this.player.animations.stop();
        this.player.frame = 4;
    }

    if (this.cursors.up.isDown)
    {
        this.player.body.moveUp(350);
    }
  }

  init(...options) {
    // console.log("starting Play state", options)
    const [channel, {id, players}] = options
    this.channel = channel
    console.log("Your player id is:", id)
    this.id = id
    this.players = players
  }
}