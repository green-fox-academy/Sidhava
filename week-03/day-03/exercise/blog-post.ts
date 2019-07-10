'use strict';

class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(title:string, authorName: string, publicationDate: string, text:string) {
        this.title = title;
        this.authorName = authorName;
        this.publicationDate = publicationDate;
        this.text = text;
    }
}

let blogPost1: BlogPost = new BlogPost('"Lorem Ipsum"', 'John Doe', "2000.05.04.", 'Lorem ipsum dolor sit amet.');
let blogPost2: BlogPost = new BlogPost('"Wait but why"', 'Tim Urban', "2010.10.10.", 'A popular long-form, stick-figure-illustrated blog about almost everything.');
let blogPost3: BlogPost = new BlogPost('"One Engineer Is Trying to Get IBM to Reckon With Trump"', 'William Turton', "2017.03.28.", 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');

console.log(blogPost1, blogPost2, blogPost3);