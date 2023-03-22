function timer(){
    let time = new Date();
    const clock = document.getElementById('clock');
    const hour =time.getHours();
    const min =time.getMinutes();
    const sec =time.getSeconds();

    clock.innerHTML = (hour<10?`0${hour}`:hour)+":"+(min<10?`0${min}`:min)+":"+(sec<10?`0${sec}`:sec);
    // clock.innerHTML=String(hour.padStart(2,'0'))+':'+String(min.padStart(2,'0'))+':'+String(sec.padStart(2,'0'));
};
timer();
function timer_roll(){
    setInterval(timer,1000);
}
timer_roll();
