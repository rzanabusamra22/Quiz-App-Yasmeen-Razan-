//An Array Of Obj that contains the 5Q-4A for each Q and the right A.
let quizData = [
{
 question:"Most popular programming language in 2020 ?", 
 a:"Javascript",
 b:"C#" ,
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
var subButton =document.getElementById("subButton")
//Current Question (index)
let currentQuestion=0;

loadQuiz();
function loadQuiz(){
	var currentQuizData= quizData[currentQuestion];
	questionEl.innerText= currentQuizData.question;
	aText.innerText= currentQuizData.a;
	bText.innerText= currentQuizData.b;
	cText.innerText= currentQuizData.c;
	dText.innerText= currentQuizData.d;

	currentQuestion=++;
}
//Using jQuery on click function
subButton.on('click',function(){
	currentQuizData;
	if(currentQuizData < quizData.length){

	}
})








