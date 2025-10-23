const music = document.getElementById('bgMusic');
const btn = document.getElementById('apologyBtn');
const revealMsg = document.getElementById('reveal');

btn.addEventListener('click', () => {
  // Play the audio only once user clicks the button
  if (music.paused) {
    music.volume = 0.6; // set pleasant volume level
    music.play().catch(err => console.log('Audio blocked:', err));
  }

  // Reveal heartfelt message
  revealMsg.classList.remove('hidden');
  document.body.style.background = 'linear-gradient(to bottom right, #ff9a9e, #fad0c4)';
});
