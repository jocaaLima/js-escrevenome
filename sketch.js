function setup() {
    createCanvas(500, 500);
     background ("lightblue");
  }
  
  function draw() {
   
    stroke("blue");
    fill("lightcyan");
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed)
    rect(mouseX,mouseY,40,60);
  }
  