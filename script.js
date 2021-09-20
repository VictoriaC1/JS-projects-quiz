const quizData = [
 {
 	question: "Which is the worlds' largest country?",
 	a: "USA",
 	b: "China",
 	c:"Argentina",
 	d: "None of the above",
 	correct: "d"

 },{

	 question: "Which one is an Ari Aster movie?",
	 a: "Midsommar", 
	 b: "The conjuring", 
	 c: "After", 
	 d: "Luca", 
	 correct: "a"
	}, 

	{
		question: "Who is the president of the US?",
		a: "AOC<3",
		b:"Donald", 
		c: "Trump", 
		d: "BydeN",
		correct: "d"
	},

	{
		question: "Worst character of Euphoria?",
		a: "Fucking Nate", 
		b: "Cassie", 
		c: "Maddie", 
		d:"Nate's dad",
		correct: "a"
	}


];
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0 ;

loadQuiz(); 

function loadQuiz(){
	const currentQuizData = quizData[currentQuiz]; 
	questionEl.innerText = currentQuizData.question; 

	a_text.innerText = currentQuizData.a; 
	b_text.innerText = currentQuizData.b; 
	c_text.innerText = currentQuizData.c; 
	d_text.innerText = currentQuizData.d; 

	currentQuestion++; 
}
submitBtn.addEventListener("click", () => {
	currentQuiz++;
	if(currentQuiz < quizData.length){
		loadQuiz();
	}else{
		alert("You finished!! Congrats");
	}
	loadQuiz();
});