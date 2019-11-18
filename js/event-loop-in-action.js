((Reveal, Expo, TimelineMax) => {
    /*jslint loopfunc: true, browser: true, devel: true*/
    /*globals Reveal, Expo, TimelineMax*/
    'use strict';

    let timeline = new TimelineMax({paused: true});
    let mainLoop = new TimelineMax({paused: true, repeat: -1, repeatDelay: 2});

    Reveal.addEventListener('event-loop-in-action', () => {

        let timerTask = document.getElementById('timerTask');
        let callbackTask = document.getElementById('callbackTask');
        let runInNewThread = document.getElementById('runInNewThread');

        let queuedTimer = document.getElementById('queuedTimer');
        let queuedCallback = document.getElementById('queuedCallback');

        let threadLine1 = document.getElementById('threadLine1');
        let threadLine2 = document.getElementById('threadLine2');
        let invokeCallback = document.getElementById('invokeCallback');

        let newThread = document.getElementById('newThread');

        let runTask = document.getElementById('runTask');
        let loopLine1 = document.getElementById('loopLine1');
        let loopLine2 = document.getElementById('loopLine2');

        timeline.to(runTask, 0.2, {className: '+=current'})
            .addPause()
            .to(runTask, 0.2, {className: '-=current'})
            .to(queuedTimer, 0.5, {x: '-=1000', className: '+=disappear'})
            .to(timerTask, 0.5, {className:'-=appear'})
            .addPause()
            .to(runInNewThread, 0.2, {className: '+=current'})
            .addPause()
            .to(timerTask, 0.5, {className: '+=appear'})
            .to(threadLine1, 0.2, {className: '+=current'})
            .addPause()
            .to(threadLine1, 0.2, {className: '-=current'})
            .to(threadLine2, 0.2, {className: '+=current'})
            .addPause()
            .to(queuedCallback, 0.5, {className: '-=appear'})
            .to(newThread, 0.5, {opacity: 0})
            .addPause()
            .to(loopLine2, 0.2, {className: '-=current'})
            .to(runTask, 0.2, {className: '+=current'})
            .addPause()
            .to(queuedCallback, 0.5, {x: '-=1000', className: '+=disappear'})
            .to(callbackTask, 0.5, {className: '-=appear'})
            .addPause()
            .to(runTask, 0.2, {className: '-=current'})
            .to(invokeCallback, 0.2, {className: '+=current'});

        mainLoop.to(loopLine2, 0.5, {className: '-=current'}, 0)
            .to(loopLine1, 0.5,  {className: '+=current'}, 0)
            .to(loopLine1, 0.5,  {className: '-=current'}, 2)
            .to(loopLine2, 0.5,  {className: '+=current'}, 2);

    }, false);

    Reveal.addEventListener('fragmentshown', (event) => {
        if(event.fragment.getAttribute('data-state') === 'elia'){
            const fragment = event.fragment.getAttribute('data-fragment-index');
            timeline.play();

            if(fragment === '4'){
                mainLoop.play();
            }

            if(fragment === '6'){
                mainLoop.repeat(1);
            }
        }
    }, false);

    Reveal.addEventListener('fragmenthidden', (event) => {
        if(event.fragment.getAttribute('data-state') === 'elia'){
            timeline.reverse();
        }
    }, false);


})(Reveal, Expo, TimelineMax);
