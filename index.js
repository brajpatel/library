let library = [];
const librarySize = document.getElementById('library-size');
const bookArea = document.getElementById('book-area');
const openForm = document.getElementById('open-form');
const modal = document.getElementById('modal');
const bookForm = document.getElementById('book-form');
const confirmBook = document.getElementById('confirm-book');
const formComplete = document.getElementById('form-complete');
const overlay = document.getElementById('overlay');

openForm.addEventListener('click', showForm);
overlay.addEventListener('click', hideForm);
confirmBook.addEventListener('click', getUserInput);

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function createFillerBook() {
    let fillerBooks = [
        {
            title: 'Skulduggery Pleasant',
            author: 'Derek Landy',
            pages: 384
        },
        {
            title: 'Good Friday',
            author: 'Lynda La Plante',
            pages: 377
        },
        {
            title: 'Crocodile Tears',
            author: 'Anthony Horowitz',
            pages: 432
        },
        {
            title: 'Divine Madness',
            author: 'Robert Muchamore',
            pages: 368
        },
        {
            title: 'Gone',
            author: 'Michael Grant',
            pages: 576
        }
    ];

    let index = Math.floor(Math.random() * fillerBooks.length);
    console.log(index)
    let randomTitle = fillerBooks[index].title;
    let randomAuthor = fillerBooks[index].author;
    let randomPages = fillerBooks[index].pages;
    let randomReadStatus = Math.floor(Math.random() * 2);

    const fillerBook = new Book(randomTitle, randomAuthor, randomPages, randomReadStatus);

    library.push(fillerBook);
    createCard(fillerBook);

    updateLibrary();
};

createFillerBook();

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
        formCompletion();

        updateLibrary();
    }
}

function createCard(book) {
    let card = document.createElement('div');
    let cardTitle = document.createElement('h2');
    let cardAuthor = document.createElement('h3');
    let cardPages = document.createElement('h3');
    let cardReadStatus = document.createElement('button');
    let deleteCard = document.createElement('button');

    card.classList.add('card')
    cardTitle.classList.add('card-title')
    cardReadStatus.classList.add('card-read-status')
    deleteCard.classList.add('delete-card')
    
    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardPages.textContent = book.pages + ' pages';
    if(book.status) {
        cardReadStatus.textContent = 'Read'
    }
    else {
        cardReadStatus.textContent = 'Not read'
    }
    deleteCard.textContent = 'Remove Book'

    cardReadStatus.addEventListener('click', () => {
        if(cardReadStatus.textContent === 'Read') {
            cardReadStatus.textContent = 'Not Read'
        }
        else {
            cardReadStatus.textContent = 'Read'
        }
    })

    deleteCard.addEventListener('click', () => {
        removeBookFromLibrary(card, cardTitle);
    })

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardReadStatus);
    card.appendChild(deleteCard);

    addBookToLibrary(card);
}

function addBookToLibrary(book) {
    bookArea.appendChild(book);
}

function removeBookFromLibrary(book, bookTitle) {
    bookArea.removeChild(book);
    
    let index = library.indexOf(library.find(book => book.title === bookTitle));
    library.splice(index - 1, 1);

    updateLibrary();
}

function updateLibrary() {
    librarySize.textContent = library.length;
}

// OPEN & CLOSE MODAL
function showForm() {
    modal.classList.add('show');
    overlay.classList.add('show');
}

function formCompletion() {
    hideForm();

    setTimeout(() => {
        formComplete.classList.add('show')
    }, 250)

    setTimeout(() => {
        formComplete.classList.remove('show')
    }, 4500);
}

function hideForm() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
    bookForm.reset();
}