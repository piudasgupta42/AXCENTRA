// DIGITAL CLOCK
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;
}

// COUNTDOWN TIMER (NEW YEAR)
function updateCountdown() {
    const targetDate = new Date("January 1, 2027 00:00:00").getTime();
    const now = new Date().getTime();

    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "Happy New Year!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        days + "d " +
        hours + "h " +
        minutes + "m " +
        seconds + "s";
}

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);

updateClock();
updateCountdown();
