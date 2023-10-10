const questions = [{
        'que': 'Which of the following option leads to the portability and security of Java?',
        'a':'Bytecode is executed by JVM',
        'b':'The applet makes the Java code secure and portable',
        'c':'Use of exception handling',
        'd':'Dynamic binding between objects',
        'correct' : 'a'
    }, 
    {
        'que': 'Which of the following is not a Java features?',
        'a':'Dynamic',
        'b':'Architecture Neutral',
        'c':'Use of pointers',
        'd':'Object-oriented',
        'correct' : 'c'
    },
    {
        'que': '_____ is used to find and fix bugs in the Java programs.',
        'a':'JVM',
        'b':'JRE',
        'c':'JDK',
        'd':'JDB',
        'correct' : 'd'
    }

]
let index = 0;
let total = questions.length;
let right = 0,
    worng =0 ;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index === total){
        return endQuiz()
    } 
    reset();
    const data = questions[index]
    quesBox.innerText = ` ${index+1})  ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    }  else {
        worng++;
    }
    index++;
    loadQuestion();
    return; 
}

const getAnswer = () => {
        let answer;
        optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            } 
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> Thank you for playing the quiz</h3>
        <h2> ${right} / ${total} are correct</h2> 
    </div>
    `
}


loadQuestion();