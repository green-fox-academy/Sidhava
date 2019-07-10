'use strict';

class PostIt {
    backgroundColor: string;
    textColor: string;
        text: string;

    constructor(backgroundColor: string, textColor: string, text: string, ) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let PostItOne: PostIt = new PostIt('orange', 'blue', 'Idea1');
let PostItTwo: PostIt = new PostIt('pink', 'black', 'Awesome');
let PostItThree: PostIt = new PostIt('yellow', 'green', 'Superb!');

console.log(PostItOne, PostItTwo, PostItThree);