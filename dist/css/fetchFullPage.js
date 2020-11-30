

new fullpage('#fullpage', {
    licenseKey: '***************************',
    autoscrolling: true,
    navigation: true,
    fixedElements: '.footer-links, .footer-label, .nav-btn, .lang-select, #dropdown',
    anchors: ['s1', 's2', 's3', 's4'],
    onLeave: (origin,destination,direction) => {
        const timeline = new TimelineMax({delay: 0.5});
        const section = destination.item;
        const title = section.querySelector('h1');
        const mailMe = section.querySelector('.fa-paper-plane')
        timeline.fromTo(title,0.5,{opacity: 0},{ opacity: 1});
        timeline.fromTo('#arrow',0.3,{opacity: 0},{ opacity: 1});
        timeline.fromTo('#github-label',0.3,{opacity: 0},{ opacity: 1});
        timeline.fromTo('.fa-paper-plane', {opacity: 0},{opacity: 1})
    },
});

window.onload = function() {

    let timeline = new TimelineMax({delay: 0.5});
    const section = destination.item;
    const title = section.querySelector('h1');
    const secondTitle = section.querySelector('h2');
    timeline.fromTo(title,0.5,{opacity: 0},{ opacity: 1});
    timeline.fromTo(secondTitle,0.5,{opacity: 0},{ opacity: 1});
}