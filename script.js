const soundtrack = document.getElementById('soundtrack');

document.addEventListener('DOMContentLoaded', () => {
    soundtrack.play();
});

document.addEventListener('click', () => {
    if (soundtrack.paused) {
        soundtrack.play();
    }
});