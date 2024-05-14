document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');
    const mouse = {
        x: -100,
        y: -100
    }; // Set initial position off-screen
    let isMoving = false;
    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50
    });

    const updateCoordinates = e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        isMoving = true; // Mouse is moving
    }

    const stopMoving = () => {
        isMoving = false; // Mouse is not moving (e.g., after click)
    }

    window.addEventListener('mousemove', updateCoordinates);

    const x = localStorage.getItem('cursorX');
    const y = localStorage.getItem('cursorY');

    if (x !== null && y !== null) {
        gsap.set(cursor, {
            x: x,
            y: y
        });
    }

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('cursorX', mouse.x);
        localStorage.setItem('cursorY', mouse.y);
    });

    function animateCursor() {
        if (isMoving) {
            gsap.to(cursor, {
                duration: 0.5,
                x: mouse.x,
                y: mouse.y,
                ease: 'power2.out'
            });
        }
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    window.addEventListener('mousedown', stopMoving);
    window.addEventListener('mouseup', updateCoordinates); // Resume tracking after mouseup
});

jQuery(document).ready(function($) {
    // Add hover effect to all 'a' elements, excluding those inside '.recent-work-links'
    $('a').not('.recent-work-links a').hover(
        function() {
            $('#cursor').addClass('overlay').removeClass('explore-overlay'); // Remove explore-overlay class if present
        },
        function() {
            $('#cursor').removeClass('overlay');
        }
    );

    // Add class 'explore-overlay' to the cursor when hovering over 'a' elements inside '.recent-work-links'
    $('.splide__track').hover(
        function() {
            $('#cursor').addClass('explore-overlay').removeClass('overlay'); // Remove overlay class if present
        },
        function() {
            $('#cursor').removeClass('explore-overlay');
        }
    );

    $('.sub-form').hover(
        function() {
            $('#cursor').addClass('overlay');
        },
        function() {
            $('#cursor').removeClass('overlay');
        }
    );
});