video = "";
search = "";

//function preload()
//{
//}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Searching for objects...";
    search = document.getElementById("search").value;
    console.log(search);
}

function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;

}