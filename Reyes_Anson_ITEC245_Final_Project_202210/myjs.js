//This starts the slideshow and initializes the values passed into the slideshow constructor function.
//You can enter two default values in the curly brackets example: {autoplay:false,startimage:5}
var Slide = new Slideshow("Anson_Reyes",false,false,false,{/*User can change two default values here*/});

document.querySelector("#play").addEventListener("click",Slide.playPause);

document.querySelector("#removeimage").addEventListener("click",Slide.removeImage);

document.querySelector("#setlayout").addEventListener("click",Slide.setLayout);

document.querySelector("#previous").addEventListener("click",Slide.previous);

document.querySelector("#next").addEventListener("click",Slide.next);

document.querySelector("#colorswitch").addEventListener("click",Slide.colorSwitch);

document.querySelector("#howto").addEventListener("click",Slide.instructions);