const btn=document.getElementsByClassName('btn_bar')[0];
const navbar=document.getElementsByClassName('navbar_links')[0];


btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});

