const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const startBtn = document.getElementById('startBtn');

let currentCard = 0;

function showCard(index) {
  // Stop all audio
  cards.forEach(card => {
    card.classList.remove('active');
    const audio = card.querySelector('audio');
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const video = card.querySelector('video');
    if (video) { 
      video.pause();
      video.currentTime = 0;
    }
  });

  cards[index].classList.add('active');

  const audio = cards[index].querySelector('audio');
  const video = cards[index].querySelector('video');

  // Only play audio if card is not a video card
  if (audio && !video) {
    setTimeout(() => audio.play(), 1500);
  }
  if(video) {
    video.play();
  }
  currentCard = index;
}

startBtn.addEventListener('click', () => {
  showCard(1);
});

nextBtn.addEventListener('click', () => {
  if (currentCard < cards.length - 1) showCard(currentCard + 1);
});

prevBtn.addEventListener('click', () => {
  if (currentCard > 0) showCard(currentCard - 1);
});
