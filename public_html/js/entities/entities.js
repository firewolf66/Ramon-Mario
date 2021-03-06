// TODO
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "mario",
                spritewidth: "128",
                spriteheight: "128",
                width: 128,
                height: 128,
                getShape: function() {
                    return (new me.Rect(0, 0, 30, 128)).toPolygon();
                }
            }]);
// This is used to make the character walk during the game, which the 8 9 10.. etc
//  is the step number for the character to use to walk.
        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13], 80);

        this.renderable.setCurrentAnimation("idle");

        this.body.setVelocity(5, 20);
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
    //this is used for the right key wgen is pressed it may make the charcter walk.when the key is pressed.
    
    update: function(delta) {
        if (me.input.isKeyPressed("right")) {
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            this.flipX(false);
        } else if (me.input.isKeyPressed("left")) {
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
            this.flipX(true);

        } else if (me.input.isKeyPressed("up")) {

            if (!this.body.jumping) {
                this.body.vel.y -= this.body.accel.x * me.timer.tick;
                this.body.jumping = false;
            }

        }
        else {
            this.body.vel.x = 0;
        }

        this.body.update(delta);
        me.collision.check(this, true, this.collideHandler.bind(this), true);

        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
                this.renderable.setAnimationFrame();
            }
        } else {
            this.renderable.setCurrentAnimation("idle");
        }



        this._super(me.Entity, "update", [delta]);
        return true;
    },
    collideHandler: function(response) {

    }


});
// Level Trigger is what is used to trigger the game to start.
// This is also used to trigger the levels.
game.LevelTrigger = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, settings]);
        this.body.onCollision = this.onCollision.bind(this);
        this.level = settings.level;
        this.xSpawn = settings.xSpawn;
        this.ySpawn = settings.ySpawn;
    },
    // This is used for if their is a collision in the way of mario,
    // It may either collide or hit the object.
    onCollision: function() {
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
    }

});



    