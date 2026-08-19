let guess;
let guesses = 0;
let hit =0;
let loc1=3;
let loc2= 4;
let loc3=5;
let issunk = false;
while(issunk == false){
    guess = prompt("ready, aim, fire");
    if(guess < 0 || guess > 6){
        alert("Please enter the valid cell num")
    } else {
        guesses = guesses + 1;
        if(guess == loc1 || guess == loc2 || guess == loc3){
            alert ("hit!");
            hit = hit + 1;
            if(hit == 3){
                issunk = true;
                alert("You sank my battleship!");
            } else {
                alert("Miss");
            }
        }
    } 
    let stats = "You took" + guesses + "guesses to which means your";
    alert (stats);
}