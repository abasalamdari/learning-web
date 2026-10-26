const darkbtn = document.getElementById('dark-mode-btn');
darkbtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkbtn.textContent = 'حالت روز☀️'
    } else {
        darkbtn.textContent = 'حالت شب🌙';
    }
} );
const menubtn = document.getElementById('menu-btn');
const navmenu = document.querySelector('header nav');
menubtn,addEventListener('click', function() {
    navmenu.classList.toggle('active');
});