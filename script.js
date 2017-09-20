var fortunes = ["When in anger, sing the alphabet.","May you someday be carbon neutral.","You will be hungry 30 minutes from now.","About time I got out of that cookie.","meh.","The road to riches is paved with homework.","The fortune you seek is in another cookie.","Ignore previous cookie.","Confucious say: if you think we're going to sum up your whole life on this little bit of paper, you're crazy.","Someone has Googled you recently.","You are not illiterate.","To be sure of hitting the target, shoot first and call whatever you hit the target.","Good things come to those who get up from their seats and start walking around the room like a Tyrannosaurus Rex.","Stop procrastinating - starting tomorrow.","The best angle from which to approach any problem is the TRYangle.","No snowflake in an avalanche ever feels responsible.","You will own a ninja cat.","Enjoy yourself while you can.","Run.","You are sensitive, kind, thoughtful, wise, generous, and gullible.","A foolish man listens to his heart, a wise man listens to cookies.","Zombies are coming.","Error 404: Fortune not found","Send help! I'm stuck in a chinese food factory!","I will demolish you.","The cake is a lie.","Gryffindor!","TROGDOR!","The food is poisoned.","Beware of the person to your left.","Life is short. Eat dessert first.","Eat and forget. Eat and forget."
]

function breakCookie(){
  document.getElementById("cookie").src = "fortune-cookie-broken.jpg";
  document.getElementById("b1").style.visibility = "hidden";
  document.getElementById("b2").style.visibility = "visible";
  getFortune();
}

function newCookie(){
  document.getElementById("cookie").src = "fortune-cookie.jpg";
  document.getElementById("b1").style.visibility = "visible";
  document.getElementById("b2").style.visibility = "hidden";
  document.getElementById("fortune").innerHTML ="";
}

function getFortune(){
  document.getElementById("fortune").innerHTML = fortunes[Math.floor(Math.random()*fortunes.length)];
}
