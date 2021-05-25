//Event listener of add book button
const add = document.querySelector(".add");
add.addEventListener("click",getForm);

//Array to store all the book objects
let myLibrary = [];


//book constructor
function Book(title,author,pages,current_date,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.current_date = current_date;
    this.status = status;
}/*
function showAlert(message,className){
   const div = document.createElement('div');
   div.className = `alert ${className}`;
   div.appendChild(document.createTextNode(message));
   const container = document.querySelector('.formContainer');
   const form = document.querySelector('form');
   container.insertBefore(div,form);
}
*/
//function to get the book input form
function getForm(){

   //select the form,submit button
   const form = document.querySelector('form');
   const btnSubmit = document.querySelector('.submit');

   //show the form up by changing it's display to block from none.
   form.style.display = "block";

   
   //add event listener to submit
   btnSubmit.addEventListener("click",addBook);
}
/*
//do it at last
function exit(){
   const form = document.querySelector('form');
   if(form.style.display == "block"){
      const container = document.querySelector('.container');
         container.addEventListener("click",function(){
            form.style.display = "none";
         })
   
      }
}
*/
/*
//store book
function store(){
   function getBooks(){
let books;
if(localStorage.getItem('books') !== null){
books = [];
} else {
   books = JSON.parse(localStorage.getItem('books'));
}
return books;
   }
   function addBooks(book)
   {
      const books = store.getBooks();
      books.push(book);
      localStorage.setItem('books',JSON.stringify(books));

   }

   function removeBooks(){

   }
   store.addBook(book);

}

*/


 //function to add the book object to the array
    function addBook(e){
  
      //add book to store 
   let title,author,pages,current_date,readStatus,form;

   //get the inputs from the form
   title = document.querySelector('input[type="text"]').value;
   author = document.querySelector('.writer').value;
   pages = document.querySelector('.page').value;
   current_date = document.querySelector('.date_').value;
   readStatus = document.querySelector('.readStatus').value;
   form = document.querySelector('form');


   //Add validation to form 
/*
if(title === '' || author === '' || pages === '' && pages != Number || current_date === '' && current_date != Number || readStatus === ''){
   //alert("Please fill in the fields")
   showAlert('Please fill in the fields','danger');
} else {
*/
   //make the instance of the object constructor and push to the array
   const myBook = new Book(title,author,pages,current_date,readStatus);
   myLibrary.push(myBook);
   //console.log(myLibrary);
   e.preventDefault();
   form.style.display = "none";
   //console.log(myBook);

  //  document.addEventListener(DOMContentLoaded,displayBook);
 storeBook();
//}
function storeBook(){
   localStorage.setItem("Books",JSON.stringify(myLibrary));
   //displayBook();
   checkBookArray();
}
function checkBookArray(){
   for(let i = 0; i<myLibrary.length; i++){
      displayBook(myLibrary[i]);
      //retrieve_Book();
   }
}
function restore(){
   if(!localStorage.Books){
      checkBookArray();
      console.log('no books in storage');
   } else {
let getBook = localStorage.getItem('Books');
//console.log(getBook);
getBook = JSON.parse(getBook);
//console.log(books);
myLibrary = getBook;
checkBookArray();
   }
};
restore();
//function to display the book 
   function displayBook(book){
  /* function storeBook(){
        localStorage.setItem("book",JSON.stringify(myLibrary));*/
        // const retrieveBook = localStorage.getItem('book');
        // const parseBook = JSON.parse(retrieveBook);
//if(localStorage.getItem('book') !== null){
   //console.log(localStorage.getItem('book'));
  // console.log(parseBook[0]);
  // console.log(parseBook.title);
 //for( let i = 0; i<myLibrary.length; i++){
//console.log(parseBook[i].title);
//for(let i of parseBook){
const container = document.querySelector('.bookContainer');
const bookCard = document.createElement('section');
 const book_title = document.createElement('div');
 // book_title.textContent = title;
 book_title.textContent = book.title;

  book_title.classList.add('title');
  container.appendChild(bookCard)
  bookCard.appendChild(book_title);
  bookCard.classList.add('card');
  //bookCard.style.padding = "1.1em";

    //for creating div author
    const div_author = document.createElement('div');
   // div_author.innerHTML = '<span>Author:</span>'+ author;
  div_author.innerHTML = '<span>Author:</span>'+ book.author;


    div_author.classList.add('div');
    bookCard.appendChild(div_author);

//for creating div pages
  const no_of_pages = document.createElement('div');
 // o_of_pages.innerHTML = '<span>No of Pagens:</span>' + pages;
   no_of_pages.innerHTML = '<span>No of Page:</span>' + book.pages
  no_of_pages.classList.add('div');
  bookCard.appendChild(no_of_pages);

   //for creating div date
   const date = document.createElement('div');
   //console.log(date);
   const date_ = parseInt(current_date);
   date.innerHTML = '<span>Date:</span>' + book.current_date;
   bookCard.appendChild(date);
   bookCard.classList.add('card');

    //for creating read status
  const status = document.createElement('div');
  status.innerHTML = '<span>Status:</span>'  +  book.status;
  status.classList.add('div');
  bookCard.appendChild(status);
  
   
     //for creating read/unread togglebar
     //creating label and appending it to the card
     const toggleLabel = document.createElement('label');
     toggleLabel.classList.add('switch');
     bookCard.appendChild(toggleLabel);
  
  
  //creating input
     let toggleInput = document.createElement('input');
     toggleInput.type = "checkbox";
   
     //adding input style and appending input to the label
    toggleInput.style.opacity = "0";
    toggleInput.style.width = "0";
    toggleInput.style.height = "0";
    toggleLabel.appendChild(toggleInput);
  
    //creating span,adding classes and appending it to the label
    const toggleSpan = document.createElement('span');
    toggleSpan.classList.add('slider','slider::before','round');
    toggleLabel.appendChild(toggleSpan);
  
  
    //change scrollbar status to active if the input is read
    if(readStatus=='Read'){
  toggleInput.checked = true;
  bookCard.style.backgroundColor = "wheat"
   } 
   //change the scrollbar status to false if the input is unread
   else {
     toggleInput.checked = false;
     bookCard.style.backgroundColor = "rgb(245, 245, 244)";
  
   }
  //change textContent of status depending upon scollbar state
   toggleInput.addEventListener("click",function(){
     if(toggleInput.checked == true){
     status.innerHTML = '<span>Status:</span>'  +  'Read';
    // bookCard.style.backgroundColor = "#f9dcc4"
    // bookCard.style.backgroundColor = "#9a8c98";
     bookCard.style.backgroundColor = "wheat";
  
  
     } else if(toggleInput.checked == false) {
        status.innerHTML = '<span>Status:</span>'  +  'Unread';
        bookCard.style.backgroundColor = "rgb(245, 245, 244)";
  
  
     }
  })
   //create delete button with each new book
   const removeBtn = document.createElement('button');
   removeBtn.classList.add('remove');
   removeBtn.textContent = 'Remove';
   //bookCard.classList.add('content')
   bookCard.appendChild(removeBtn);
}}





         /*localStorage.setItem("book",JSON.stringify(myLibrary));
         const retrieveBook = localStorage.getItem('book');
         const parseBook = JSON.parse(retrieveBook);*/


      //   console.log(retrieveBook);
         //const retrieve_Book = JSON.parse(retrieveBook);
      //   console.log('book stored is',retrieveBook);
      //   console.log('book stored is',parseBook);
       //  books.push(retrieve_Book);
      //   console.log(books);
     // localStorage.setItem('bookArr',JSON.stringify(books));
     // const storedArr = JSON.parse(localStorage.getItem('bookArr'));
     // console.log(storedArr);
      //storedArr.push(retrieve_Book);
     // console.log(books);


    /* //saving book in local storage
  localStorage.setItem("book", JSON.stringify(myBook));
  let mybook = localStorage.getItem('book');
  // console.log('book saved in ls is' +  mybook);
 let mybook_ = JSON.parse(mybook);
 console.log(mybook_);*/

      
  //  storeBook();
    /*
    const container = document.querySelector('.bookContainer');
    const bookCard = document.createElement('section');
     const book_title = document.createElement('div');
      book_title.textContent = title;
    //  book_title.textContent = mybook_.title;

      book_title.classList.add('title');
      container.appendChild(bookCard)
      bookCard.appendChild(book_title);
      bookCard.classList.add('card');
      //bookCard.style.padding = "1.1em";

      //for creating div author
     const div_author = document.createElement('div');
     div_author.innerHTML = '<span>Author:</span>'+ author;
     //div_author.innerHTML = '<span>Author:</span>'+ mybook_.author;

     div_author.classList.add('div');
     bookCard.appendChild(div_author);

//for creating div pages
   const no_of_pages = document.createElement('div');
   no_of_pages.innerHTML = '<span>No of Pages:</span>' + pages;
   no_of_pages.classList.add('div');
   bookCard.appendChild(no_of_pages);

   //for creating div date
   const date = document.createElement('div');
   //console.log(date);
   const date_ = parseInt(current_date);
   date.innerHTML = '<span>Date:</span>' + /* current_date date_;
   if(date_ == Number){
   date.classList.add('div');
   console.log(date);
   bookCard.appendChild(date);
   bookCard.classList.add('card');
   }
  //for creating read status
  const status = document.createElement('div');
status.innerHTML = '<span>Status:</span>'  +  readStatus;
status.classList.add('div');
bookCard.appendChild(status);

 
   //for creating read/unread togglebar
   //creating label and appending it to the card
   const toggleLabel = document.createElement('label');
   toggleLabel.classList.add('switch');
   bookCard.appendChild(toggleLabel);


//creating input
   let toggleInput = document.createElement('input');
   toggleInput.type = "checkbox";
 
   //adding input style and appending input to the label
  toggleInput.style.opacity = "0";
  toggleInput.style.width = "0";
  toggleInput.style.height = "0";
  toggleLabel.appendChild(toggleInput);

  //creating span,adding classes and appending it to the label
  const toggleSpan = document.createElement('span');
  toggleSpan.classList.add('slider','slider::before','round');
  toggleLabel.appendChild(toggleSpan);


  //change scrollbar status to active if the input is read
  if(readStatus=='Read'){
toggleInput.checked = true;
bookCard.style.backgroundColor = "wheat"
 } 
 //change the scrollbar status to false if the input is unread
 else {
   toggleInput.checked = false;
   bookCard.style.backgroundColor = "rgb(245, 245, 244)";

 }
//change textContent of status depending upon scollbar state
 toggleInput.addEventListener("click",function(){
   if(toggleInput.checked == true){
   status.innerHTML = '<span>Status:</span>'  +  'Read';
  // bookCard.style.backgroundColor = "#f9dcc4"
  // bookCard.style.backgroundColor = "#9a8c98";
   bookCard.style.backgroundColor = "wheat";


   } else if(toggleInput.checked == false) {
      status.innerHTML = '<span>Status:</span>'  +  'Unread';
      bookCard.style.backgroundColor = "rgb(245, 245, 244)";



   }
})
 //create delete button with each new book
 const removeBtn = document.createElement('button');
 removeBtn.classList.add('remove');
 removeBtn.textContent = 'Remove';
 //bookCard.classList.add('content')
 bookCard.appendChild(removeBtn);
 */

 //delete book
 /*removeBtn.addEventListener("click",function(e){
  //  const ask = prompt("Delete book?");
   /* const ask = document.createElement('button');
    ask.textContent = 'Delete';
    ask.style.backgroundColor = "orange";
   const cancel = document.createElement('button');
   cancel.textContent = 'Cancel';
   cancel.style.backgroundColor = "blue";
   const getAssured = prompt(cancel,ask);*/
