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
const body = document.querySelector("body");
newBookBtn.addEventListener('click', showForm);
closeBtn = document.querySelector("#close");
btn.addEventListener('click',addBookToLibrary);
closeBtn.addEventListener('click',showForm);
const warning = document.querySelector("#warning");

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
  const newName = name.value; // ???????????????
  const newPage = pages.value;
  const isRead = read.checked;

  let book = new Book(newAuthor,newName,newPage,isRead);
  const validate = validateForm(book);
  if (validate.length > 0) {
    addWarnings(validate);
    return "failed";
  }

  myLibrary.push(book);
  updateLibrary();
  showForm();
}


function updateLibrary() {
  library.innerHTML = "";
  for (let i = 0; i<myLibrary.length; i++) {
    console.log("OBJECT ABOUT TO BE ADDED",myLibrary[i]);
    const book = document.createElement('article');
    book.classList.add("book");
    
    const x = document.createElement('button');
    x.innerHTML = "&#10005;";
    x.classList.add('remove');
    const h2 = document.createElement('h2');

    const list = document.createElement('ul');
    const author = document.createElement('li');
    const pages = document.createElement('li');
    const read = document.createElement('li');



    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `Pages: ${myLibrary[i].pages}`;
    
    const checkBox = setCheckbox(myLibrary[i].read);
    read.textContent = "Read";
    read.appendChild(checkBox);

    console.log(setCheckbox(myLibrary[i].read));

    list.appendChild(author);
    list.appendChild(pages);
    list.appendChild(read);
    
    console.log("library author:",myLibrary[i].author);
    h2.textContent = myLibrary[i].title;
    h2.style.letterSpacing = "3px";

    book.appendChild(x);
    book.appendChild(h2);
    book.appendChild(list);
    library.appendChild(book);
    console.log("ADDED BOOK: ",myLibrary[i].author);
  }
}

function showForm() {
  form.classList.toggle("active");
  document.body.classList.toggle("blur");
  form.classList.toggle("closed");
  
}


function validateForm(form) {
  const warnings = [];
  if (form.author == "") { 
    warnings.push("Book must have an author.");
  }

  if (form.title == "") {
    warnings.push("Book must have a title.")
  }

  if (form.pages == "") {
    warnings.push("Book must have number of pages.")
  }

  return warnings;

}

function addWarnings(warnings) {
  warning.innerHTML = "";
  for (let i = 0; i<warnings.length; i++) {
    console.log("WARNING: ",warnings[i]);
    let w = document.createElement("li");
    w.textContent += warnings[i];
    warning.appendChild(w);
  }
}

function setCheckbox(x) {
  const complete = document.createElement('input');
  complete.setAttribute('type','checkbox');
  complete.classList.add('red-check');

  if (x === true) {
    complete.checked = true;

  } else {
    complete.checked = false;
  }
  return complete;
}

library.addEventListener('click', function(e) {
  const btn = e.target;
  const articles = document.querySelectorAll("article");
  console.log("ARTICLES: ",articles);


  const container = btn.closest("article");
  if (btn.tagName = "button" && btn.classList.contains('remove')) { /// if the event was triggered by the remove button, proceed...
    
    for (let i = 0; i<articles.length; i++) {
        console.log("ARTICLE: ",articles[i]);
        const headingOfList = articles[i].querySelector("h2").textContent;
        const title = container.querySelector("h2").textContent;
        if (headingOfList == title ) {
          myLibrary.splice(i,1);
          updateLibrary();
        }
    }        
  }

})

