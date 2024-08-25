document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.defaults({ease: "none", duration: 2})
    let tl = gsap.timeline();
    tl.from('.orange' , {xPercent: -100})
        .from('.blue' , {xPercent: 100})
        .from(".green" , {yPercent: -100})
        .from(".pink" , {yPercent: 100})

    ScrollTrigger.create({
        animation: tl,
        trigger: document.body,
        start: 'top top',
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    })
})

