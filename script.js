const quizData = [
    {
        question:"what is 2 + 2",
        options:["4","5","1","0"],
        answer: "4",
  
    },
    {      question:"what goes up and never comes down",
           options:["age","rain","cloud","party"],
            answer:"age",
       
    },
    {
        question:"i am soft in the inside and hard on the outside",
        options:["coconut","orange","pineapple","cashewnut"],
        answer: "coconut"
        
        
    },
    {
        question:"what is the capital of france",
        options:["lodon","paris","yam","berlin"],
        answer: "paris" 
    },
        
    {
        question:"what is 1 +1",
        options:["2","3","4","0"],
        answer: "paris"
        
        
    },
]


      
 
      const questionElement = document.getElementById("question");
      const optionsElement = document.getElementById("options");
      const nextBtn = document.getElementById("next-btn");
      const  progressindicator = document.getElementById("progress-indicator")

      let currentQuestionIndex = 0;
      let score = 0;

      function showQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach((Option) =>{
            const button = document.createElement("Button");
            button.textContent = Option;
            button.classList.add("btn");
            button.addEventListener("click",() => selectAnswer(option));
            optionsElement.appendChild(button);
            
            });
        }
                function selectAnswer(option){
                    
                }
      
      showQuestion();
      
      