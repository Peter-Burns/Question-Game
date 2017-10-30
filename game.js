var iterator = 0;
var score=0;
var userThrow = '';
var questionHolder = {
	q0 : ["Are the browns good?", "f"],
	q1 : ["Are the Cavs good?", "t"],
	q2 : ["Am I a web developer?", "t"],
	q3 : ["Is my dog awesome?", "t"],
	q4 : ["Is my cat stupid?", "t"],
	q5 : ["Is Donald Trump the president?", "t"],
	q6 : ["Is Cleveland the capital of Ohio?", "f"],
	q7 : ["Is Lebron the goat?", "f"],
	q8 : ["Is New York the best pizza city?", "f"],
	q9 : ["Is this page working correctly?", "t"],
	q10 : ["Is this page scaleable?","t"]
};
function questionAsk () {
	if (iterator < Object.keys(questionHolder).length){	
		document.querySelector("#question").innerHTML = questionHolder['q'+iterator][0];
	}
	else {
		document.querySelector("#question").innerHTML = "Game Over!";
	}
}
function scoreTracker () {
	document.querySelector("#score").innerHTML = "Score: " + score +" out of " + iterator;
}
questionAsk();
scoreTracker();
document.onkeyup = function(event) {
	userThrow = event.key;
	if(iterator === Object.keys(questionHolder).length){
		return;
	}
	if(userThrow === 't' || userThrow === 'f'){
		if(userThrow === questionHolder['q'+iterator][1]){
			alert("You are right!");
			score++;
		}
		else{
			alert("Wrong!");
		}
		iterator++;
		scoreTracker();
		questionAsk();
	}
};