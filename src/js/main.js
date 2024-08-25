document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.c' , {
        // scrollTrigger: '.c',
        scrollTrigger:{
          trigger: ".c",
          // toggleActions: "play none none none",  // default // triggerActions: "onEnter onLeave onEnterBack onLeaveBack"
          // toggleActions: "play reverse play reverse",
            toggleActions: "restart pause resume pause",
        //     start and end => start : "top bottom" [trigger position] [scroller position]
        //     start: "top center",
            start: "top bottom",
            // end: "bottom center",
            end: "top 100px",
            // scrub: true, // or 1 2 3 4 => time
            scrub: 2,
            // pin: true,
            pin: ".b",
            markers: true, // markers
        },
        x: 300,
        rotate: 360,
        ease: "none",
        duration: 3,
    })
})

