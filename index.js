/**
    Module: @mitchallen/playing-card
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

var SUIT = require("@mitchallen/playing-card-suit"),
    RANK = require("@mitchallen/playing-card-rank");

// Use closure so require doen't need extra parens

module.exports = (function () {
    return function( spec ) {
        if(!spec) {
            return null;
        }
        const suit = spec.suit;
        if(!suit) {
            return null;
        }
        const rank = spec.rank;
        if(!rank) {
            return null;
        }
        if(!SUIT.isSuit(suit)) {
            return null;
        }
        if(!RANK.isRank(rank)) {
            return null;
        }
        return {
            suit: suit,
            rank: rank
        };
    };
})();
