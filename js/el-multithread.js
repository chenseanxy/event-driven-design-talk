((Reveal, TweenMax, TimelineLite) => {
    /*jslint loopfunc: true, browser: true, devel: true*/
     /*jshint unused:false*/
    /*globals Reveal, TweenMax, TimelineLite*/
    'use strict';

    Reveal.addEventListener('fragmentshown', (event) => {
        if(event.fragment.getAttribute('data-state') === 'el-multithread'){

            const fragmentID = event.fragment.getAttribute('data-fragment-index');
            console.log(`On el-multithread page, fragment ${fragmentID}`);

            switch(fragmentID){
                case 0:
                    // Start of animation
                    break;

                case 1:
                    // Thread creation
                    break;

                case 2:
                    // Main thread wait
                    break;

                case 3:
                    // Branch out
                    break;
            }
        }
    });
})(Reveal, TweenMax, TimelineLite);
