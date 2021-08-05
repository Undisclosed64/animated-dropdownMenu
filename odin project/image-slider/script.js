
//select all the imgs and convert the nodelist into an array.
const imgs = document.querySelectorAll('img');
const makeArr = Array.from(imgs);
const imgsArr = makeArr;

//define starting point of arr
let i = 0;
//add active class to the first item of the array
imgsArr[i].classList.add('active');
//console.log(imgsArr[i]);

//select all the carousel and convert to an array
const carousels = document.querySelectorAll('.dot');
const carouselsArr = Array.from(carousels);

//define staring point of carousel
let c = 0;
//add active class to the first carousel
carouselsArr[c].classList.add('active');

//function for displaying next images
function nextImg(){
    //remove active class from other image if there's any
    imgs.forEach(function(images){
        if(images.classList.contains('active')){
            images.classList.remove('active');
            //console.log(images);
        }
    })
    //increment i on each click
        i = i + 1;
        i = i % imgsArr.length;

     //add active class to the current image 
        imgsArr[i].classList.add('active');

        //remove active class from other dots 
        carousels.forEach(function(carousel_){
            if(carousel_.classList.contains('active')){
                carousel_.classList.remove('active');
            }
        })
        c = c + 1;
        c = c % carouselsArr.length;
        carouselsArr[c].classList.add('active');
        
}
//function for displaying previous images
function previousImg(){
    //disbale set interval
    stopInterval();
    //remove active class from other images
    imgs.forEach(function(images){
        if(images.classList.contains('active')){
            images.classList.remove('active');
           // console.log(images);
        }
    })
    //if current image(i) is the first image,assign i to the last image
    if(i == 0){
        i = imgsArr.length;  
    } 
    //decrement i on each click
    i = i-1;
    //add active class to the current img
    imgsArr[i].classList.add('active');
    //console.log(imgsArr[i]);   

    //remove active class from other dots 
    carousels.forEach(function(carousel_){
        if(carousel_.classList.contains('active')){
            carousel_.classList.remove('active');
        }
    })
    if(c === 0){
        c = carouselsArr.length;
    }
    c = c-1;
    carouselsArr[c].classList.add('active');
}

//add event listener to the next and prevoius buttons
const nextBtn = document.querySelector('.rightarrow');
nextBtn.addEventListener("click",nextImg);

const prevBtn = document.querySelector('.leftarrow');
prevBtn.addEventListener("click",previousImg);

function enableCarousel(){

  //select all the carousel and convert to an array
const dots = document.querySelectorAll('.dot');
const dotsArr = Array.from(dots);
//loop through the arr and add event listener to the dots
dotsArr.forEach(function(dot){
    dot.addEventListener("click",function(e){
        stopInterval();
        //get the target
        const target = e.target;
        //find index of the target
        const targetIndex = dotsArr.findIndex(dot => dot === target);
       // console.log(targetIndex);

       //set current image to target index
        const targetSlide = imgsArr[targetIndex];

         //remove active class from other image if there's any
       imgs.forEach(function(images){
        if(images.classList.contains('active')){
            images.classList.remove('active');
        }
    })
       //add active class to the current img
        targetSlide.classList.add('active');
        
        const carousels = document.querySelectorAll('.dot');
        carousels.forEach(function(carousel_){
            if(carousel_.classList.contains('active')){
                carousel_.classList.remove('active');
                console.log(carousel_);
            }
        })
        target.classList.add('active');
    })
})
}
enableCarousel();

//change image every 3 second
const timeOut =  setInterval(nextImg, 5000);

//write function for disabling timeOut
function stopInterval() {
    clearInterval(timeOut);
  }
nextBtn.addEventListener("click",function(){
       //disbale set interval
       stopInterval();
})
