
@mitchallen/playing-card
==
Playing card object.
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/playing-card --save
     
* * *

## Usage

A playing card contains a __suit__ and a __rank__ property. Use these two modules to create objects containing the suits and ranks for a standard 52 playing card deck:

    var SUIT = require("@mitchallen/playing-card-suit");
    var RANK = require("@mitchallen/playing-card-rank");

The module itself returns a factory that you can use to create playing cards.

	var cardFactory = require("@mitchallen/playing-card");

    const suit = SUIT.DIAMOND;
    const rank = RANK.JACK;
    
    var card = cardFactory({suit: suit, rank: rank});
    
	should.exist(card);

	card.suit.should.eql(suit);
    card.rank.should.eql(rank);
    
You can find more info on the suit and rank modules here:

* https://www.npmjs.com/package/@mitchallen/playing-card-suit
* https://www.npmjs.com/package/@mitchallen/playing-card-rank

* * *

### Invalid Values

* If the card factory is passed invalid values for __suit__ or __rank__ a null object will be returned.

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/playing-card.git](https://bitbucket.org/mitchallen/playing-card.git)
* [github.com/mitchallen/playing-card.git](https://github.com/mitchallen/playing-card.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.4

* added missing checkins and refreshed readme

#### Version 0.1.3

* factory now uses spec object to create card

#### Version 0.1.2 

* checked in lint issue

#### Version 0.1.1 

* added validation checks for suit and rank

#### Version 0.1.0 

* initial release

* * *
