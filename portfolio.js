
//hamburger menu toggle
function toggle() {
  eli = document.querySelector(".button");
  eli.classList.toggle("butt");
  window.navigator.vibrate(100);
}
//adding vibration on hover
const img=()=>{
  window.navigator.vibrate(100);
};
//image slider
var images = [
  "nauman.jpg",
  "noman.jpg",
  "nomi.jpg"
  ];
  var num = 0;
  setTimeout(
  function next() {
    var nauman = document.getElementById("nauman");
    num++;
    if (name >= images.length) {
      num = 0;
    }
    nauman.src = images[num];
  }
  , 5000);
  setTimeout(
  function previous() {
    var nauman = document.getElementById("nauman");
    num--;
    if (name < 1) {
      num = images.length-1;
    }
    nauman.src = images[num];
  }
  , 7000);
  setTimeout(
    function my() {
      var nauman = document.getElementById("nauman");
nauman.src = "nauman.jpg";
} 
 , 9000);
 
 //Sending Email
 function sendEmail() {
 var templateParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
};
emailjs.send('service_s7lukmt', 'template_dk5xljk', templateParams)
    .then(function(response) {
       alert('SUCCESS!', response.status, response.text);
    }, function(error) {
       alert('FAILED...', error);
    });
 }
 //change theme
function theme() {
  document.body.style.background=`#${Math.floor(Math.random()*0xffffff).toString(16)}`;
  window.navigator.vibrate(100);
}
//Copyright 
function copy(){
    d = new Date();
    el = document.getElementById("copy");
    el.innerHTML = d.toDateString();
}
//Scroll to top button
let myButtton = document.getElementById('mybtn');
        window.onscroll = function(){scrollFunction()};
        function scrollFunction(){
          if(window.innerHeight>20 || document.documentElement.scrollTop > 20){
            myButton.style.display = "block";
          }
          else{
            myButton.style.display = "none";
          }
        }
        function topFunction(){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
