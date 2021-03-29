/*
 * Sokoban game
 * © Copyright 2021 Zakon Technomantów
 * Published under WTFPLv2
 * Languages: HTML5, CSS3, JavaScript (ES 2020)
 * Functions used by specific buttons in in-game buttton bar
*/

export const controls = {
    /**
     * Re-sets current map and press count to base values
    */
    reset: () => {
        location.reload()
    },
    /** 
    * Undo last move
    * @summary If the player has moved a crate, it will be moved back with player,
    * otherwise only player's position will be reverted.
    * Additionally only one last move can be reverted.
    */
    undo: () => {
        if (global.lastPlayerPos !== null) {
            global.pressCount--
            $('#player').css('left', global.lastPlayerPos[0] * 32 + 50)
            $('#player').css('top', global.lastPlayerPos[1] * 32 + 80)
        }

        if (global.lastCratePos !== null) {
            $('.crates').eq(global.lastCratePos[2]).css('left', global.lastCratePos[0] * 32 + 50)
            $('.crates').eq(global.lastCratePos[2]).css('top', global.lastCratePos[1] * 32 + 80)
        }
    }
}
