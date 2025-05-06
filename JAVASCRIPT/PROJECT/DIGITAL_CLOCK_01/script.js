function DisplayTime(){
    var mydate = new Date();
    var hour = mydate.getHours();
    var min = mydate.getMinutes();
    var sec = mydate.getSeconds();
    
    document.getElementById('hour').innerText = hour;
    document.getElementById('min').innerText = min;
    document.getElementById('sec').innerText = sec;
   
    if(hour<12){
        document.getElementById('session').innerText = "AM";
    }
    else{
        document.getElementById('session').innerText = "PM";
    }
}
setInterval(DisplayTime, 1)
