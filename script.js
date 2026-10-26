const darkbtn = document.getElementById('dark-mode-btn');
if (localStorage.getItem('theme')==='dark') {
    document.body.classList.add('dark-mode');
    if(darkbtn) darkbtn.textContent = 'حالت روز☀️';
}
if (darkbtn) {
    darkbtn.addEventListener('click',function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        darkbtn.textContent = 'حالت روز☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkbtn.textContent = 'حالت شب';
        localStorage.setItem('theme','light');
    }
    });
}
const menubtn = document.getElementById('menu-btn');
const navmenu = document.querySelector('header nav');
menubtn,addEventListener('click', function() {
    navmenu.classList.toggle('active');
});