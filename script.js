const burger = document.getElementById('burger')
const navUl = document.getElementById('nav-ul')
const logoImg = document.getElementById('logo-img')

burger.addEventListener('click',()=>{
    navUl.classList.toggle('show');
})

logoImg.addEventListener('click',()=>{
    navUl.classList.toggle('hide');
})