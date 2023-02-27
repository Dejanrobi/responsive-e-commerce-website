
// selecting the hamburger menu
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeIcon = document.getElementById('close-icon');



// adding an event listener on the bar
bar.addEventListener('click', ()=>{
    nav.classList.add('active')
})

closeIcon.addEventListener('click', ()=>{
    nav.classList.remove('active')
})
