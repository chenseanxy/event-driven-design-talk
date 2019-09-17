((Reveal) => {
    /*jslint loopfunc: true, browser: true*/
    /*globals Reveal*/
    'use strict';

    let stopAnim = false;

    function anim(lastVal, el) {
        if(stopAnim){
            return;
        }
        const val = (lastVal + 10) % 1390;
        el.style.transform = `translateX(${val}px)`;
        requestAnimationFrame(() => anim(val, el));
      }

    Reveal.addEventListener('el-blocking', () => {
        let button = document.getElementById('el-blocking-btn');
        let reset = document.getElementById('el-blocking-reset');
        let result = document.getElementById('el-blocking-res');

        button.addEventListener('click', () => {
            const start = Date.now();
            while (Date.now() - start < 5000){

            }
            result.innerText = 'Finished';
        });

        reset.addEventListener('click', () => {
            result.innerText = 'Not started';
        });

        let box = document.getElementById('el-blocking-anim-btn');

        box.addEventListener('click', () => {
            stopAnim = false;
            anim(0, document.getElementById('el-blocking-anim'));
        });

        document.getElementById('el-blocking-anim-stop').addEventListener('click', () => {
            stopAnim = true;
            box.style.transform = `translateX(0px)`;
        });


    }, false);
})(Reveal);

