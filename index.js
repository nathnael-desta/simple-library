let add = document.querySelector(".add");
let info = document.querySelector(".info");
let submit = document.querySelector("button[type='submit']")
let titleElement = document.getElementById("title");
let authorElement = document.getElementById("author");
let pagesElement = document.getElementById("pages");
let statusElement = document.querySelector("input[value='read']");
let counter = 1;
let books = document.querySelector(".books");
let removeElement = document.querySelectorAll(".remove");


add.addEventListener("click", display);
submit.addEventListener("click", hide);

function display() {
  info.style.display = "grid";
  info.classList.toggle("show")
}

function hide() {
    info.style.display = "none";
    info.classList.toggle("show")
}

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
} 

submit.addEventListener("click", submitter);

function submitter(){
    let title = titleElement.value;
    let author = authorElement.value;
    let pages = pagesElement.value;
    let status = statusElement.checked ? "Read" : "Not Read";

    let bookName = "book" + counter;
    myLibrary[bookName] = new Book(title, author, pages, status);
    counter++;
    console.log(myLibrary);

    let book = document.createElement('div');
    book.className = `book ${bookName}`;

    let titleDiv = document.createElement('div');
    titleDiv.className = "title";
    titleDiv.textContent = title;

    let authorDiv = document.createElement('div');
    authorDiv.className = "author";
    authorDiv.textContent = `Author :- ${author}`;

    let statusDiv = document.createElement('div');
    statusDiv.className = "status";
    statusDiv.textContent = status;

    let pagesDiv = document.createElement('div');
    pagesDiv.className = "pages";
    pagesDiv.textContent = `${pages} pages`;

    let removeDiv = document.createElement('div');
    removeDiv.className = `remove ${bookName}`;
    removeDiv.textContent = "Remove"


    book.appendChild(titleDiv);
    book.appendChild(authorDiv);
    book.appendChild(statusDiv);
    book.appendChild(pagesDiv);
    book.appendChild(removeDiv);
    books.appendChild(book);  

    removeElement = document.querySelectorAll(".remove");
    removeElement.forEach(function(element) {
        element.addEventListener("click", remover);
    })
}





function remover(){
    let classList = Array.from(this.classList);
    let myBook = classList[1];
    delete myLibrary[myBook];
    let myDiv = document.querySelector(`.${myBook}`);
    myDiv.remove();
}