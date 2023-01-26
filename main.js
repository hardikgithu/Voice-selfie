var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult = function(event)
{
    console.log(event);
    Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById('textbox').innerHTML=Content;
    if(Content=="take my selfie")
    {
        console.log("taking selfie---");
        speak();
    }

}

function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Hello User your selfie will be taken in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function()
     { take_snapshot(); 
        save();
     }, 5000); 
    }
    
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}

