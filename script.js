/*==================== Toggle Icon Navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== Scroll Sections Active Link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <= offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document
                    .querySelector('header nav a[href*="' + id + '"]')
                    .classList.add('active');
            });
        }
    });

    /*==================== Sticky Navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== Remove Toggle Icon and Navbar When Clicking Navbar Link ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== Scroll Reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Define animations for different elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom',
});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*==================== Typed.js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ["Frontend Development"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});


// about section experience 
document.getElementById('read-more-btn').addEventListener('click', function () {
    const experienceSection = document.getElementById('experience');
    // Toggle visibility
    if (experienceSection.style.display === 'none' || experienceSection.style.display === '') {
        experienceSection.style.display = 'block';
        this.textContent = 'Read Less'; // Change button text
    } else {
        experienceSection.style.display = 'none';
        this.textContent = 'Read More'; // Revert button text
    }
});



// Get all buttons with the class "open-modal"
const openModalButtons = document.querySelectorAll('.open-modal');

// Get all modals
const modals = document.querySelectorAll('.modal');

// Get all close buttons
const closeModalButtons = document.querySelectorAll('.close-modal');

// Open the modal
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close the modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none'; // Hide the modal
    });
});


// Close the modal when clicked outside the modal content
window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
