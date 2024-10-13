const playButton = document.getElementById('playButton');
const heart = document.getElementById('heart');
const path = heart.querySelector('path');
const hoverBox = document.getElementById('hoverBox');

playButton.addEventListener('click', () => {
    hoverBox.style.display = 'none';
    heart.style.visibility = 'visible';
    
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();
    path.style.transition = 'stroke-dashoffset 2s ease-in-out';
    path.style.strokeDashoffset = '0';

    setTimeout(() => {
        path.style.fill = 'red';
        path.style.transition = 'fill 1s ease-in-out';
    }, 2000);

    setTimeout(() => {
        heart.style.visibility = 'hidden';
        hoverBox.style.display = 'block';
        path.style.fill = 'none';
        path.style.strokeDashoffset = length;
        path.style.transition = 'none';
    }, 4000);
});