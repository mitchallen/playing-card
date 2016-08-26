/**
    Module: @mitchallen/playing-card
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

var SUIT = require("@mitchallen/playing-card-suit"),
    RANK = require("@mitchallen/playing-card-rank");

module.exports = (function () {
    return function( suit, rank ) {
        if(!SUIT.isSuit(suit)) {
            return null;
        };
        if(!RANK.isRank(rank)) {
            return null;
        };
        return {
            suit: suit,
            rank: rank
        };
    };
})();
