((Reveal) => {
    /*jslint loopfunc: true, browser: true, devel: true*/
    /*globals Reveal*/
    'use strict';

    let stopAnim = false;

    function anim(lastVal, el) {
        if(stopAnim){
            return;
        }
        const val = (lastVal + 10) % 1240;
        el.style.transform = `translateX(${val}px)`;
        requestAnimationFrame(() => anim(val, el));
      }

    Reveal.addEventListener('intro-blocking', () => {
        let button = document.getElementById('el-blocking-btn');
        let reset = document.getElementById('el-blocking-reset');
        let result = document.getElementById('el-blocking-res');

        // Block main thread for 5 seconds
        button.addEventListener('click', () => {
            const start = Date.now();
            while (Date.now() - start < 5000){
                // Trap main thread here to block
            }
            result.innerText = 'Finished';
            let ding = new Audio('resources/bell-sound.wav');
            ding.play();
        });

        // Reset
        reset.addEventListener('click', () => {
            result.innerText = 'Not started';
        });

        let box = document.getElementById('el-blocking-anim');

        // Start animation
        document.getElementById('el-blocking-anim-btn').addEventListener('click', () => {
            stopAnim = false;
            anim(0, box);
        });

        // Reset
        document.getElementById('el-blocking-anim-stop').addEventListener('click', () => {
            stopAnim = true;
            box.style.transform = 'translateX(0px)';
        });

    }, false);

})(Reveal);

