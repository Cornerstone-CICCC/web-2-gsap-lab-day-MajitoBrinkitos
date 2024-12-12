gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
//section 1 timeline
const section1Tl = gsap.timeline({
        trigger: '.section1',
        start: 'top top',
        end: '+=400',
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
});

//geek dog image
section1Tl
.from('.section1 img', {
    y: '100vh',
})