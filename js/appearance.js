const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("shown", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    });
}, {
    threshold: 0.01,
});

elements = document.querySelectorAll('.hidden');

elements.forEach(element => {
    observer.observe(element);
});