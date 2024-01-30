function drum(e) {
 sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if(!sound) return;

 key.classList.add('playing');
 sound.currentTime=0;
 sound.play();
}

function endAnimation(e) {
 if (e.propertyName !== 'transform') return;
 e.target.classList.remove('playing');
 // checkForStuck();
}

function checkForStuck() {
 keys.forEach(k => {
  if(k.className.search('playing') !== -1) {
   k.classList.remove('playing');
  }
 })
}

keys = document.querySelectorAll('.key');
keys.forEach(e => e.addEventListener('transitionend', endAnimation));
window.addEventListener('keydown', drum);