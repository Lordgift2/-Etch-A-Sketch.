 let color = 'black';
 let click = true;

function porpulateBoard(size){
    let sketchBoard = document.querySelector(".sketchBoard");
    let squares = sketchBoard.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    sketchBoard.style.gridTemplateColumns = `repeat(${size},1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size},1fr)`;
    let amount = size * size;
        for (i=0;i<amount;i++){
            let square = document.createElement('div');
            square.addEventListener("mouseover", colorSqure);
            square.style.backgroundColor="white";
            sketchBoard.insertAdjacentElement('beforeend',square);
        }
        function colorSqure(){
            if (click){
                if (color==="random"){
                this.style.backgroundColor=`hsl(${Math.random()*360}, 100%, 50%)`
                }
                else{
                this.style.backgroundColor= color
                }
            }
        }
    }  
porpulateBoard(16);

function changeSize(input){
    if(input >= 2 && input<=100){
        document.querySelector(".error").style.display='none';
    porpulateBoard(input);
    }
    else{
        document.querySelector(".error").style.display='flex'
    }  
};
function changeColor(choice){
    color = choice
}
resetBoard=()=>{
    let sketchBoard = document.querySelector(".sketchBoard");
    let squares = sketchBoard.querySelectorAll('div');
    squares.forEach((div)=> div.style.backgroundColor="white");
}
let clickBtn= document.querySelector('body');
clickBtn.addEventListener("click",()=>{
    click=!click
});

