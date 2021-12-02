
const navbar=document.getElementById('navbar')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px 10px";
  } else {
    document.getElementById("navbar").style.padding = "60px 10px";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

var mybutton = document.getElementById("myBtn");


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}