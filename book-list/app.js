const bookList = document.querySelector("#book-list ul");

// @function: delete book
bookList.addEventListener("click", function(e) {

    // if click `delete` button
    if (e.target.classList.contains("btn-danger")) {
        // get the book (node)
        let li = e.target.parentNode;
        // remove from book list
        bookList.removeChild(li);
    }
})

// @function: add book
const btnAdd = document.getElementById("add-book");

btnAdd.addEventListener("click", function(e) {
    e.preventDefault();
    
    // get input book name
    const bookName = btnAdd.previousElementSibling.value;
    btnAdd.previousElementSibling.value = '';
    
    // create book 
    const book = document.createElement("li");
    book.classList += "book list-group-item d-flex justify-content-between";

    const name = document.createElement("span");
    name.innerText = bookName;

    const btnDelete = document.createElement("button");
    btnDelete.classList += "btn btn-danger";
    btnDelete.innerText = "Delete";

    book.appendChild(name);
    book.appendChild(btnDelete);

    // add to book list
    bookList.appendChild(book);
})

// @function: search book
const btnSearch = document.getElementById("search-book");

btnSearch.addEventListener("keyup", function(e) {
    e.preventDefault();

    const books = bookList.getElementsByTagName("li");

    Array.from(books).forEach(function(book) {
        if (book.firstElementChild.textContent.toLowerCase().includes(btnSearch.value)) {
            book.classList.add("d-display");
            book.classList.remove("d-none");
        } else {
            book.classList.add("d-none");
            book.classList.remove("d-display");
        }
    })
})