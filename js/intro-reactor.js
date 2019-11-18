((Reveal, TweenMax, Expo, TimelineMax) => {
    /*jslint loopfunc: true, browser: true, devel: true*/
    /*globals Reveal, TweenMax, Expo, TimelineMax*/
    'use strict';

    let timeline = new TimelineMax({paused: true});

    Reveal.addEventListener('intro-reactor', () => {

        let text = document.getElementById('intro-reactor-text');
        let indent = document.getElementById('intro-reactor-indent');

        timeline.to(text, 1.5, {opacity: 100, ease: Expo.easeInOut, delay: 0.5});
        timeline.to(text, 1, {height: 49, ease: Expo.easeInOut, marginBottom: 20}, 0);
        timeline.to(indent, 1, {marginTop: 20, marginLeft: 100, ease: Expo.easeInOut}, 0);
        timeline.to(indent, 0, {text: '1. Invoke Callback', ease: Expo.easeInOut}, 0);

    }, false);

    Reveal.addEventListener('fragmentshown', (event) => {
        if(event.fragment.getAttribute('data-state') === 'intro-reactor'){
            timeline.play();
        }
    }, false);

    Reveal.addEventListener('fragmenthidden', (event) => {
        if(event.fragment.getAttribute('data-state') === 'intro-reactor'){
            timeline.reverse();
        }
    }, false);


})(Reveal, TweenMax, Expo, TimelineMax);
