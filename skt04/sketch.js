/*TODO
Figure out color pattern so branches are brighter color
Figure out interactivity with mouse
find how to vary dednsity
*/

let points = [];
//controls speed at which the angle changes
let mult = 0.004;
let alpha = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    angleMode(DEGREES);
    //adjust noise detail for less symmetrical patterns
    noiseDetail(0.08);

    //RECOMMENDED: Higher densities work better with a lower mult
    let density = 40;
    let space = width / density;


    for(let x=0;x < width; x += space){
        for(let y=0; y < innerHeight; y+=space) {
            let p = createVector(x + random(-10, 10), y + random(-10, 10));
            points.push(p);
        }

    }
    
}

shuffle(points, true);

function draw() {
    noStroke();
    

    for(let i=0; i<points.length; i++){
        //colors
        let r = random(1,  255);
        let g = random(115, 255);
        let b = random(144, 255);

        fill(r, g , b, alpha);
        let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);

        points[i].add(createVector(cos(angle), sin(angle)));

        //Changes size of ellipse
        if(dist(width / 2, height / 2, points[i].x, points[i].y) < 1080) {
            //change Width to increase number of dendrites
            ellipse(points[i].x, points[i].y, i * 0.04);

        }
        //Sets fading alpha
        alpha += 0.001;
       
    }
}