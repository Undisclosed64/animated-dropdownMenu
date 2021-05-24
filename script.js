//Event listener of button add
const add = document.querySelector(".add");
add.addEventListener("click",getForm);


//Array to store all the book objects
let myLibrary = [];

//book constructor
function Book(title,author,pages,current_date,status,id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.current_date = current_date;
    this.status = status;
    this.id = id;
}

//function to get the form for submitting book
function getForm(){
    //select the form,submit button
    const form = document.querySelector('form');
    const btnSubmit = document.querySelector('.submit');
    //show the form up by changing it's display to block from none.
    form.style.display = "block";
    //add event listener to submit
    btnSubmit.addEventListener("click",submitBookInfo);

 }

 
 //function to add the book object to the array
  function submitBookInfo(e){
  let title,author,pages,current_date,readStatus,form;
  //get the inputs from the form
  title = document.querySelector('input[type="text"]').value;
 // console.log(title);
  author = document.querySelector('.writer').value;
  pages = document.querySelector('.page').value;
  current_date = document.querySelector('.date_').value;
  readStatus = document.querySelector('.readStatus').value;
  form = document.querySelector('form');
 // addBook();
  //e.preventDefault();
  //function addBook(){
    //make the instance of the object constructor and push to the array
    const myBook = new Book(title,author,pages,current_date,readStatus);
    myLibrary.push(myBook);
    //console.log(myBook);
    e.preventDefault();
    form.style.display = "none";
    store();
    //displayBook();
     }
   
     //store book in ls
     function store(){
        localStorage.setItem("Books",JSON.stringify(myLibrary));
        createBook();
     }

     //create book
     function createBook(){
     for(let i = 0;i<myLibrary.length;i++){
        displayBook(myLibrary[i]);
       //const id = myLibrary[i].localStorage.id;
      // console.log(id);


     }
     }
     function restoreBook() {
      if(!localStorage.Books) {
          //createBook();
          console.log('no books in storage');
      }else {
          let objects = localStorage.getItem('Books');
         // console.log(objects);
          objects = JSON.parse(objects);
         // console.log(objects);
          myLibrary = objects;
          createBook();
      }
  }
  
  restoreBook();
  function createId(){
     for(let i = 0;i<myLibrary.length;i++){
        let element = myLibrary[i];
        element.setAttribute("id",i+1);
        console.log(element,element.id);
     }
  }
       //  displayBook();
    //function to display the book 
   //function displayBook(book){
  //  function storeBook(){
        // localStorage.setItem("book",JSON.stringify(myLibrary));
        //  const retrieveBook = localStorage.getItem('book');
         // const parseBook = JSON.parse(retrieveBook);
 //if(localStorage.getItem('book') !== null){
    //console.log(localStorage.getItem('book'));
   // console.log(parseBook[0]);
   // console.log(parseBook.title);
  //for( let i = 0; i<parseBook.length; i++){
 //console.log(parseBook[i].title);
 //for(let i of parseBook){
 function displayBook(book){
   // console.log(book);
 const container = document.querySelector('.bookContainer');
 const bookCard = document.createElement('section');
  const book_title = document.createElement('div');
  // book_title.textContent = title;
  book_title.textContent = book.title;
   book_title.classList.add('title');
   container.appendChild(bookCard)
   bookCard.appendChild(book_title);
   bookCard.classList.add('card');

   
     //for creating div author
     const div_author = document.createElement('div');
     div_author.innerHTML = '<span>Author:</span>'+ book.author;
     div_author.classList.add('div');
     bookCard.appendChild(div_author);
 
 //for creating div pages
   const no_of_pages = document.createElement('div');
  // o_of_pages.innerHTML = '<span>No of Pagens:</span>' + pages;
    no_of_pages.innerHTML = '<span>No of Page:</span>' + book.pages
  //  console.log(pages);
   no_of_pages.classList.add('div');
   bookCard.appendChild(no_of_pages);
 
    //for creating div date
    const date = document.createElement('div');
    //console.log(date);
   // const date_ = parseInt(current_date);
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
     if(status=='Read'){
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
    });
     //create delete button with each new book
     const removeBtn = document.createElement('button');
     removeBtn.classList.add('remove');
     removeBtn.textContent = 'Remove';
     //bookCard.classList.add('content')
     bookCard.appendChild(removeBtn);

};

function removeItem(){
   const removeBtn = document.querySelectorAll('.remove');
  removeBtn.forEach(function(removeButton){
      removeButton.addEventListener("click",createBook)
   })
}
function findElement(e){
  // console.log(myLibrary);
   //for(var i = 0;i<myLibrary.length;i++){
     // myLibrary[i].forEach(function(el){
       //  console.log(el);
     //  console.log(myLibrary);
    //  })
 //  }
myLibrary.forEach(function(el){
   console.log(el);
})

}


         //console.log('clicked');
         //console.log(myLibrary.slice);
      /*   myLibrary.forEach(function(el,index){
         // const itemRemove = myLibrary.splice(element,1);
            console.log(el,index);
            el.addEventListener("click",function(){
               alert(index);
            })
         })*/
       
         
removeItem();

/*

function retrieveBook(){
  const getBook = localStorage.getItem('Books'); 
  const stringify_book = JSON.stringify(getBook);
  const retrieve_Book = JSON.parse(stringify_book);
  //console.log(retrieve_Book);
}
/*
 //create delete button with each new book
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.textContent = 'Remove';
    //bookCard.classList.add('content')
    bookCard.appendChild(removeBtn);
 
   
    }
}
}
storeBook();
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
 
 };
     };*/