burger = document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navbarbrand =document.querySelector('.navbars');
nav=document.querySelector('.nav');
containerFluid=document.querySelector('.container-fluid');
navbarHeader=document.querySelector('.navbar-header');

burger.addEventListener('click',()=>{
    nav.classList.toggle('v-class-resp');
    navbarbrand.classList.toggle('v-class-resp');
    containerFluid.classList.toggle('h-nav-resp');
    navbarHeader.classList.toggle('h-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})

