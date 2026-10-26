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
const contactform = document.getElementById('contact-from');
if (contactfrom) {
    contactfrom.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name === "" || email === "" || message === "") {
            alert('لطفا همه فیلدها راپرکنید !');
        } else if (!email.includes('@')) {
            alert('(باید شامل@باشد)لطفا یک ایمیل معتبر وارد کنید .');
        } else {
            alert('(شبیه سازی)پیام شما با موفقیت ارسال شد! ');
            contactfrom.requestFullscreen();
        }
    });
}