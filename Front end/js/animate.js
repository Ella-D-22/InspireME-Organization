// Button Hover Animation
document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('mouseover', () => {
      gsap.to(button, { duration: 0.3, scale: 1.1 });
    });
    
    button.addEventListener('mouseout', () => {
      gsap.to(button, { duration: 0.3, scale: 1 });
    });
  });
  
  // SVG Animation - Pulse Effect
  document.querySelectorAll('.animated-svg').forEach(svg => {
    gsap.fromTo(svg, { scale: 1 }, { scale: 1.05, duration: 1, repeat: -1, yoyo: true });
  });
  
  // General Fade-In Animation for Page Elements
  document.querySelectorAll('.fade-in').forEach(element => {
    gsap.from(element, { opacity: 0, duration: 1.5, ease: "power2.out" });
  });
  