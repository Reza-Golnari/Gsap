// ease: back , elastic , bounce ,...
// gsap.to('.box' , {duration: 2, x: "80vw", backgroundColor: "#333", border: "2px solid blue", rotate: 180, borderRadius: "20%"})
// gsap.to('.box' , {duration: 3, x: ()=> window.innerWidth - 200, backgroundColor: "#333", repeat: 4, yoyo: true, border: "2px solid blue", rotate: 180, borderRadius: "20%" , ease: "bounce"})

// const canvas = document.querySelector("#canvas");
//
// canvas.width = window.innerWidth / 2;
// canvas.height = window.innerHeight / 2;
//
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = '#28a92b';
//
// const position = {x: 0 , y: 0}
//
// function draw(){
//     ctx.clearRect(0 , 0 , canvas.width , canvas.height);
//     ctx.fillRect(position.x , position.y , 100 , 100);
// }
//
// gsap.to(position , {
//     x: 200,
//     y: 200,
//     duration: 5,
//     onUpdate: draw
// })

// gsap.from(".box" , {x: 500, duration: 3})
// gsap.fromTo(".box" , {x:-300,y:-200,duration: 3} , {x:500 ,y:100, rotation: 360,duration: 2})
// gsap.set('.box', {x:500 , y:500,delay:2})

// gsap.to('.box', {
//     x: 200,
//     repeat: 4,
//     duration: 2,
//     yoyo: true,
//     ease: "steps(20)",
//     onComplete: ()=> console.log('hi')
// }
// )

// gsap.to('.box', {
//     duration:2.5,
//     ease: `rough({
//     template:none.out,
//     strength: 1,
//     points:20,
//     taper:none,
//     randomize:true,
//     clamp:false
// })`,
// y: 250
// });