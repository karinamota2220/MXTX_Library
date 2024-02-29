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
    console.log("Inside displayBooks:")
    console.log(myLibrary)
    for (var i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title)
    }

}
displayBooks()

// localStorage.setItem('libaryStore', JSON.stringify(myLibrary));

const myForm = document.getElementById('myForm')
const bookTitle = document.getElementById('bookTitle')
const author = document.getElementById('author')
const bookPages = document.getElementById('bookPages')
const read = document.getElementById('read')
const errorElement = document.getElementById('error')


myForm.addEventListener('submit', (e) => {   
    e.preventDefault();
    console.log("Form has been submitted!");

    const fd = new FormData(myForm);
    const formObj = Object.fromEntries(fd);

    // const li = new FormData(myLibrary);
    // const obje = Object.fromEntries(li);

    // Get libary from local storage
    let libaryAsString = localStorage.getItem("libaryStore");
    const libaryObject = JSON.parse(libaryAsString)
    console.log(libaryObject)

    // Add new book to libary
    const newBook = new Book(formObj.title, formObj.author, formObj.pages, formObj.read)
    libaryObject.push(newBook)
    // console.log(myLibrary)

    // Set local storage
    localStorage.setItem('libaryStore', JSON.stringify(libaryObject));

    window.location.href = "page2.html";

});




// console.log(Book1.author);
// console.log(Book1.title);
// console.log(Book1.pages);
// console.log(Book1.read);

// let libary2 = []

// libary2.push(Book1);
// // console.log(libary2)

// for (var i = 0; i < libary2.length; i++) {
//     console.log("I'm in the libary2 loop")
//     // console.log(libary2)
// }

// console.log(Book2.author);
// console.log(Book2.title);
// console.log(Book2.pages);
// console.log(Book2.read);

// console.log(Book3.author);
// console.log(Book3.title);
// console.log(Book3.pages);
// console.log(Book3.read);

// Book1.watched();
// Book2.watched();
// Book3.watched();




