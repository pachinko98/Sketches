const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    let w = width * 0.10;
    let h = height * 0.10;
    let gap = width * 0.03;
    let ix = width * 0.17;
    let iy = height * 0.17;

    const off = width * 0.02;

    let x, y;

    for(let i=0;i<5;i++){
      for(let j=0;j<5;j++){

        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;


        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'red';
        context.stroke();
        
        if(Math.random() > 0.5){
            context.beginPath();
            context.rect(x + off / 2, y + off / 2, w - off, h - off);
            context.strokeStyle = 'blue';
            context.stroke();
            
            
           
          }

      }


  };
  };
};

canvasSketch(sketch, settings);
