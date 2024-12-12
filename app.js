gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
//section 1 timeline
const section1Tl = gsap.timeline({
        trigger: '.section1',
        start: 'top top',
        end: '+=500',
        scrub: 1,
        yoyo: true,
        markers: true,
});

//Hi
section1Tl.from('.section1 h1 span:first-child', {
    x: '-100vw',
    opacity: 0,
    duration: 2,
    ease: 'power4.out'
},
"+=1");

//I am John
section1Tl.from('.section1 h1 span:nth-child(2)', {
    x: '100vw',
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
},
"-=1");

//rotating p
section1Tl
.from('.section1 p', {
    x: '0vw',
    transform: 'rotate(90deg) translateY(350%) translateX(40%)',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})

.to('.section1 p', {
    transform: 'rotate(0deg) ',
    opacity: 2,
    duration: 1,
    ease: 'power4.out'
},
"-=1");

//geek dog image
section1Tl
.from('.section1 img', {
    y: '100vh',
})

//section 2 timeline
const section2Tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
        end: '+=400',
        scrub: 1,
        yoyo: true,
        markers: true,
        toggleActions: 'restart pause resume none',
    }
});

//About
section2Tl.from('.section2 h2 span:first-child', {
    y: '-100vh',
    opacity: 0,
    duration: 2,
    ease: 'none',
    stagger: 0.2,
},
"+=1");

//Me
section2Tl.from('.section2 h2 span:nth-child(2)', {
    y: '-100vh',
    opacity: 0,
    duration: 2,
    ease: 'none',
    stagger: 0.2,
},
"-=1");

//p
section2Tl
.from('.section2 p', {
    transformOrigin: 'center center',
    rotateY: 90,
    opacity: 0,
    duration: 5,
    ease: 'power4.out',
}, "+=1");

//section 3 timeline
const section3Tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section3',
        start: 'center bottom',
        end: '+=700',
        scrub: 1,
        markers: true,
        toggleActions: 'restart pause resume none',
    }
});

//skills
section3Tl.from('.section3 h2', {
    scale: 3,
    duration: 2,
    ease: 'power4.out',
});

const spans = document.querySelectorAll('.section3 p span');

spans.forEach((span, index) => {
    section3Tl.fromTo(span, {
        y: '100vh',
        opacity: 0,
        backgroundColor: 'white',
        color: 'black'
    }, {
        y: '0vh',
        opacity: 1,
        duration: 2,
        ease: 'power4.out'
    }, "-=1.5")
});

//section 4 timeline
const section4Tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section3',
        start: 'center bottom',
        end: '+=600',
        scrub: true,
        markers: true,
        toggleActions: 'restart pause resume none',
    }
});

//section4 horizontally
section4Tl.to('.section4', {
    x: '100vw',
    duration: 3,
    ease: 'power4.out',
});