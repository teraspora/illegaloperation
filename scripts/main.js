const id = id => document.getElementById(id);

window.addEventListener("DOMContentLoaded", _ => {
    const clock = document.querySelector('.clock');
    const numerals = [...document.querySelectorAll('.clock-numeral')];
    position_numerals();
    set_time();
    var cw, nw, r;

    function position_numerals() {
        cw = window.getComputedStyle(clock).width;
        nw = window.getComputedStyle(numerals[0]).width;
        r = +cw.slice(0, 3) / 2.0 - +nw.slice(0, 3);
        numerals.forEach( n => {
            const phi = n.dataset.angle * Math.PI / 180.0;
            // console.log(`r: ${r}, phi: ${phi}`);
            n.style.left = `${r * (1 + Math.cos(phi))}px`;
            n.style.top = `${r * (1 + Math.sin(phi))}px`;
        });
    }

    function set_time() {
        const hour_hand = id('hour-hand');
        const minute_hand = id('minute-hand');
        const second_hand = id('second-hand');
        
        const now = new Date();
        const sec_delay = -now.getSeconds();
        const min_delay = -now.getMinutes() * 60 + sec_delay;
        const hour_delay = -now.getHours() * 3600 + min_delay;
        
        console.log([sec_delay, min_delay, hour_delay]);
        // debugger;

        second_hand.style.setProperty('--delay', `${sec_delay}s`);
        minute_hand.style.setProperty('--delay', `${min_delay}s`);
        hour_hand.style.setProperty('--delay', `${hour_delay}s`);
    }

    window.addEventListener("resize", position_numerals);    
});

           