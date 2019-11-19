((Reveal, Expo, TimelineMax) => {
    /*jslint loopfunc: true, browser: true, devel: true*/
    /*globals Reveal, Expo, TimelineMax*/
    'use strict';

    let timeline = new TimelineMax({paused: true});

    Reveal.addEventListener('event-loop-wrap', () => {

        let text = document.getElementById('timeConsuming');

        timeline.to(text, 0.5, {fontSize: 75, fontWeight: 'bold', ease: Expo.easeInOut});

    }, false);

    Reveal.addEventListener('fragmentshown', (event) => {
        if(event.fragment.getAttribute('data-state') === 'elwp'){
            timeline.play();
        }
    }, false);

    Reveal.addEventListener('fragmenthidden', (event) => {
        if(event.fragment.getAttribute('data-state') === 'elwp'){
            timeline.reverse();
        }
    }, false);


})(Reveal, Expo, TimelineMax);
