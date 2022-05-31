function timer(){
 let sec = 30;
 let timer = setInterval(function(){
     document.getElementById('timerDisplay').innerHTML='00:'+sec;
     sec--;
     if (sec < 0) {
         clearInterval(timer);
         document.getElementById("randomNumbers").classList.add("d-none");
         document.getElementById("result").classList.remove("d-none");
         document.getElementById("sameNumbers").classList.remove("d-none");
         for (let i= 0; i < 5; i++){
           userAnswer[i] = parseInt(prompt("Inserisci i numeri che ricordi. Uno alla volta."))
         }
         printResult();
     }
 }, 1000);
}

function randomNumbers(){
while(randomArray.length < 5){
    let r = Math.floor(Math.random() * 100) + 1;
    if (!randomArray.includes(r)){
     randomArray.push(r);
    }
    document.getElementById("randomNumbers").innerHTML = `${randomArray}`
}
}

function printResult(){
 let userScore = 0;
 let goodAnswers = [];
 for (let i = 0; i < 5; i++){
  if (randomArray.includes(userAnswer[i])){
   userScore = userScore + 1;
   goodAnswers.push(userAnswer[i])
  }
  document.getElementById("result").innerHTML = `Hai azzeccato ${userScore} numeri`
  document.getElementById("sameNumbers").innerHTML = `Lista dei numeri uguali : ${goodAnswers}`
 }
}

let userAnswer = [];
let randomArray = [];



window.onload = function() {
 randomNumbers();
 timer();
};