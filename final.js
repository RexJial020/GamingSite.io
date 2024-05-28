document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    
    // Try to play the video
    video.play().then(() => {
        console.log('Video is playing');
    }).catch(error => {
        console.error('Autoplay was prevented:', error);
    });
});

const container = document.getElementById('fallingOrbsContainer');

function createOrb() {
  const orb = document.createElement('div');
  orb.classList.add('orb');
  orb.style.width = `${Math.random() * 10 + 10}px`;
  orb.style.height = orb.style.width;
  orb.style.left = `${Math.random() * 100}%`;
  orb.style.animationDuration = `${Math.random() * 5 + 5}s`;
  container.appendChild(orb);

  // Removes the orb after it completes its animation
  orb.addEventListener('animationend', () => {
    orb.remove();
  });
}

// Create orbs continuously
setInterval(createOrb, 500);

