/*

Illegal Operation - A website by John Lynch - April 2023
Main JS file
*/

const id = id => document.getElementById(id);

window.addEventListener("DOMContentLoaded", _ => {
    const clock = document.querySelector('.clock');
    const hour_numerals = [...document.querySelectorAll('.clock-numeral')];
    const minute_numerals = [...document.querySelectorAll('.minutes-numeral')];
    position_numerals();
    set_time();
    var cw, nw, r;

    function position_numerals() {
        const cw = +window.getComputedStyle(clock).width.slice(0, -2);
        const hnw = +window.getComputedStyle(hour_numerals[0]).width.slice(0, -2);
        const mnw = +window.getComputedStyle(minute_numerals[0]).width.slice(0, -2);
        const r = cw / 2.0;
        rh = r - hnw;
        rm = rh - mnw - cw / 40.0;
        hour_numerals.forEach( n => {
            const phi = n.dataset.angle * Math.PI / 180.0;
            const shim_x = -window.getComputedStyle(clock.parentElement).width.slice(0, -2) / 200;
            const shim_y = -window.getComputedStyle(clock.parentElement).height.slice(0, -2) / 50;
            n.style.left = `${r + rh * Math.cos(phi) + shim_x}px`;
            n.style.top = `${r + rh * Math.sin(phi) + shim_y}px`;
        });
        minute_numerals.forEach( n => {
            const phi = n.dataset.angle * Math.PI / 180.0;
            const shim_x = -window.getComputedStyle(clock.parentElement).width.slice(0, -2) / 300;
            const shim_y = -window.getComputedStyle(clock.parentElement).height.slice(0, -2) / 60;
            n.style.left = `${r + rm * Math.cos(phi) + shim_x}px`;
            n.style.top = `${r + rm * Math.sin(phi) + shim_y}px`;
        });
    }

    function set_time() {
        const now = new Date();
        const sec_delay = -now.getSeconds();
        const min_delay = -now.getMinutes() * 60 + sec_delay;
        const hour_delay = -now.getHours() * 3600 + min_delay;
        id('second-hand').style.setProperty('--delay', `${sec_delay}s`);
        id('minute-hand').style.setProperty('--delay', `${min_delay}s`);
        id('hour-hand').style.setProperty('--delay', `${hour_delay}s`);
    }

    window.addEventListener("resize", position_numerals);    
});

           