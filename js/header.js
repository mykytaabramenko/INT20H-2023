header = document.querySelector('.header');
topLogo = document.querySelector('.top__logo');
    

document.addEventListener("scroll", (e) => {
    
    if(header.getBoundingClientRect().bottom >= topLogo.getBoundingClientRect().top){
        header.style.backgroundColor = '#000816';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})