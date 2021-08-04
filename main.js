noseX=0;
noseY=0;
difference=0;
leftWrist=0;
rightWrist=0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#8abceb');
    document.getElementById("text_side").innerHTML = "Width And Height Of A Text Will Be = "+ difference +"px"; 
    fill('#006e30');
    stroke('#006e30');
    text('Baani', noseX, noseY, difference);
}
function modelLoaded() {
    console.log("Model Loaded!");
    console.log("Posenet Initialized");
}
function  gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX ="+ noseX +"noseY ="+ noseY);

        leftWristx= results[0].pose.leftWrist.x;
        rightWristx= results[0].pose.rightWrist.x;

        difference= floor(leftWristx - rightWristx);
        console.log("difference is"+ difference);

        console.log("leftWrist ="+ leftWrist +"rightWrist ="+ rightWrist);
    }
}