const btn = document.getElementById('theme-btn');
const body = document.body;
const colors = ['#ffe4e1','#e0ffff','#f0e68c','#d8bfd8','#f5d'] 
let colorIndex = 0;
btn.addEventListener('click', function() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    body.style.backgroundColor = colors[colorIndex];
});