window.addEventListener('DOMContentLoaded' , ()=>{
    new Typed('#typed' , {
        strings: ['GSAP', 'ScrollTrigger' , 'Animations' , 'TypedJs'],
        typeSpeed: 100,
        loop: true,
    })

    gsap.registerPlugin(ScrollTrigger)
    const xSections = gsap.utils.toArray('#xContainer section')

    gsap.set('.box-1' , {left: 50 , top: 30, rotate: 25, position: 'absolute'})
    gsap.set('.box-2' , {right: 20 , top: 70, position: 'absolute'})
    gsap.set('.box-3' , {left: 250 , top: 500, scale: .5, zIndex: 9, position: 'absolute'})

    gsap.to('.box-3' , {
        scrollTrigger:{
            trigger: '.box-3',
            start: 'center center',
            end: ()=> '+=' + 1000 * (xSections.length - 1) + 'vh',
            toggleActions: "play pause reverse pause",
            pin: true,
            scrub: true,
        },
        x: 200,
        rotate: 720,
        scale: 1,
        borderRadius: '10px'
    })

    gsap.to('.box-1' , {
        scrollTrigger: {
            trigger: document.querySelector('header'),
            start: '10% top',
            end: 'center top',
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
            scrub: 1,
        },
        left: 200,
        top: '60vh',
        right: 'unset',
        rotate: 888,
    })

    gsap.to(xSections , {
        xPercent: -100 * (xSections.length - 1),
        ease: "none",
        scrollTrigger:{
            trigger: '#xContainer',
            pin: true,
            scrub: 1,
            snap: 1 / (xSections.length - 1),
            end: () => "+=" + document.querySelector('#xContainer').offsetWidth
        }
    })

})

