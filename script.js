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
//calling the elements using DOM 
var questionEl =document.getElementById("question") //for the question 
var aText =document.getElementById("a") //for the answer a
var bText =document.getElementById("b") //for the answer b
var cText =document.getElementById("c") //for the answer c
var dText =document.getElementById("d") //for the answer d

var answerEls= document.querySelectorAll(".answer") // yasmeen found this method ; it selects all the elements with the same class
var quiz= document.getElementById("quiz")

var currentQuiz=0;//Current Quiz (index)
var score=0; //to calculate the score 

//it loads the q and a into the quiz everytime 
loadQuiz();
function loadQuiz(){
	unselect()  // unselect buttons before picking an answer 
	var currentQuizData = quizData[currentQuiz]; //working
	questionEl.innerText = currentQuizData.question; // to access the q
	
	aText.innerText = currentQuizData.a; // to access the a
	bText.innerText = currentQuizData.b; // to access the b
	cText.innerText = currentQuizData.c; // to access the c
	dText.innerText = currentQuizData.d; // to access the d	
}
//To check what answer is selected and return its id.
function selected(){
	var answer = undefined;
    answerEls.forEach(function(answerEl){// using forEach to iterate over each answer with the class answer in answers
    if(answerEl.checked){ //using the checked prop. for radio button (output:true/false)
    	answer=answerEl.id; //return the id of the cheked radio button answer.
    }
});
    return answer;
}
function unselect(){  // we had a problem when moving to the next question , the radio button is selected before the user do.
    answerEls.forEach(function(answerEl){
    answerEl.checked=false;  // to unckeck , using the unchecked prop. of radio button.   
});
}

//Using jQuery on click function
$('#subButton').on('click', function(e){ 
	var answer= selected()    //after selecting an answer 
	if(answer){               //to check if it is selected 
	if(answer === quizData[currentQuiz].correct){  // the answer is equal to the right answer in the array of obj !
		score++; // add1 to the score 
	}
     currentQuiz++;  //move to the next q.
     if(currentQuiz < quizData.length){ //did not reach the finale question keep loading the other ones. 
	  loadQuiz();
	  }
	  else{ //to display the score.
	 	quiz.innerHTML ="<h2>You answered correctly at  $(score) / $(quizData.length) questions.</h2>"  
	 	// how to show the score ??
	 	// select only one !!
	 	//documentation. 
	}	
	}	
})








