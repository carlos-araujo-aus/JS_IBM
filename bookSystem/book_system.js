let books = [];

const addBook = () => {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (!bookName || !authorName || !bookDescription || !pagesNumber) {
        alert('Please fill in all fields');
    } else {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        }
        books.push(book);
        displayBooks();
        clearInputs();
    }
}

const displayBooks = () => {
    const bookCointainer = document.getElementById('books');
    const bookDisplay = books.map((book, index) => 
        `<p>${index + 1}. Book Name: ${book.bookName} - Author Name: ${book.authorName} - Book Description: ${book.bookDescription} - Number of Pages: ${book.pagesNumber}</p>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>`).join("");
    bookCointainer.innerHTML = bookDisplay;
}

const clearInputs = () => {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

const editBook = (index) => {
    const book = books[index];
    document.getElementById('bookName').value = book.bookName;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1);
    displayBooks();
}

const deleteBook = (index) => {
    books.splice(index, 1);
    displayBooks();
}

