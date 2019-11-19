((Reveal, TweenMax, Expo) => {
    /*jslint loopfunc: true, browser: true, devel: true*/
    /*globals Reveal, TweenMax, Expo*/
    'use strict';

    Reveal.addEventListener('fragmentshown', (event) => {
        if(event.fragment.getAttribute('data-state') === 'intro-callback'){
            let scheduleText = document.getElementById('intro-callback-text');
            let text1 = document.getElementById('intro-callback-innertext1');
            let text2 = document.getElementById('intro-callback-innertext2');

            console.log(scheduleText);
            const fragmentID = event.fragment.getAttribute('data-fragment-index');
            console.log(`On intro-callback page, fragment ${fragmentID}`);

            TweenMax.to(scheduleText, 2, {text: 'def callback():', ease: Expo.easeInOut});
            TweenMax.to([text1, text2], 2, {marginLeft: 100, ease: Expo.easeInOut});
        }
    }, false);

    Reveal.addEventListener('fragmenthidden', (event) => {
        if(event.fragment.getAttribute('data-state') === 'intro-callback'){
            let scheduleText = document.getElementById('intro-callback-text');
            let text1 = document.getElementById('intro-callback-innertext1');
            let text2 = document.getElementById('intro-callback-innertext2');

            console.log(scheduleText);
            const fragmentID = event.fragment.getAttribute('data-fragment-index');
            console.log(`On intro-callback page, fragment ${fragmentID}`);

            TweenMax.to(scheduleText, 0.5, {text: '', ease: Expo.easeInOut});
            TweenMax.to([text1, text2], 0.5, {marginLeft: 0, ease: Expo.easeInOut});
        }
    }, false);

})(Reveal, TweenMax, Expo);
