const body = document.body;
const changeBgBtn = document.querySelector('.change-background');

changeBgBtn.addEventListener('click', () => {
    if (body.classList.contains('halloween')) {
        body.classList.remove('halloween');
    } else {
        body.classList.add('halloween');
    }
});