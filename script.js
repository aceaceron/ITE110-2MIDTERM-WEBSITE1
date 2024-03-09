document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

const mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    mybutton.style.display = (window.scrollY > 20) ? "block" : "none";
}

function topFunction() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
