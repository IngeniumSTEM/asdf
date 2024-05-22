if (window.innerWidth > 600) {
    const nav = document.querySelector('.nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        // Toggle 'fixed' class based on scroll position
        if (window.scrollY > 350) { // Changed from 350 to 250
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }

        // Toggle 'hide' class based on scroll direction
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop && st > 150) { // Changed from 350 to 250
            nav.classList.add('hide');
        } else {
            nav.classList.remove('hide');
        }
        lastScrollTop = st <= 0 ? 0 : st;
    });
}


var screenWidth = window.innerWidth;
var threshold = 600;

window.addEventListener('resize', function() {
    var newWidth = window.innerWidth;

    // Check if the screen width crosses the threshold
    if ((screenWidth < threshold && newWidth >= threshold) || (screenWidth >= threshold && newWidth < threshold)) {
        location.reload();
    }

    // Update the stored screen width
    screenWidth = newWidth;
});