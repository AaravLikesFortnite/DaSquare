noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(600,450);
    canvas.position(600,120);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X="+noseX+", and Nose Y="+noseY);

        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist);
        console.log("Left Wrist="+leftWrist+", Right Wrist="+rightWrist+", and the difference="+difference);
    }
}





function draw(){
    background('#ffffff');
    fill("#03ff46");
    stroke("#03ff46");
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="The size of the square is "+difference+" pixels";
}