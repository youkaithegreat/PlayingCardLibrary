### Playing Card Library
Playing Card Library is a library project to simplify the process of creating a proper image linked Javascript playing card deck. 

The deck has 52 cards as well as Jokers and red and black "back" sides. 

The library has a createDeck() function that will return an array of objects of decks already linked with images of cards that are hosted on a CDN. 

The library also has a shuffle() function that will shuffle a deck that you pass to it and return that shuffled deck. 

To pull the images from the deck array of objects, you can simply refer to the .imgSrc property of the deck object. 
The images are linked to the CDN they are hosted on and can be delivered on-demand. 


### Sources 
Playing Cards found on https://www.me.uk/cards/

# Hosting/CDN
The library is hosted in an S3 Bucket with Amazon Web Services and is delivered by Cloudfront to a static IP address. 

Regular Version: https://d2otgtimwt9f4y.cloudfront.net/deck.js
Minified Version: https://d2otgtimwt9f4y.cloudfront.net/deck.min.js
