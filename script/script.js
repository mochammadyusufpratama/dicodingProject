// Hamburger Menu
const ham = document.querySelector('#hamburger')
const hamMenu = document.querySelector('#hamburger-menu')

ham.addEventListener('click', function () {
    ham.classList.toggle('hamburger-active')
    hamMenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if (e.target != ham && e.target != hamMenu) {
        ham.classList.remove('hamburger-active')
        hamMenu.classList.add('hidden');
    }
});