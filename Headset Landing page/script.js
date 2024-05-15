document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Sticky navbar
    function toggleStickyNavbar() {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    }
    window.addEventListener('scroll', toggleStickyNavbar);
    toggleStickyNavbar(); // Initial check

    // Scroll-up button
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 300) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Toggle menu
    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinksArray = navLinks.querySelectorAll('a');
    navLinksArray.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
});

// JavaScript for tab functionality
document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    // Show the initial active tab content (Skills)
    tabContents[0].classList.add('active-tab');

    tabLinks.forEach((tabLink, index) => {
        tabLink.addEventListener('mouseover', () => {
            // Hide all tab contents
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active-tab');
            });

            // Show the corresponding tab content on hover
            tabContents[index].classList.add('active-tab');
        });
    });
});

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});

