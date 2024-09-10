window.addEventListener('DOMContentLoaded' , ()=>{
    new Typed('#typed' , {
        strings: ['GSAP', 'ScrollTrigger' , 'Animations' , 'TypedJs'],
        typeSpeed: 100,
        loop: true,
    })

    gsap.registerPlugin(ScrollTrigger)

    gsap.set('.box-1' , {left: 50 , top: 30, rotate: 25, position: 'absolute'})
    gsap.set('.box-2' , {right: 20 , top: 70, position: 'absolute'})
    gsap.set('.box-3' , {left: 250 , top: 500, scale: .5, position: 'absolute'})

    gsap.to('.box-3' , {
        scrollTrigger:{
            trigger: '.box-3',
            start: 'center center',
            end: '+=500px',
            toggleActions: "play pause reverse pause",
            pin: true,
            scrub: true,
        },
        x: 200,
        rotate: 360,
        scale: 1,
        borderRadius: '10px'
    })

    gsap.to('.box-1' , {
        scrollTrigger: {
            trigger: document.querySelector('header'),
            start: '10% top',
            end: 'center top',
            markers: true,
        },
        right: 200,
        top: '70vh',
        left: 'unset',
        rotate: 360,
    })

    gsap.to('.box-2' , {
        scrollTrigger: {
            trigger: document.querySelector('header'),
            start: '10% top',
            end: 'center top',
            markers: true,
            scrub: 1,
        },
        left: 200,
        top: '60vh',
        right: 'unset',
        rotate: 888,
    })
})

