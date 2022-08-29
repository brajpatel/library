let library = [];
const librarySize = document.getElementById('library-size');
const openForm = document.getElementById('open-form');
const modal = document.getElementById('modal');
const bookForm = document.getElementById('book-form')
const overlay = document.getElementById('overlay');
const bookArea = document.getElementById('book-area');


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function defaultBook() {

}

function getUserInput() {
    const titleInput = document.getElementById('input-title').value;
    const authorInput = document.getElementById('input-author').value;
    const pagesInput = document.getElementById('input-pages').value;
    const readStatus = document.getElementById('read-status').checked;

    if(titleInput === '' || authorInput === '' || pagesInput === '' || pagesInput === '0') {
        return;
    }
    else {
        const newBook = new Book(titleInput, authorInput, pagesInput, readStatus);

        library.push(newBook);
        createCard(newBook);

        bookForm.reset();

        updateLibrary();
    }
}

function createCard(book) {
    let card = document.createElement('div');
    let cardTitle = document.createElement('h2');
    let cardAuthor = document.createElement('h3');
    let cardPages = document.createElement('h3');
    let cardReadStatus = document.createElement('button');
    let removeBook = document.createElement('button');
    

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardReadStatus);
    card.appendChild(removeBook);

    addBookToLibrary(card);
}

function addBookToLibrary(book) {
    bookArea.appendChild(book)
}

function removeBookFromLibrary(book, bookTitle) {

}

function updateLibrary() {
    librarySize.textContent = library.length
}

// OPEN & CLOSE MODAL
openForm.addEventListener('click', () => {
    modal.classList.add('show');
    overlay.classList.add('show');
})

overlay.addEventListener('click', () => {
    modal.classList.remove('show');
    overlay.classList.remove('show');
    bookForm.reset();
})