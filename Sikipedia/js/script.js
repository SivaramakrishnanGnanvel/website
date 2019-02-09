// var play=document.getElementByID("video");
// function play()
//    if(video.paused){
//      video.play();
//    }
//    else {
//      video.pause();
//    }

//Define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]")
//Language Transulation
var language = {
  eng: {
    welcome:"welcome everyone!"
  },
  es: {
    welcome:"Bienvenidos todos!"
  }
};
// Definee language via window hash
if (window.location.hash) {
  if (window.location.hash === "#es") {
    hi.textContent = language.es.welcome;
  }
}   
//define language reload onclick 
for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
   location.reload(true);
  };
}   

