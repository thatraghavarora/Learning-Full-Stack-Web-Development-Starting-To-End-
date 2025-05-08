let timer = document.querySelector('#clock');
let startbtn = document.getElementById("Start");
let stopbtn = document.getElementById("Stop");
let Restart = document.getElementById("Restart");

let msec = 00;
let sec = 0;
let minsec = 0;
let timerid = null;

startbtn.addEventListener('click', function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(starttimer , 10); // ✅ FIXED
});

stopbtn.addEventListener('click', function(){
    clearInterval(timerid);
});

Restart.addEventListener('click', function(){
    clearInterval(timerid);
    msec = 0;
    sec = 0;
    minsec = 0;
    timer.innerHTML = `00 : 00 : 00`; // ✅ Moved after reset
});

function starttimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if (sec == 60){
            sec = 0;
            minsec++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minsecString = minsec < 10 ? `0${minsec}` : minsec;

    timer.innerHTML = `${minsecString} : ${secString} : ${msecString}`; // ✅ Move this INSIDE the function
}