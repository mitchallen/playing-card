/**
    Module: @mitchallen/playing-card
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    SUIT = require("@mitchallen/playing-card-suit"),
    RANK = require("@mitchallen/playing-card-rank"),
    modulePath = "../index";

describe('module smoke test', function() {

    var cardFactory = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        cardFactory = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('card factory should exist', function(done) {
        should.exist(cardFactory);
        done();
    });

    it('should create card with suit and rank', function(done) {
        const suit = SUIT.DIAMOND;
        const rank = RANK.JACK;
        var card = cardFactory(suit, rank);
        should.exist(card);
        card.suit.should.eql(suit);
        card.rank.should.eql(rank);
        done();
    });
});
