function slider1() {
    let splides = $('.slider1');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            perPage: 3,
            perMove: 1,
            focus: 0,
            type: 'slide',
            gap: '5vw',
            arrows: 'slider',
            pagination: 'slider',
            speed: 1000,
            dragAngleThreshold: 60,
            autoWidth: false,
            rewind: false,
            rewindSpeed: 1000,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: true,
        }).mount();
    }
}
slider1();


$(document).ready(function() {
    $("body").addClass("body-loaded");
    gsap.set(".page", {
        y: 300
    });
    gsap.to(".page", {
        y: 0,
        duration: 1.7,
        delay: -0.45,
        ease: "expo.inOut"
    });
    gsap.set("#cursor", {
        opacity: 0,
        scale: 0
    });
    gsap.to("#cursor", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut"
    });
    $("#cursor").css("display", "block");
});

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        $("body").addClass("body-loaded");
    }
});

$("a").click(function(event) {
    var url = $(this).attr("href");
    if (url.startsWith("#") || url.startsWith("mailto:") || url.startsWith("https://wa.me")) {
        return;
    }
    event.preventDefault();
    $("body").addClass("body-loader");

    gsap.to("#page", {
        opacity: 0.8,
        duration: 0.5,
        ease: "power2.inOut"
    });

    gsap.to("#cursor", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut"
    });
    setTimeout(() => window.location.href = url, 1000);
});


jQuery(document).ready(function() {

    // Smooth scrolling for anchor links within the same page
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
        var target = jQuery(this.hash);
        if (target.length) {
            jQuery('html, body').animate({
                scrollTop: target.offset().top
            }, 500, 'swing');
            return false;
        }
    });

    // Smooth scrolling for anchor links coming from a different page
    var hash = window.location.hash;
    if (hash.length > 0) {
        jQuery(window).on('load', function() {
            var target = jQuery(hash);
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, 'swing');
            }
        });
    }

});