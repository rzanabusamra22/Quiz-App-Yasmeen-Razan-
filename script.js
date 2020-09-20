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
var a_text =document.getElementById("a")
var b_text =document.getElementById("b")
var c_text =document.getElementById("c")
var d_text =document.getElementById("d")
var subButton =document.getElementById("subButton")
//Current Quiz (index)
let currentQuiz=0;

loadQuiz();
function loadQuiz(){
	var currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a; //not working 
	b_text.innerText = currentQuizData.b; //not working 
	c_text.innerText = currentQuizData.c; //not working 
	d_text.innerText = currentQuizData.d; //not working 

	currentQuiz++;
}
//Using jQuery on click function
subButton.on('click',function(){  //why??
	currentQuiz++;

	if(currentQuiz < quizData.length){
    loadQuiz();
	}
	else{
		//we need to show result!!
		alert("Quiz is Done")
	}
	
})








