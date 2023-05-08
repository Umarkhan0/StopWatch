let hourse = 00;
let minutes = 00
let second = 00;
let milliSecond = 00;
let timer ;
let resetbtn = document.getElementById("reset");
let startbtn = document.getElementById("startButton")
    startbtn.addEventListener("click",function (){        
        if(timer == null){
            clearInterval(timer)
        }
        timer = setInterval(stopWatch,20)
    }) 
let stopButton = document.getElementById("stop");
    stopButton.addEventListener("click",function(){
       clearInterval(timer)
    })
    resetbtn.addEventListener("click", function() {
        clearInterval(timer);
        hourse = 00;
        minutes = 00;
        second = 00;
        milliSecond = 00;
        document.querySelector("#hourse").innerHTML = hourse;
        document.querySelector("#minute").innerHTML = minutes;
        document.querySelector("#sencond").innerHTML = second;
        document.querySelector("#milliSecond").innerHTML = milliSecond;        
        })
function stopWatch(){
    milliSecond++
    if(milliSecond === 60){
    milliSecond = 0
    second++
    }
    if(second === 60){
        second = 0;
        minutes++
    }
    if(minutes === 60){
        minutes = 0;
        hourse++
    }
hourse = document.querySelector("#hourse"). innerHTML =hourse;

minutes = document.querySelector("#minute"). innerHTML=minutes;
second = document.querySelector("#sencond"). innerHTML =second;
milliSecond = document.querySelector("#milliSecond"). innerHTML =milliSecond;
}
