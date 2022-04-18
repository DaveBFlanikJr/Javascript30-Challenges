const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // the context (ctx) will get you the pixcels that you need to draw on the canvas.. Your not actually drawing on the html element
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // will set the width and height for the pixels and make it take up the whole window
ctx.strokeStyle = '#BADA55'; // will set a color when you first start drawing
ctx.lineJoin = 'round'; // will round out the corners when it meets another line (insted of square)
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false; // this will help us by only drawing when clicking down (not when moving mouse)
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return; // strop the function from running when not mousedowned
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastX);
  ctx.lineTo(e.offsetX, e.offsetY); // come from the actual event (look in the console on browser)
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue > 360) {
    hue = 0;
  }
  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction = true ) {
    ctx.lineWidth++;
  }else{
     ctx.lineWidth--;
  }

};

// // function draw (e) {
//   if(!isDrawing) return;
// //   console.log(e);
// // }



canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);  // When the mouse is moved on the canvas it will console.log the draw funciton
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); // this will stop the function if you drag off the page so it doesnt keep the mousedown function running
