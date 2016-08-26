/**
    Module: @mitchallen/playing-card
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

module.exports = (function () {
    return function( suit, rank ) {
        return {
            suit: suit,
            rank: rank
        };
    };
})();
