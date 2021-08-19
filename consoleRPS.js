//array to hold all 3 outcomes
var outComes = ['r', 'p', 's'];



//computer picks a random rock paper or scissors
function rand() {
 var rando = Math.floor(Math.random() * 2);
 var compPick = outComes[rando];
 //Console shows the random pick
 console.log("This is comp pick: " + compPick);


//User picks r, p or s

 var userPick = process.argv[2];
 console.log("this is user pick: " + userPick)


//conditional to see who wins

if (compPick === userPick) {
    console.log("Tie game!")
}
if (compPick === "r" && userPick === "p") {
    console.log("computer love!")
}
if (compPick === "p" && userPick === "s") {
    console.log("computer love!")
}
if (compPick === "s" && userPick === "p") {
    console.log("User wins!")
}
if (compPick === "p" && userPick === "r") {
    console.log("User wins!")
}
}
//run game
rand();