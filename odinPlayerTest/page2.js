const txt2 = document.getElementById('search');
const btn2 = document.getElementById('submit');
const out2 = document.getElementById('output2');

const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.watched = function(){console.log(`Have you watched ${this.title }?`)}

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const Book1 = new Book("Heaven official's blessing", "Mo Xiang Tong Xiu", "432", "read");
const Book2 = new Book("Mo Dao Zu Shi", "Mo Xiang Tong Xiu", "396", "read");
const Book3 = new Book("The Scum Villain's Self-Saving Sysyem", "Mo Xiang Tong Xiu", "352", "Not read");
addBookToLibrary(Book1)
addBookToLibrary(Book2)
addBookToLibrary(Book3)

function displayBooks() {
    out2.innerHTML = txt2.value;
    console.log("Inside displayBooks:")
    console.log(myLibrary)
    for (var i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title)
    }

}
btn2.addEventListener('click', displayBooks);

// Get library from local storage
const libString = localStorage.getItem('libaryStore');
const library = JSON.parse(libString);

// Add books to the DOM (web page)
for (let i = 0; i < library.length; i++) {
    let currentBook = library[i]
    const markup = `
    <div id="book-${i}" data-index="${i}">
        <div>
            <span id="Title1">Title: ${currentBook.title}</span>
            <span id="Author2">Author: ${currentBook.author}</span>
            <span id="Pages3">Pages: ${currentBook.pages}</span>
            <span id="read-book-${i}">Read or Not: ${currentBook.read}</span>
        </div>
        <hr>
            <button id="R_btn" onclick="removeBook('book-${i}');">Remove Book</button>
            <button onclick="changeRead('${i}')">Read</button>
        </hr>
    </div>
    `;

    document.getElementById('data').innerHTML += markup;
}

function removeBook(id) {
    let remove = document.getElementById(id);
    const index = remove.dataset.index
    console.log("Going to remove book at index " + index)
    
    // remove DOM element
    remove.remove()

    // remove from library array
    removeBookFromLibrary(index)
}


//Trying to delete array 
function removeBookFromLibrary(index)  {
    const removedBook = library.splice(index, 1)

    console.log("removedBook")
    console.log(removedBook)

    console.log("current library")
    console.log(library)

    localStorage.setItem('libaryStore', JSON.stringify(library));
}

function changeRead(index) {
    console.log(library[index])

    if (library[index]["read"] == "read") {
        library[index]["read"] = "not read"
    } else {
        library[index]["read"] = "read"
    }

    console.log(library)

    localStorage.setItem('libaryStore', JSON.stringify(library));

    let readStatus = document.getElementById(`read-book-${index}`);
    readStatus.innerText = `Read or Not: ${library[index]["read"]}`
}
