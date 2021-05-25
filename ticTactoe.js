/*const btns = document.querySelectorAll('button');

btns.forEach(function(btn){
     var player = '1';
    var player = '0';
  btn.addEventListener("click",function(){
     if(player==='1'){
      btn.textContent = 'X';
     } else {
        btn.textContent = '0';
 
     }
  })  
 
})*/

//GameBoard Module
const module = (function(){
const gameBoard = {
 // game_board:['X','0','X','0'], 
 board:[]

}
/*
const renderBoard = function(){
    //const game_boardArr = gameBoard.game_board;
    //console.log(game_boardArr);
 //for(let i = 0; i<game_boardArr.length; i++){
        const btns = document.querySelectorAll('button');
        btns.forEach(function(btn){
        //    btn.addEventListener("click",change)//{
        btn.addEventListener("click",function(){
            let i = 0;
                i++;
            btn.textContent = game_boardArr[i];
            console.log(game_boardArr[i]);
            }
        
        
       // })
           // btn.textContent = game_boardArr[i];
               // console.log(game_boardArr[i]);
      /* let iterator = iterate(0)
       function* iterate(index){
           while(index<game_boardArr.length){
               yield index++;
               iterator = iterate(1);
               yield 0;
           }
       }
       function change(){
           btn.textContent = game_boardArr[iterator.next().value];
           console.log(game_boardArr[iterator.next().value]);

       }

           
         
        // })
    
    })
 })


   
 //}
}
return{
    renderBoard
}

})();
module.renderBoard();
*/

//factory function for player
const players = function(name){
    console.log('Player1 - ' + name);
return name;
}
//const player1 = players('John');
//const playerb = players('Sam');

//function for flow
const controller = function(){

}();









