function Book(title, author){
    this.title = title;
    this.author = author;
}

Book.prototype.getTitle = function(){
    return `Title: ${this.title}`;
}

Book.prototype.getAuthor = function(){
    return `Author: ${this.author}`;
}

////////////CLASS//////////////////
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     getTitle() {
//         return `Title: ${this.title}`;
//     }
//     getAuthor() {
//         return `Author: ${this.author}`;
//     }
// }
///////////////////////////////////

var PP = new Book('Pride and Prejudice', 'Jane Austen');
var H = new Book('Hamlet', 'William Shakespeare');
var WP = new Book('War and Peace', 'Leo Tolstoy')

console.log(PP.title, PP.author, PP.getTitle(), PP.getAuthor());
console.log(H.title, H.author, H.getTitle(), H.getAuthor());
console.log(WP.title, WP.author, WP.getTitle(), WP.getAuthor());