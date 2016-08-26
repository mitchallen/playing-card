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

    it('should create multiple cards', function(done) {
        const suit = [ SUIT.DIAMOND, SUIT.SPADE ];
        const rank = [ RANK.JACK, RANK.TWO ];
        var card = [ 
         cardFactory(suit[0], rank[0]),
         cardFactory(suit[1], rank[1]),
        ];
        // validate card[0]
        should.exist(card[0]);
        card[0].suit.should.eql(suit[0]);
        card[0].rank.should.eql(rank[0]);
        // validate card[1]
        should.exist(card[1]);
        card[1].suit.should.eql(suit[1]);
        card[1].rank.should.eql(rank[1]);
        done();
    });

    it('should not create card if bad suit', function(done) {
        const suit = -1;
        const rank = RANK.JACK;
        var card = cardFactory(suit, rank);
        should.not.exist(card);
        done();
    });

    it('should not create card if bad rank', function(done) {
        const suit = SUIT.DIAMOND;
        const rank = -1;
        var card = cardFactory(suit, rank);
        should.not.exist(card);
        done();
    });

    it('should not create card if bad suit and bad rank', function(done) {
        const suit = -1;
        const rank = -1;
        var card = cardFactory(suit, rank);
        should.not.exist(card);
        done();
    });

    it('should not create card if parameters missing', function(done) {
        var card = cardFactory();
        should.not.exist(card);
        done();
    });
});
