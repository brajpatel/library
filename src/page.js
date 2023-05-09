function initialisePage() {
    const body = document.querySelector('body');
    const content = document.getElementById('content');

    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-left">
            <div class="filler-logo">
                <a target="_blank" href="https://github.com/brajpatel"><i class="fa-solid fa-book"></i></a>
            </div>
            <h1>Library</h1>
        </div>

        <div class="nav-right">
            <h2>Library Size: <span id="library-size"></span> books</h2>
            <button id="open-form" class="open-form"><i class="fa-solid fa-plus"></i>Add Book</button>
        </div>
    `;

    const bookArea = document.createElement('div');
    bookArea.setAttribute('id', 'book-area');
    bookArea.classList.add('book-area');

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>Made by <a class="my-name" target="_blank" href="https://github.com/brajpatel">Brajesh</a><i class="fa-solid fa-user-ninja"></i></p>
    `;

    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `
        <div id="modal" class="modal">
            <h2>Enter book details</h2>
            <form id="book-form" action="#">
                <div class="input-container">
                    <input id="input-title" name="input_title" type="text" required>
                    <label for="input-title">Title</label>
                </div>

                <div class="input-container">
                    <input id="input-author" name="input_author" type="text" required>
                    <label for="input-author">Author</label>
                </div>

                <div class="input-container">
                    <input id="input-pages" name="input_pages" type="number" min="1" required>
                    <label for="input-pages">No. of Pages</label>
                </div>

                <div class="last-input-container">
                    <input id="read-status" name="read_status" type="checkbox">
                    <label for="read-status">Read this book?</label>
                </div>

                <button id="confirm-book" class="confirm-book" type="button">Confirm Book</button>
            </form>
        </div>

        <div id="form-complete" class="form-complete">
            <h2>Your book has successfully been added to the library!</h2>
        </div>
        <div id="overlay" class="overlay"></div>
    `;

    content.appendChild(nav);
    content.appendChild(bookArea);
    content.appendChild(footer);
    content.appendChild(container);
}

export default initialisePage;