let time = document.getElementById("time");

setInterval(function() {
    let date = new Date().toLocaleString();
    time.innerText = date;
}, 1000)