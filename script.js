function breakCookie(){
  document.getElementById("cookie").src = "fortune-cookie-broken.jpg";
  document.getElementById("b1").style.visibility = "hidden";
  document.getElementById("b2").style.visibility = "visible";
}

function newCookie(){
  document.getElementById("cookie").src = "fortune-cookie.jpg";
  document.getElementById("b1").style.visibiliity = "visible";
  document.getElementById("b2").style.visibility = "hidden";
}
