const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que obviamente dirias que si, porque me amas mucho, ¿no? :3')
});

const noBtn = document.querySelector('#noBtn');

noBtn,addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    notBtn.style.Property('transform',`translate(-${randomX}%,-${randomY}%)`);
})