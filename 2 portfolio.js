let countdown=5;
const countdownElement=document.getElementById('Countdown')
const intervalid=setInterval(() => {
    countdown--;
    if (countdown < 0) {
        clearInterval(intervalid);
        window.location.href='open.html';
    }
}, 1000);