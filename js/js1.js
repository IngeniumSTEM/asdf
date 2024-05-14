window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

    function animateHoverScramble(textContainer, newText) {
        gsap.to(textContainer, {
            scrambleText: {
                text: newText,
                chars: "ABC*abc*123!*",
                speed: 1
            },
            ease: Linear.easeNone,
            duration: 0.5
        });
    }

    // SplitText animation
    gsap.utils.toArray(".text-container").forEach(function(textContainer, index) {
        var newText = textContainer.textContent.trim();

        // Calculate delay based on index to stagger animations
        var delay = index * 0.2; // Adjust delay as needed
        var duration = 1.2; // Duration for SplitText animation

        if (!textContainer.closest('.cta-text-block')) {
            gsap.from(textContainer, {
                scrollTrigger: textContainer,
                duration: duration,
                yPercent: 200,
                ease: "power4.out",
                skewY: 6,
                opacity: 0,
                onComplete: function() {
                    // ScrambleText animation
                    gsap.to(textContainer, {
                        scrambleText: {
                            text: newText,
                            chars: "ABC*abc*123!*", // Set scramble complexity with custom characters
                            speed: 1 // Set scramble speed
                        },
                        ease: Linear.easeNone,
                        duration: 0.5 // Duration for ScrambleText animation
                    });
                },
                delay: delay // Apply staggered delay to the SplitText animation
            });
        }

        // Hover animation
        textContainer.addEventListener("mouseover", function() {
            animateHoverScramble(textContainer, newText);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function showTitleAndAnimate(title) {
        gsap.registerPlugin(SplitText, ScrollTrigger);

        const childSplit = new SplitText(title, {
            type: "lines", // Split by lines
            linesClass: "split-child",
        });

        const parentSplit = new SplitText(title, {
            type: "lines", // Split by lines
            linesClass: "split-parent",
        });

        gsap.from(childSplit.lines, {
            scrollTrigger: {
                trigger: title,
                start: "top 120%",
                end: "bottom 100%",
                toggleActions: "play none none none",
            },
            duration: 1.2,
            yPercent: 200,
            ease: "power4.out",
            skewY: 6,
            stagger: 0.15,
            opacity: 0 // Start from opacity 0 to animate in
        });
    }

    const headings = gsap.utils.toArray("h2, h3, h4, p, .footer-menu .link");

    headings.forEach(function(title) {
        title.style.visibility = "hidden";
    });

    headings[0].style.visibility = "visible";
    showTitleAndAnimate(headings[0]);

    for (let i = 1; i < headings.length; i++) {
        setTimeout(function() {
            headings[i].style.visibility = "visible";
            showTitleAndAnimate(headings[i]);
        }, 0 * i);
    }
});


gsap.from(".splide__slide", {
    xPercent: 180,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".splide",
        start: "top 120%", // Adjusted to start animation earlier
        end: "bottom 100%", // Change this value as needed
    }
});

const dbwRowImages = document.querySelectorAll('.dbw-row-2 img');

dbwRowImages.forEach((img) => {
    gsap.fromTo(img, {
        clipPath: 'inset(30% 30% 30% 30%)', // Initial clip path
    }, {
        clipPath: 'inset(0% 0% 0% 0%)', // Final clip path
        duration: 1, // Duration of the animation
        ease: 'power1.out', // Easing function
        scrollTrigger: {
            trigger: img.parentElement, // Use the parent element as the trigger
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: 1.1
        }
    });
});


const projectBoxes = document.querySelectorAll('.recent-work-block');

projectBoxes.forEach((box, index) => {
    const img = box.querySelector('img');

    gsap.fromTo(img, {
        y: 100,
        opacity: 0,
    }, {
        opacity: 1,
        y: 0,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: box,
            start: 'top 100%',
            end: 'bottom 100%',
            scrub: 1
        }
    });
});

const whyBulletElements = document.querySelectorAll('.why-bullet');

whyBulletElements.forEach((element) => {
    gsap.fromTo(element, {
        clipPath: 'inset(0% 0% 100% 0%)', // Initial clip path
    }, {
        clipPath: 'inset(0% 0% 0% 0%)', // Final clip path
        duration: 1, // Duration of the animation
        ease: 'power1.out', // Easing function
        scrollTrigger: {
            trigger: element.parentElement, // Use the parent element as the trigger
            start: 'top 100%',
            end: 'bottom 80%',
        }
    });
});



gsap.to(".services-page .inner-page-intro", {
    rotation: 360,
    scrollTrigger: {
        trigger: ".services-page .inner-page-intro",
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true
    }
});