var userName="Jane";
userName ? console.log(`Hello,${userName}`):console.log("Hello!");
let userQuestion ="Am I pregnant?";
console.log(`Your wish was : ${userQuestion}`);
var randomNumber=Math.floor(Math.random()*7)
let num=String(randomNumber);

var eightBall="";
switch (num){
  case "0":
  eightBall="Hmmm";
  break;
  case "2":
  eightBall='It is decidedly so'
  break;
  case "3":
  eightBall='Reply hazy try again'
  break;
  case "4":
  eightBall='Cannot predict now'
  break;
  case "5":
  eightBall='Do not count on it'
  break;
  case "6":
  eightBall='My sources say no'
  break;
  case "7":
  eightBall='Outlook not so good'
  break;
  case "8":
  eightBall='Signs point to yes'
  break;
}
console.log(eightBall);
