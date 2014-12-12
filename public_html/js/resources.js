game.resources = [
    /* Graphics. 
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
// This triggers the maps,mario,and the titlescreen to show up on the map, and to show up.
    {name: "background-tiles", type: "image", src: "data/img/background-tiles.png"},
    {name: "meta-tiles", type: "image", src: "data/img/meta-tiles.png"},
    {name: "mario", type: "image", src: "data/img/player1.png"},
    {name: "title-screen", type: "image", src: "data/img/title-screen.png"},
    {name: "background-tiles", type: "image", src: "data/img/background-tiles.png"},
    /* Atlases 
     * @example
     * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
     */

    /* Maps. 
     * @example
     * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
     * {name: "example01", type: "tmx", src: "data/map/example01.json"},
     */
// This triggers the levels, for them to start, which in this case it is level 4, 5, and 6.
    {name: "level04", type: "tmx", src: "data/map/level04.tmx"},
    {name: "level05", type: "tmx", src: "data/map/level05.tmx"},
    {name: "level06", type: "tmx", src: "data/map/level06.tmx"}

    /* Background music. 
     * @example
     * {name: "example_bgm", type: "audio", src: "data/bgm/"},
     */

    /* Sound effects. 
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/"}
     */
];



