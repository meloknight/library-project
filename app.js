let myLibrary = [];
// let title = "The Hobbit";
// let author = "J.R.R. Tolkien";
// let pages = 123;
// let read = "book not read";
// let rating = 7;

function Book(title, author, pages, read, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;

    this.sayBook = function() {
        console.log(`${title} by ${author} is ${pages} pages long, ${read}, and has a rating of ${rating}.`)
    }
};

function addBookToLibrary() {
    let title = prompt("Book Title: ");
    let author = prompt("The author's name is: ")
    let pages = prompt("The number of pages in the book is: ")
    let read = prompt("Has the book been read?: ")
    let rating = prompt("The rating between 1 and 10 is?: ")
    
    const newBook = new Book(title, author, pages, read, rating);
    return newBook;
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 123, "book has not been read", 7);
const book2 = new Book("bookoo", "autherino", 5555, "book has been read", 10);
const book3 = addBookToLibrary();


myLibrary.push(theHobbit)
myLibrary.push(book2)
myLibrary.push(book3);

console.log(myLibrary);
