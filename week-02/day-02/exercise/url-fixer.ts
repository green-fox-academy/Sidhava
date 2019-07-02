  'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

console.log(url);

let changeTheWordBots: any = /bots/;

let almostCorrectSentence: string = url.replace(changeTheWordBots, 'odds');


let correctSentence = almostCorrectSentence.slice(0, -37) + ':' + almostCorrectSentence.slice(5);

url = correctSentence;

console.log(url);