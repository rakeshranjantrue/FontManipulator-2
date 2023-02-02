difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(830, 150);

    video = createCapture(VIDEO);
    video.position(10, 150);
    video.size(500, 400);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('Posenet is intialized');
  }

  function draw()
{
    background('#6495ed');

    document.getElementById("size").innerHTML = "Size of the text is " + difference +" px";
    textSize(difference);
    fill('#87CEEB');
    text('', 50, 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);
    }
}
