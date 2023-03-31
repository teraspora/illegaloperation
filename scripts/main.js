const id = id => document.getElementById(id);

function set_time() {
    const now = new Date();
    const hour_hand = id('hour-hand');
    const minute_hand = id('minute-hand');
    const second_hand = id('second-hand');

    let secs = now.getSeconds();
    let mins = now.getMinutes();
    let hours = now.getHours();

    const hourStr = `${hours < 10 ? `0` : ``}${hours}`;
    const minStr = `${mins < 10 ? `0` : ``}${mins}`;
    const secStr = `${secs < 10 ? `0` : ``}${secs}`;

    second_hand.style.transform.animationDelay = ``;
    minute_hand.style.transform.animationDelay = ``;
    hour_hand.style.transform.animationDelay = `-3600s`;
}

window.addEventListener("DOMContentLoaded", _ => {
    const clock = document.querySelector('.clock');
    const numerals = [...document.querySelectorAll('.clock-numeral')];
    const cw = window.getComputedStyle(clock).width;
    const nw = window.getComputedStyle(numerals[0]).width;
    const r = +cw.slice(0, 3) / 2.0 - +nw.slice(0, 3);
    numerals.forEach( n => {
        const phi = n.dataset.angle * Math.PI / 180.0;
        console.log(`r: ${r}, phi: ${phi}`);
        n.style.left = `${r * (1 + Math.cos(phi))}px`;
        n.style.top = `${r * (1 + Math.sin(phi))}px`;
    });
    set_time();
});

