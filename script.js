//An Array Of Obj that contains the 5Q-4A for each Q and the right A.
let quizData = [
{
 question:"Most popular programming language in 2020 ?", 
 a:"Javascript",
 b:"C#",
 c:"Python",
 d:"Java",
 correct:"c" 
}, {
 question:"What dose HTML stands for ?", 
 a:"Healthy Teanager Male Language",
 b:"Home Time Manage Life" ,
 c:"Happy Text Monday Life",
 d:"Hyper Text Markup Language",
 correct:"d" 
}, {
 question:"HTML is a programing language ?", 
 a:"YES",
 b:"NO" ,
 c:"Maybe",
 d:"I do not know",
 correct:"b" 
}, {
 question:"A Syntax Error is ?", 
 a:"An error you will never find",
 b:"An error you find at the end of programing" ,
 c:"An error caused by language rules being broken",
 d:"An error due to user error",
 correct:"d" 
}, {
 question:"What does VR stands for ?", 
 a:"Virtual Reality",
 b:"Virtual Reactions" ,
 c:"Virtual Realistic",
 d:"Virtual Roundabouts",
 correct:"a" 
}
]
//js Code:
//calling the Q & A & Button using DOM 
var questionEl =document.getElementById("question")
var aText =document.getElementById("a")
var bText =document.getElementById("b")
var cText =document.getElementById("c")
var dText =document.getElementById("d")

var answerEls= document.querySelectorAll(".answer")// yasmeen ; this method selects all the elements with the same class
var quiz= document.getElementById("quiz")

var currentQuiz=0;//Current Quiz (index)
var score=0;
//load function to laod the Q and A
loadQuiz();
function loadQuiz(){
	unselect()
	var currentQuizData = quizData[currentQuiz]; //working
	questionEl.innerText = currentQuizData.question; //working 
	
	aText.innerText = currentQuizData.a; 
	bText.innerText = currentQuizData.b; 
	cText.innerText = currentQuizData.c;  
	dText.innerText = currentQuizData.d; 	
}
//To check witch answer is selected.
function selected(){
	var answer = undefined;
    answerEls.forEach(function(answerEl){// using forEach to iterate over each answer with the class answer in answers
    if(answerEl.checked){
    	answer=answerEl.id;
    }
});
    return answer;
}
function unselect(){
    answerEls.forEach(function(answerEl){
    answerEl.checked=false;    
});
}

//Using jQuery on click function
$('#subButton').on('click', function(e){ 
	var answer= selected()
	if(answer){ 
	if(answer === quizData[currentQuiz].correct){
		score++;
	}
     currentQuiz++;
     if(currentQuiz < quizData.length){
	  loadQuiz();
	  }
	  else{
	 	quiz.innerHTML ="<h2>You answered correctly at  $(score) / $(quizData.length) questions.</h2>"
	 	// how to show the score ??
	 	// select only one !!
	 	//documentation. 
	}	
	}	
})








