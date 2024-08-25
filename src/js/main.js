document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.b' , {
        // scrollTrigger: '.c',
        scrollTrigger:{
          trigger: ".a",
          // toggleActions: "play none none none",  // default // triggerActions: "onEnter onLeave onEnterBack onLeaveBack"
          // toggleActions: "play reverse play reverse",
            toggleActions: "restart pause resume pause",
        //     start and end => start : "top bottom" [trigger position] [scroller position]
        //     start: "top center",
            start: "top 20px",
            // end: "bottom center",
            end: "bottom 80%",
            endTrigger: '.c',
            markers: true, // markers
        },
        x: 500,
        rotate: 360,
        duration: 4,
    })
})

