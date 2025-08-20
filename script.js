document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});