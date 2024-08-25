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
            start: "-20px 50%",
            markers: true, // markers
        },
        x: 500,
        rotate: 360,
        duration: 4,
    })
})

