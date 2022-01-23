gsap.registerPlugin(ScrollTrigger);

gsap.to(".home-h1", {duration: 1, opacity: 1, delay: 0.3});
gsap.to(".home-h2", {duration: 2, delay: 2, opacity: 1});
gsap.to(".header", {duration: 1, delay: 3.5, opacity: 1});
//gsap.to(".project-item",{duration:1,width:100})

gsap.to(".projects-h1",
    {scrollTrigger: ".projects-h1", duration: 1, opacity: 1, delay: 0.3});

gsap.to(".about-h1", {
    scrollTrigger: ".about-h1",
    opacity: 1,
    duration: 1,
    delay: 0.7,
})

gsap.to(".about-h1-delay", {
    scrollTrigger: ".about-h1",
    opacity: 1,
    duration: 1,
    delay: 1.3,
})

// gsap.to(".skills-div", {
//     scrollTrigger: ".skills-div", // start the animation when ".box" enters the viewport (once)
//     opacity: 1,
//     duration: 1,
//     delay: 1
// });

gsap.to('.tech-div', {
    scrollTrigger: '.tech-div',
    opacity: 1,
    duration: 1,
    delay: 2
})

gsap.to(".about-h2", {
    scrollTrigger: ".about-h1", // start the animation when ".box" enters the viewport (once)
    opacity: 1,
    duration: 1,
    delay: 1.7
});
// gsap.to(".sticky-header-h1", {
//     scrollTrigger: ".skills-div",
//     color: 'black',
//     duration: 1,
//     delay: 0.3,
// },{
//     scrollTrigger: ".homesitePage",
//     color: 'white',
//     duration: 1,
//     delay: 0.3
// })

ScrollTrigger.create({
    trigger: ".skills-div",
    onEnter: () => gsap.to(".sticky-header-h1", {
        color: 'black',
        duration: 1,
        delay: 0.3,
    }),
    onEnterBack: () => gsap.to(".sticky-header-h1", {
        color: 'black',
        duration: 1,
        delay: 0.3,
    }),
    onLeave: () => gsap.to(".sticky-header-h1", {
        color: 'white',
        duration: 1,
        delay: 0.3,
    }),
    onLeaveBack: () => gsap.to(".sticky-header-h1", {
        color: 'white',
        duration: 1,
        delay: 0.3,
    }),
})

inc = 0
gsap.utils.toArray(".skills-entry").forEach(div =>{
    div.style.paddingLeft = (inc + '%')
    inc+=20
})

for(let i = 0; i < 5;i++){
    gsap.to(".skills-entry-" + i, {
        scrollTrigger: ".skills-div", // start the animation when ".box" enters the viewport (once)
        opacity: 1,
        duration: 1,
        delay: 2.5+i
    });
    // conosle.log(inc)
}