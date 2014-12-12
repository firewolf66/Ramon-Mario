game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // Resets the score
        game.data.score = 0;
// This directors you to the levels, which are the following, level 4, 5, and 6.
        me.levelDirector.loadLevel("level04");
        me.levelDirector.loadLevel("level05");
        me.levelDirector.loadLevel("level06");

        this.resetPlayer(0, 400);
// This is used for when the keys are pressed it may work and be used for the
// character can work and be moved.
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.UP, "up");


        // Add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
    },
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // Remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    },
    // This is used for when the character dies, it may reset the player into
    // Back To its form where it started.
    resetPlayer: function(x, y) {
        var player = me.pool.pull("mario", x, y, {});
        me.game.world.addChild(player, 5);
    }




});

