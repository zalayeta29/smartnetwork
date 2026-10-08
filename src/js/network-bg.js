/**
 * SmartNetwork TJKT - Subtle Network Node Background Animation
 */

export function initNetworkBackground() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg-network-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -1;
    opacity: 0.55;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let animId = null;

  // Reduced motion query
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.min(45, Math.floor((width * height) / 25000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // If reduced motion is requested, render static subtle nodes once
    if (reducedMotionQuery.matches) {
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, 0.2)`;
        ctx.fill();
      });
      return;
    }

    const maxDist = 130;

    // Connect close particles with delicate network lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Render & update particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}
