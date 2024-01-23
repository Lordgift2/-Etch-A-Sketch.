function porpulateBoard(size){
    let sketchBoard = document.querySelector(".sketchBoard");
    sketchBoard.style.gridTemplateColumns = `repeat(${size},1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size},1fr)`;

        for (i=0;i<256;i++){
            let square = document.createElement('div');
            square.style.backgroundColor="blue";
            sketchBoard.insertAdjacentElement('beforeend',square);
        }
    } 
        
porpulateBoard(16);