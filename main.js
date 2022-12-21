nosex=0;
nosey=0;
righteyey=0;
lefteyey=0;

function preload(){
clownnose=loadImage('https://i.postimg.cc/pLYdcqVT/clown-nose.png');
clownhair=loadImage('https://i.postimg.cc/9FBSs4SW/clownhair.png');

}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.center();
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose.net is loaded");
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clownnose, nosex, nosey, 30, 30);
    image(clownhair,righteyey, lefteyey, 125, 125);
}
function take_snapshot(){
    save('myfilterapp.jpeg');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
        console.log("nose x= " +  nosex);
        console.log("nose y= " +  nosey);
        righteyey=results[0].pose.rightEye.y-50;
        lefteyey=results[0].pose.leftEye.y-100;
        console.log("righteye y= " +  righteyey);
        console.log("lefteye y= " +  lefteyey);
    }
}