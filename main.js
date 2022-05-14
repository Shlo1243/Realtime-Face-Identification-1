function preload() {

}

function setup() {
    Canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    video.hide();
    imageClassifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NrlFVqB2R/model.json", modelLoaded);
}

function draw() {
    image(video, 0, 0, 500, 400);
    imageClassifier.classify(video, gotResult);
}

function modelLoaded() {
    modelLoaded("successfully");
}

function gotResult(error,result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("s1").innerHTML=result[0].label;
        document.getElementById("s2").innerHTML=result[0].confidence;
    }

}