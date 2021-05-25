//Event listener
const button = document.querySelector(".add");
button.addEventListener("click",getInfo);

//Array to store all the book objects
let myLibrary = [
    /*book = {
    title:'Tuesdays with morrie',
    author:'X',
    pages:'200',
    redStatus:'read',
    
  },
  book = {
    title:'Tues with morrie',
    author:'X',
    pages:'200',
    
    redStatus:'read',
    
  }*/
];

//book constructor
function Book(title,author,pages,readOrnot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrnot = readOrnot;
}

//function to get the book input
function getInfo(){
   /* const myBook = new Book('tuesdays with morrie','x','250','read');
    const book1;
    myLibrary.push(myBook);
    console.log(myLibrary);*/

   let title,author,pages,statement;
   const form = document.querySelector('form');
   const btnSubmit = document.querySelector('.submit');

  form.style.display = "block";

  btnSubmit.addEventListener("click",addBook);
  /*function(e){
    title = document.querySelector('input[type="text"]');
    author = document.querySelector('.writer');
    pages = document.querySelector('.page');
    statement = document.querySelector('.statement');
   /* console.log(title.value);
 console.log(author.value);
    console.log(pages.value);
    console.log(statement.value);
  e.preventDefault();
  })*/
  function addBook(e){
    e.preventDefault();

    title = document.querySelector('input[type="text"]').value;
    author = document.querySelector('.writer').value;
    pages = document.querySelector('.page').value;
    statement = document.querySelector('.statement').value;
   const myBook = new Book(title,author,pages,statement);
   myLibrary.push(myBook);
   console.log(myLibrary);
   e.preventDefault();
  }
  /* function createBook(event){
     //const bookName = document.createElement('div');
   //const title = document.querySelector('input[type="text"]').value;

    // const name = document.createTextNode(title);
    //const title = document.querySelector('input[type="text"]').value;
   //  bookName.textContent = title;
   //  console.log(title);

   for(var i = 0;i<myLibrary.length;i++){
    // const firstBook = document.querySelector('.firstBook');
    // console.log(myLibrary[i]);
 console.log(myLibrary[i]);
 displayBook(myLibrary[i]);
   }
   /*let html,newHtml,element;
   element = document.querySelector('.card');
   html = '<div class="Book"><div class="title">%title%</div> <div class="author">%author%</div><div class="pageNo">%page%</div><div class="state">%state%</div></div>'
   newHtml = html.replace('%title%',myLibrary[i].title);
   newHtml = html.replace('%author%',myLibrary[i].author);
   element.insertAdjacentHTML('beforeend',html);
*/
  // event.preventDefault();

   function displayBook(e){
     form.style.display = "none";

    for(var i = 0;i<myLibrary.length;i++){
console.log(myLibrary[i]);
    }
   const container = document.querySelector('.bookContainer');
  // console.log(container);
   const bookCard = document.createElement('div');

   const book_title = document.createElement('div');
   book_title.textContent = title; 
  // console.log(book_title);
   e.preventDefault();
   container.appendChild(bookCard)

   bookCard.appendChild(book_title);
  // bookCard.classList.add('card');


   const div_author = document.createElement('div');
   //console.log(author);

div_author.textContent = author;
  // console.log(author);
   bookCard.appendChild(div_author);

   const no_of_pages = document.createElement('div');
   no_of_pages.textContent = pages ;
   bookCard.appendChild(no_of_pages);

const readStatus = document.createElement('div');
readStatus.textContent = statement;
bookCard.appendChild(readStatus);

const btn = document.createElement('button');
btn.textContent = "Remove";
btn.classList.add('remove');
bookCard.appendChild(btn);
console.log(btn);
bookCard.classList.add('card');
  }
 /* function deleteBook(e){
const target = e.target.parentNode;
console.log(target);
  }*/
  const exit = document.querySelector('.exit');
   exit.addEventListener("click",displayBook);
  }
 //  e.preventDefault();
 //const btnDelete = document.querySelector('.remove');
 //console.log(btnDelete);
 //btnDelete.addEventListener("click",deleteBook);

//}
//const btnDelete = document.querySelector('.remove');
 //console.log(btnDelete);
// btnDelete.addEventListener("click",function(e){
   
// });
 function deleteBook(e){
  const targetParent = document.querySelector('.bookContainer');
  console.log(targetParent);
  targetParent.addEventListener("click",function(){
    //alert("hi");
  })
  //e.preventDefault();
    }
deleteBook();
  

