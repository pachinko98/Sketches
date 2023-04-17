
const density = '89E41)LI|1!|[]?-Iil/+;:""*.`\',.                         ';
let video;
let asciiDiv;

function setup(){
  noCanvas();
  video = createVideo('ping_pong06.mp4');
  video.size(200, 60);
  asciiDiv = createDiv();

  playBtn = createButton('play video');
  playBtn.position(30, 40);
  playBtn.mouseClicked(playVideo);

  pauseBtn = createButton('pause video');
  pauseBtn.position(80, 40);
  pauseBtn.mouseClicked(pauseVideo);
  fill(100, 100, 100);
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function draw() {
  video.loadPixels();
  let asciiImage = "";

  
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}