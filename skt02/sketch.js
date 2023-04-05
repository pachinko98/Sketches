function setup() {
    createCanvas(600, 800);
}

function keyPressed() {
    switch (key) {
        case '1':
            segmentCount = 360;
            break;
        case '2':
            segmentCount = 45;
            break;
        case '3':
            segmentCount = 24;
            break;
        case '4':
            segmentCount = 12;
            break;
        case '5':
            segmentCount = 6;
            break;
        default:
            segmentCount = 12;
            break;
    }
}

function draw() {
    colorMode(HSB, 360, width, height);
    background(360, 0, height);

    segmentCount = 12;

    let angleStep = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);

    for(let angle=0; angle<=360; angle+=angleStep){
        radius = 200;
        let vx = width/2 + cos(radians(angle)) * radius;
        let vy = height/2 + sin(radians(angle)) * radius;
        vertex(vx, vy);
        fill(angle, mouseX, mouseY);  
    }

    endShape();

}