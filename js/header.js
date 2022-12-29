header = document.querySelector('.header');
runningString = document.querySelector('.running-string');
    
console.log(header);

document.addEventListener("scroll", (e) => {
    
    if(header.getBoundingClientRect().top >= runningString.getBoundingClientRect().top - 100){
        header.style.backgroundColor = '#000816';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})