const anchorLinks = document.querySelectorAll('a[href^="#"]');


anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);

        document.querySelector('#' + targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    });
});
