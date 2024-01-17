var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    recognition.start();

}

recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
   if(content == "take my selfie"){
    speak();
   }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(function()  {
        snap();
        save();
    }, 5000);
}


Webcam.set({
    width:360,
    height:250,
    image_quality:90
});
camera=document.getElementById("camera");

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });
}


function  save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}