
//window.addEventListener('load', draw)
window.addEventListener('load', drawFace)
window.addEventListener('resize', drawFace)

/**
 * draws on the canvas
 */

 /*
function draw(){
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    resizeCanvasToFullscreen(canvas)

    context.fillStyle = 'darkblue';
    context.strokeStyle = 'orange';

    context.fillRect(25,25,100,100);
    context.clearRect(50,50,50,50);
    context.strokeRect(60,60,30,30);

    context.strokeStyle = 'green';
    context.strokeRect(70,70, 10,10)
}
*/

/**Draws my beautiful face #sparkleSparkle */
function drawFace(){
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    resizeCanvasToFullscreen(canvas)

    /* Just tried to draw something
    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(100, 75);
    context.lineTo(100,25);
    context.fill();
    */
    context.fillStyle = "white";


    context.beginPath();
    context.arc(200,200,100,0, 2 * Math.PI);
    context.fill();
    context.stroke();
    

    context.fillStyle = "lightpink";
    context.beginPath();
    context.arc(200,210,59,0, Math.PI);
    context.fill();
    context.lineTo(260,210);
    context.stroke();
    

    /*Eye globes*/
    context.beginPath();
    context.arc(160,150,30,0,2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(240,150,30,0,2 * Math.PI);
    context.stroke();

    /*iris*/
    context.fillStyle = "darkgreen";

    context.beginPath();
    context.arc(240,147,25,0,2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(160,147,25,0,2 * Math.PI);
    context.fill();

    /*pupils*/
    context.fillStyle = "black";
    context.beginPath();
    context.arc(160,144,21,0,2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(240,144,21,0,2 * Math.PI);
    context.fill();

    /*sparkle*/
    context.fillStyle ="white";

    context.beginPath();  
    context.scale(0.50,1);
    context.arc(297,153,11,0,2 * Math.PI);
    context.fill();

    context.beginPath();  
    context.scale(0.9,0.8);
    context.arc(350,180,8,0,2 * Math.PI);
    context.fill();
    

}

/**
 * Resize canvas to fullscreen
 * @param {HTMLCanvasElement} canvas - element to be resized
 */

function resizeCanvasToFullscreen(canvas){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}