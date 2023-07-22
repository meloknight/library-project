const addBookButton = document.querySelector("#new-book");
const bodyContainer = document.querySelector(".body-container");
const bookForm = document.getElementById("book-form");
const closeModalButton = document.querySelector('.close');


const modal = document.getElementById("myModal");
let myLibrary = [
    {title: "Willy Wonkers1", author: "Billy Boppers", pages: 123, read: "yes", rating: 7},
    {title: "Willy Wonkers2", author: "Billy Boppers", pages: 123, read: "yes", rating: 7},
    {title: "Willy Wonkers3", author: "Billy Boppers", pages: 123, read: "yes", rating: 7},
    {title: "Willy Wonkers4", author: "Billy Boppers", pages: 123, read: "yes", rating: 7},
    {title: "Willy Wonkers5", author: "Billy Boppers", pages: 123, read: "yes", rating: 7},
];

updateBooksDOM();



// FUNCTIONS!!!

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

function addBookToLibrary(title, author, pages, read, rating) {
    const newBook = new Book(title, author, pages, read, rating);
    myLibrary.push(newBook);
    updateBooksDOM();
}

function updateBooksDOM() {
    bodyContainer.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const newBookElement = document.createElement('div');
        newBookElement.innerHTML = 
        `<div class="book-card">
            <h1>${myLibrary[i].title}</h1>
            <h2>${myLibrary[i].author}</h2>
            <h3>Pages: ${myLibrary[i].pages}</h3>
            <h3>Read?: ${myLibrary[i].read}</h3>
            <h3>Rating (out of 10): ${myLibrary[i].rating}</h3>
            <button data-index=${i} class="remove-book-button">Remove Book</button>
            <button data-index=${i} class="read-book-button">Book Read?</button>
        </div>`
        bodyContainer.appendChild(newBookElement);
    }
}

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function removeBook(event) {
    const indexToRemove = event.target.dataset.index;
    myLibrary.splice(indexToRemove, 1);

    updateBooksDOM();
    console.log(myLibrary);
}

function toggleReadStatus(event) {

}

function clearModal(event) {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(singleInput => singleInput.value = "");

}

// EVENT LISTENERS!!!

// THIS CHECKS FOR class="remove-book-button" and then executes removeBook()
document.addEventListener('click', function(event) {
    if (event.target.matches(".remove-book-button")) {
        removeBook(event);
    }
    if (event.target.matches('.read-book-button')) {
        const readBookButtonClickedIndex = event.target.dataset.index;
        
        if (myLibrary[readBookButtonClickedIndex].read === "yes") {
            myLibrary[readBookButtonClickedIndex].read = "no";
        } else {
            myLibrary[readBookButtonClickedIndex].read = "yes";
        }
        updateBooksDOM();
    }   
})



addBookButton.addEventListener("click", openModal);

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("book-pages").value;
    let bookRead = document.getElementById("book-read").value;
    let bookRating = document.getElementById("book-rating").value;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead, bookRating);

    closeModal();
    clearModal();
})

closeModalButton.addEventListener('click', closeModal);





















