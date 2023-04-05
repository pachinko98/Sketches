let stepX;
let stepY;
let glitch;

function setup() {
    createCanvas(1920, 1080);
    noStroke();
    colorMode(HSB, width, height, 100);
    glitch = new Glitch();
    glitch.pixelate(0.5);
    glitch.errors(false);
}

function draw() {
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    
    for(let gridY=0; gridY<height; gridY+=stepY){
        for(let gridX=0; gridX<width; gridX+=stepX){

            let phue = gridX <= 198 ? gridX + 160 : gridX - 30;
            fill(phue, height - gridY, 100);

            if (mouseIsPressed==true){
                rect(gridX, gridY, stepX, stepY);
            } else {
                ellipse(gridX, gridY, stepX, stepY)
            }

        }
    }

}