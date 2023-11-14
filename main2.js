img = "";
function preload() {
    img = loadImage('ComputerMouse.jpg');
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status2").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded");
    status2 = true;
    objectDetector.detect(img, gotResults);
}
function draw() {
    image(img, 0, 0, 500, 400);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
    }
}