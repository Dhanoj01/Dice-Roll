
var randomNumber = Math.floor(Math.random()*6)+1;

var randomImageSource= "dice"+randomNumber+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//for second dice

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2="dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 WIN!";
}

else if(randomNumber < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 WIN!";
}

else{
    document.querySelector("h1").innerHTML="MATCH IS DRAW";
}
