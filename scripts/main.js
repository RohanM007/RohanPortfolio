document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.id = "interactive-bg";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            // Define the bounding box around the text (adjust based on your text size)
            let textX = canvas.width / 2 - 200; // Center text
            let textY = canvas.height / 3; 
            let textWidth = 400;
            let textHeight = 100;

            // Collision detection
            if (
                this.x > textX &&
                this.x < textX + textWidth &&
                this.y > textY &&
                this.y < textY + textHeight
            ) {
                // Reverse direction to simulate bouncing
                this.speedX *= -1;
                this.speedY *= -1;
            }

            this.x += this.speedX;
            this.y += this.speedY;
            
            // Keep particles within canvas bounds
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }


        draw() {
            ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         // Update and draw particles
         particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
