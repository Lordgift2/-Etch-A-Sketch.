 let color= "black"
multipleContainer=(size)=>{
let container = document.querySelector('.container');
let squares = container.querySelectorAll("div");
squares.forEach((div)=> div.remove());
container.style.gridTemplateColumns = `repeat(${size}),1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#e0e0e0";
    //Set up “hover” effect so the divs change color using JavaScript
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}
colorSquare=()=>{
    color === "random" ? this.style.backgroundColor=`hsl(${Math.random()*360},100%, 50%)`:this.style.backgroundColor = color;
}
multipleContainer(16);