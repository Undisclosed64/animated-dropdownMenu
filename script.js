exports.printMsg = function() {
    console.log("This is a message from the package");
  }

//select buttons and add event listener
const categoriesBtn = document.querySelectorAll('.button');

for(let i = 0;i<categoriesBtn.length;i++){
    categoriesBtn[i].addEventListener("click",function(e){
        //get target
let target = e.target;
//console.log(target);
if(target.classList.contains('category-one')){
    target.classList.toggle('active');
    menuOne();
} else if(target.classList.contains('category-two')){
    target.classList.toggle('active');
    menuTwo();
} else {
    target.classList.toggle('active');
    menuThree();
}
    });
}

function menuOne(){
    const menu = document.querySelector('.dropdown-one');
    menu.classList.toggle('visible');
}
function menuTwo(){
    const menu2 = document.querySelector('.dropdown-two');
    menu2.classList.toggle('visible_');
}
function menuThree(){
    const menu3 = document.querySelector('.dropdown-three');
    console.log(menu3);
    menu3.classList.toggle('visible__');
}
