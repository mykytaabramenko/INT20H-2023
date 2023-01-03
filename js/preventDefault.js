document.querySelector('.top__redirect-button').addEventListener('click', function(e){
    e.preventDefault();
    let anchor = this.href.split('#')[1];
    let body = document.documentElement || document.body;
    body.scrollTop = document.getElementById(anchor).offsetTop; 
})