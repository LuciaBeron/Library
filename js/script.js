let myLibrary = [];
const list = document.querySelector(".list");
const newBookBtn = document.querySelector("#newBook");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const name = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#number");
const read = document.querySelector("#read");
const library = document.querySelector(".library");
newBookBtn.addEventListener('click', showForm);
closeBtn = document.querySelector("#close");
btn.addEventListener('click',addBookToLibrary);

class Book {
  constructor(author,title,pages,read) {
    this.author = author;
    this.title = title,
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  const newAuthor = author.value;
  const newName = name.value;
  const newPage = pages.value;
  const isRead = read.checked;

  let book = new Book(newAuthor,newName,newPage,isRead);
  console.log(book);
  myLibrary.push(book);
  updateLibrary();
}


function updateLibrary() {
  library.innerHTML = "";
  for (let i = 0; i<myLibrary.length; i++) {
    console.log("OBJECT ABOUT TO BE ADDED",myLibrary[i]);
    const book = document.createElement('article');
    
    const h2 = document.createElement('h2');

    const list = document.createElement('ul');
    const author = document.createElement('li');
    const pages = document.createElement('li');
    const read = document.createElement('li');

    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    read.textContent = myLibrary[i].read;

    list.appendChild(author);
    list.appendChild(pages);
    list.appendChild(read);
    
    console.log("library author:",myLibrary[i].author);
    h2.textContent = myLibrary[i].author;
    book.appendChild(h2);
    book.appendChild(list);
    library.appendChild(book);
    console.log("ADDED BOOK: ",myLibrary[i].author);
  }
}

function showForm() {
  form.style.display = "block";
  
}

function closeForm() {
  form.style.display = "block";
}