/*const askAgain = prompt("Delete book?");
    if(askAgain=='yes'){
    const target = e.target;
    console.log(target);
    target.parentNode.remove();

    }
 })*/
 /*
 function restore() {
   if(!localStorage.myLibrary) {
       render();
   }else {
       let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
       objects = JSON.parse(objects);
       myLibrary = objects;
       render();
   }
}

restore();
*/
/*
     

function remove(){
   //make existing remove btn work
 const remove = document.querySelector('.remove');
 remove.addEventListener("click",function(){
    console.log('hi');
    remove.parentNode.parentNode.remove();
 })
}

//function for existing item's togglebar management
function toggle(){
const scrollBar = document.querySelector('.scrollBar');
scrollBar.addEventListener("click",function(){
  // console.log('hey');
   if(scrollBar.checked==true){
      const status = document.querySelector('.status');
      status.innerHTML = '<span>Status:</span>'  +  'Read';
      const card = document.querySelector('.card');
      card.style.backgroundColor = "wheat";


   } else if(scrollBar.checked==false){
      const status = document.querySelector('.status');
      status.innerHTML = '<span>Status:</span>'  +  'Unread';
      const card = document.querySelector('.card');
      card.style.backgroundColor = "rgb(245, 245, 244)";


   }
})
}

*/