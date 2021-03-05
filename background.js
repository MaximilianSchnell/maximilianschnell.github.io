const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

class Particle {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx
        this.vy = vy;
    }
    
    draw(particlesArray) {
        for (let i = 0; i < particlesArray.length; i++) {
            let dist_sq = Math.pow(this.x - particlesArray[i].x, 2) + Math.pow(this.y - particlesArray[i].y, 2);
            if (dist_sq < Math.pow(300, 2)) {
                let lineWidth = Math.min((Math.pow(300, 2) - dist_sq) / Math.pow(300, 2), 1);
                let alpha = Math.ceil(lineWidth) / lineWidth;
                ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
                ctx.stroke();
            }
        }
    }

    update(particlesArray) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy;
        }
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 20000;
    for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let vx = 1 * (Math.random() - 0.5);
        let vy = 1 * (Math.random() - 0.5);

        particlesArray.push(new Particle(x, y, vx, vy));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(particlesArray);
    }
}

init();
animate();