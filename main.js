function startclassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BP7KK-Q_L/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}