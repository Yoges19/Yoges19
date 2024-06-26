// Add a nice animation to the sorry text
const sorryText = document.getElementById('sorry-text');
sorryText.addEventListener('mouseover', () => {
    sorryText.style.animation = 'sorry-animation 5s infinite';
});