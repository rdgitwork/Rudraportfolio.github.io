$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Function to open the modal
        function openProjectModal(modalId) {
            console.log("Opening modal: " + modalId); // This should print to the console
            document.getElementById(modalId).style.display = "block";
        }


        // Function to close the modal
        function closeProjectModal(modalId) {
            document.getElementById(modalId).style.display = "none";
        }

        // Event listener to close the modal if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('project-modal')) {
                event.target.style.display = "none";
            }
        });


        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });



    // Function to open the modal
    function openProjectModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    // Function to close the modal
    function closeProjectModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Close the modal if the user clicks anywhere outside of it
    window.onclick = function(event) {
        if (event.target.className === 'project-modal') {
            event.target.style.display = "none";
        }
    }

    document.getElementById('hireMeButton').onclick = function() {
        var emailReveal = document.getElementById('emailReveal');
        emailReveal.style.display = 'block'; // Show the email address
    };

    function copyEmail() {
        var emailAddress = document.getElementById('emailAddress').textContent;
        navigator.clipboard.writeText(emailAddress).then(() => {
            alert('Email address copied to clipboard. Mail me at ' + emailAddress);
        });
    }


    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Productivity", "Consistency", "Curiosity", "Coding", "Balance"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Student", "Curious-Learner", "Fast-Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
