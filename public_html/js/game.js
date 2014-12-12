/* Game namespace */
var game = {
    // An object where to store game information
    data: {
        // score
        score: 0
    },
    // Runs on page load.
    "onload": function() {
        // Initializes the video.
        if (!me.video.init("screen", me.video.CANVAS, 1067, 600, true, 1.0)) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel
        if (document.location.hash === "#debug") {
            window.onReady(function() {
                me.plugin.register.defer(this, debugPanel, "debug");
            });
        }

        // Initializes the audio.
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);

        // Load the resources.
        me.loader.preload(game.resources);

        // Initializes melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },
    // Runs on game and resources loading.
    "loaded": function() {
        me.pool.register("mario", game.PlayerEntity, true);

        me.pool.register("levelTrigger", game.LevelTrigger);

        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // Starts the game.
        me.state.change(me.state.MENU);

    }
};


