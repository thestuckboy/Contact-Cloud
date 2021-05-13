const timer = document.getElementById('timer');

setTimeout(() => {timer.innerText = "2"}, 1000);
setTimeout(() => {timer.innerText = "1"}, 2000);
setTimeout(() => {
    timer.innerText = "0";
    window.location.replace('/contacts');
}, 3000);