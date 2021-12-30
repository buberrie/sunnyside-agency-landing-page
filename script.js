let navBar = document.getElementById('my-nav');
let icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    navBar.classList.toggle('active')
    icon.classList.toggle('active')
})
