import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const particleCount = 65; // Balanced for style + high performance
    const connectionDistance = 100;
    
    const mouse = {
      x: null,
      y: null,
      radius: 120, // Mouse interaction boundary
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle Class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(168, 85, 247, 0.4)' : 'rgba(6, 182, 212, 0.4)'; // purple or cyan
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce back from boundaries
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

        // Mouse interaction (repel effect)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxForce = 0.8;
            const force = (mouse.radius - distance) / mouse.radius;
            
            this.x += forceDirectionX * force * maxForce;
            this.y += forceDirectionY * force * maxForce;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Floating symbols / backend texts / binary fragments
    const floatingItems = [];
    const symbolPool = ['∑','∫','π','∞','√','Δ','Ω','λ','μ','σ'];
    const equations = ['ws4ddf45g88d5adasgfgh',
  'a7f92bc3e4d8f1c6',
  '8x2df9a1b4e7c5',
  'jwt.eyJhbGciOiJIUzI1Ni',
  'f3a9d1c8e7b2',
  '0x7FFDAA45B91C'];
    const progSymbols = ['{}','<>','[]','()','==','===','=>','&&','||'];
    const backendWords = ['JWT','REST API','.NET','SQL','Docker','Redis','LINQ','Entity Framework','Microservices','Clean Architecture'];
    const binaries = ['010101','101010','001101','111000','110011','000111'];
    

    const randFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const createFloating = (count = 40) => {
      for (let i = 0; i < count; i++) {
        const poolChoice = Math.random();
        let content = '';
        if (poolChoice < 0.25) content = randFrom(symbolPool);
        else if (poolChoice < 0.45) content = randFrom(equations);
        else if (poolChoice < 0.7) content = randFrom(progSymbols);
        else if (poolChoice < 0.9) content = randFrom(backendWords);
        else content = randFrom(binaries);

        floatingItems.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 18 + 8,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.7 + 0.2,
          content,
          layer: Math.random() < 0.5 ? 0.6 : 1.2
        });
      }
    };

    createFloating(48);

    // Draw connecting lines between close particles
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Gradient lines between purple and cyan colors
            const grad = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );
            grad.addColorStop(0, `rgba(168, 85, 247, ${opacity})`);
            grad.addColorStop(1, `rgba(6, 182, 212, ${opacity})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Draw floating textual elements and nebula glows
    const drawFloating = () => {
      floatingItems.forEach((it) => {
        // slight parallax on mouse
        const mx = mouse.x ? (mouse.x - canvas.width / 2) * 0.0006 * it.layer : 0;
        const my = mouse.y ? (mouse.y - canvas.height / 2) * 0.0006 * it.layer : 0;

        it.x += it.speedX + mx;
        it.y += it.speedY + my;

        if (it.x < -50) it.x = canvas.width + 50;
        if (it.x > canvas.width + 50) it.x = -50;
        if (it.y < -50) it.y = canvas.height + 50;
        if (it.y > canvas.height + 50) it.y = -50;

        ctx.save();
        ctx.globalAlpha = it.opacity * 0.9;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(168,85,247,0.9)' : 'rgba(6,182,212,0.9)';
        ctx.shadowColor = 'rgba(168,85,247,0.6)';
        ctx.shadowBlur = 8;
        ctx.font = `${it.size}px ui-sans-serif, system-ui, -apple-system, "Segoe UI"`;
        ctx.fillText(it.content, it.x, it.y);
        ctx.restore();
      });
    };

    // Nebula glows / stars
    const nebulas = Array.from({length: 5}).map(()=>({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height*0.6,
      r: Math.random()*160 + 80,
      color: Math.random()>0.5?'#6EE7B7':'#C084FC',
      a: Math.random()*0.06+0.03
    }));

    const drawNebula = () => {
      nebulas.forEach(n => {
        ctx.save();
        ctx.globalAlpha = n.a;
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gentle grid layout lines for background depth
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.003)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawLines();
      drawFloating();
      drawNebula();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleBackground;
