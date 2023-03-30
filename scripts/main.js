window.addEventListener("DOMContentLoaded", _ => {
    const clock = document.querySelector('.clock');
    const numerals = [...document.querySelectorAll('.clock-numeral')];
    const cw = window.getComputedStyle(clock).width;
    const nw = window.getComputedStyle(numerals[0]).width;
    const r = +cw.slice(0, 3) / 2.0 - +nw.slice(0, 3);
    numerals.forEach( n => {
        const phi = n.dataset.angle * Math.PI / 180.0;
        console.log(`r: ${r}, phi: ${phi}`);
        n.style.left = `${6 + r * (1 + Math.cos(phi))}px`;
        n.style.top = `${6 + r * (1 + Math.sin(phi))}px`;
    });
});
