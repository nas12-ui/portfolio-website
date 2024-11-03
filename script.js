const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.onclick = function() {
    navLinks.classList.toggle('active');
}

const navLinkss = document.querySelectorAll('.nav-links a');
navLinkss.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetId === "#RESUME") {
            document.querySelector("#RESUME").style.display = "block";
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            document.querySelector("#RESUME").style.display = "none";
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        navLinks.classList.remove('active');
    });
});
