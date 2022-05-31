function timer(){
 let sec = 30;
 let timer = setInterval(function(){
     document.getElementById('timerDisplay').innerHTML='00:'+sec;
     sec--;
     if (sec < 0) {
         clearInterval(timer);
         document.getElementById("randomNumbers").classList.add("d-none");
     }
 }, 1000);
}

function randomNumbers(){
let randomArray = [];
while(randomArray.length < 5){
    let r = Math.floor(Math.random() * 100) + 1;
    if (!randomArray.includes(r)){
     randomArray.push(r);
    }
    document.getElementById("randomNumbers").innerHTML = `${randomArray}`
}
}



window.onload = function() {
 randomNumbers();
 timer();
};