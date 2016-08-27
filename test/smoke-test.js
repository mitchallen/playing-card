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
        var card = cardFactory({suit: suit, rank: rank});
        should.exist(card);
        card.suit.should.eql(suit);
        card.rank.should.eql(rank);
        done();
    });

    it('should create multiple cards', function(done) {
        const list = [
            { suit: SUIT.DIAMOND, rank: RANK.JACK },
            { suit: SUIT.SPADE, rank: RANK.TWO }
        ];
        var card = [ 
         cardFactory(list[0]),
         cardFactory(list[1]),
        ];
        // validate card[0]
        should.exist(card[0]);
        card[0].suit.should.eql(list[0].suit);
        card[0].rank.should.eql(list[0].rank);
        // validate card[1]
        should.exist(card[1]);
        card[1].suit.should.eql(list[1].suit);
        card[1].rank.should.eql(list[1].rank);
        done();
    });

    it('should not create card if bad suit', function(done) {
        var card = cardFactory({ suit: -1, rank: RANK.JACK });
        should.not.exist(card);
        done();
    });

    it('should not create card if bad rank', function(done) {
        var card = cardFactory({ suit: SUIT.DIAMOND, rank: -1 });
        should.not.exist(card);
        done();
    });

    it('should not create card if bad suit and bad rank', function(done) {
        var card = cardFactory({ suit: -1, rank: -1 });
        should.not.exist(card);
        done();
    });

    it('should not create card if parameter object missing', function(done) {
        var card = cardFactory();
        should.not.exist(card);
        done();
    });

    it('should not create card if parameter object empry', function(done) {
        var card = cardFactory({});
        should.not.exist(card);
        done();
    });

    it('should not create card if suit parameter missing', function(done) {
        var card = cardFactory({ rank: RANK.JACK });
        should.not.exist(card);
        done();
    });

    it('should not create card if rank parameter missing', function(done) {
        var card = cardFactory({ suit: SUIT.DIAMOND });
        should.not.exist(card);
        done();
    });
});
