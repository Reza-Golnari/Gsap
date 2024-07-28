// ease: back , elastic , bounce ,...
// gsap.to('.box' , {duration: 2, x: "80vw", backgroundColor: "#333", border: "2px solid blue", rotate: 180, borderRadius: "20%"})
// gsap.to('.box' , {duration: 3, x: ()=> window.innerWidth - 200, backgroundColor: "#333", repeat: 4, yoyo: true, border: "2px solid blue", rotate: 180, borderRadius: "20%" , ease: "bounce"})

const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;

const ctx = canvas.getContext('2d');
ctx.fillStyle = '#28a92b';

const position = {x: 0 , y: 0}

function draw(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
    ctx.fillRect(position.x , position.y , 100 , 100);
}

gsap.to(position , {
    x: 200,
    y: 200,
    duration: 5,
    onUpdate: draw
})