let homeScore = 0
let guestScore = 0
let foulsCountGuest = 0
let foulsCountHome = 0
let hours = 0
let minutes = 0
let seconds = 0
//grasp the element we want to modify
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeLeaderEl = document.getElementById("home-leader-paragraph")
let guestLeaderEl = document.getElementById("guest-leader-paragraph")
//function 
homeLeaderEl.textContent = " - "
guestLeaderEl.textContent = " - "
function homeScoreIncrementBy1(){
    homeScore = homeScore + 1
    homeScoreEl.textContent = homeScore
    show_leader();   
}
function homeScoreIncrementBy2(){
    homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore  
    show_leader()
}
function homeScoreIncrementBy3(){
    homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore
    show_leader()
}

function guestScoreIncrementBy1(){
    guestScore = guestScore + 1
    guestScoreEl.textContent = guestScore
    show_leader()
}
function guestScoreIncrementBy2(){
    guestScore = guestScore + 2
    guestScoreEl.textContent = guestScore
    show_leader()
}
function guestScoreIncrementBy3(){
    guestScore = guestScore + 3
    guestScoreEl.textContent = guestScore
    show_leader()
}
//fouls
let foulsElHome = document.getElementById("fouls-el-1")
let foulsElGuest = document.getElementById("fouls-el-2") 
function foulsIncrementForGuest(){
    foulsCountGuest += 1
    foulsElGuest.textContent = foulsCountGuest  
}
function foulsIncrementForHome(){
    foulsCountHome += 1
    foulsElHome.textContent = foulsCountHome     
}
// new game
function newGame(){
    timer()
    hours = 0
    minutes = 0
    seconds = 0
    foulsCountGuest = 0
    foulsCountHome = 0
    foulsElHome.textContent = 0
    foulsElGuest.textContent = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeLeaderEl.textContent = " - "
    guestLeaderEl.textContent = " - "
}
//leader
function show_leader(){
    if(homeScore < guestScore){
        guestLeaderEl.textContent = "Leader"
        homeLeaderEl.textContent = " - "
    }
    else if(homeScore == guestScore){
        homeLeaderEl.textContent = "Draw"
        guestLeaderEl.textContent = "Draw"
    }
    else{
        homeLeaderEl.textContent = "Leader"
        guestLeaderEl.textContent = " - " 
    }
}
//timer
function timer(){
    let timerEl = document.getElementById("timer-el")

    timerEl.textContent = 00 + " : " + 00 + " : " + 00
    let hours = 0
    let minutes = 0
    let seconds = 0
    timerEl.textContent = hours + " : " + minutes + " : " + seconds 
    const id = setInterval(timerV, 1000);
    function timerV() {
        timerEl.textContent = 00 + " : " + 00 + " : " + 00
        if (hours == 1 && minutes == 4 && seconds == 0) {
            clearInterval(id);
            timerEl.textContent = "0" + 1 + " : 0" + 0 + " : 0" + 0
        } 
        else{
            if(seconds < 60){
                seconds ++
                timerEl.textContent = "0" + hours + " : " + minutes + " : " + seconds 
            }
            else if(seconds > 60){
                seconds = 0
                minutes += 1
                timerEl.textContent = "0" + hours + " : " + minutes + " : " + seconds 
                seconds += 1
                timerEl.textContent = hours + " : " + minutes + " : " + seconds 
            }
            else{
                seconds = 0
                minutes += 1
                timerEl.textContent = hours + " : " + minutes + " : " + seconds
                if(minutes == 60){
                    minutes = 0
                    timerEl.textContent = hours + " : " + minutes + " : " + seconds 
                    hours += 1
                    timerEl.textContent = hours + " : " + minutes + " : " + seconds 
                    minutes += 1
                    timerEl.textContent = hours + " : " + minutes + " : " + seconds 
                }
                else if(minutes > 60){
                    minutes = 0
                    hour += 1
                    timerEl.textContent = hours + " : " + minutes + " : " + seconds 
                    minutes += 1
                    timerEl.textContent = hours + " : " + minutes + " : " + seconds 
                }
            }
        }
    }
  }
//fouls

