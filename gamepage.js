// random value generated
var y = Math.floor(Math.random()* 10 + 1);
  
// counting the number of guesses
if(x == y){
alert("CONGRATULATIONS!!!!"+playername+" YOU GUESSED IT RIGHT IN " + guess + "GUESS");
guess= 1;
}
// made for correct Guess
else if(x>y)
{
guess++;
alert("OOPS SORRY!!!! TRY A SMALLER NUMBER");
}
else{
guess++;
alert("OOPA SORRY!!!! TRY A GREATER NUMBER");
}
  
// function for number guessed by user   
var x = document.getElementById("guessField").value;

function playAgain(){
y = Math.floor(Math.random()* 10 + 1);
}