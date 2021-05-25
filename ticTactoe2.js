
//Module
const boardModule = (function(){

  //Array for game board
  const gameBoardArr= [];
 
  //function for letting user mark the boxes
  const play = function(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn){
       btn. addEventListener("click",function(e){

         //logic for letting player 1 mark the box one at a time
           if(player1.turn==true && player2.turn==false && btn.textContent==""){
             // if(btn.textContent=="" && btn.textContent!==player2.symbol){
              btn.textContent = player1.symbol;
    
       //let ID = [];
       // const ids = e.target.id;
       // ID.push(ids);
     // gameBoardArr[e.target.id] = player1.mark;
      // gameBoardArr.push(player1.symbol);
     //console.log(gameBoardArr);
      player1.turn = false;
      player2.turn = true;
  //  }
     //letting player 2 mark the boxes 
  } else if(player1.turn==false && player2.turn==true && btn.textContent == ""){
    //  if(btn.textContent!==player1.symbol){
   btn.textContent = player2.symbol;
//   gameBoardArr[e.target.id] = player2.mark;
  // gameBoardArr.push(player2.symbol);
   //console.log(gameBoardArr);

   player2.turn = false;
   player1.turn = true;
    //  }
  }

})
})
  };
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
console.log(winningConditions[0]);

const checkResult = function(){
  let roundWon = false;

}
  //returning object to be able to access outside the module
  return{
    play
  }

})();
boardModule.play();
boardModule.winningConditions;

//factory for creating player
const players = function(name,symbol,turn){
return {name,symbol,turn}
};

const player1 = players('Player1','X',true);
const player2 = players('Player2','0',false);































/*

function control(){
 buttons = document.querySelectorAll('button');
buttons.forEach(function(btn){
   btn. addEventListener("click",function(e){
      // console.log(btn.id);
      // console.log(btn.textContent);
       if(player1.turn==true && player2.turn==false){
           if(btn.textContent=="" && btn.textContent!==player2.symbol){
   btn.textContent = player1.symbol;

   //let ID = [];
   // const ids = e.target.id;
   // ID.push(ids);
   gameBoardArr[e.target.id] = player1.symbol;
  console.log(gameBoardArr);
  
      
  // })
  // let arr=[{}];
   //let ids = e.target.id;
   //console.log(ids);
   //arr.map(ids);
   //console.log(arr);
   //let arr = [];
  //console.log(btn.id);
//let btnId = btn.id;
  /* btnId = parseInt(btnId);
  let myArr = [btnId]
  let btnId_length = btnId.length;
  btnId_length = 3;
  let counter = 0;
  for(counter=0;counter<btnId_length;counter++){
    myArr.push(btnId_length[counter]);
    console.log(btnId_length[counter]);
  }

  //let arr = new Array;

let arr = [];
arr.push(btnId);
//arr.push(btnId)

//console.log(arr.length);
////if(arr.length==0){
  //arr.map(arr);
//} else {
 // arr.push(btnId);

//}
 //if(btnId==0){
  //let arr = new Array;
  //arr = btnId;
 // let arrLength = arr.length;
 // arrLength = 3;
// } else {
 // for(let i = 1;i<arrLength;i++){
 //}
 // }
  //arr = [btnId]
  */
  //console.log(arr);
  /*
   player1.turn = false;
   player2.turn = true;
 //  const arr = [];
   //const ids = e.target.id;
  // console.log(ids);
  // arr.push[ids];
  // console.log(arr);
          }
      
       } else if(player1.turn==false && player2.turn==true){
           if(btn.textContent!==player1.symbol){
        btn.textContent = player2.symbol;
        player2.turn = false;
        player1.turn = true;
           }
       }

   })
})

function checkWin(){
    const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]
    
};


}
control();*/












