const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.recent-blog-block-text p');
    var maxWords = 20;

    elements.forEach(function(element) {
        var text = element.textContent.trim();
        var words = text.split(/\s+/);

        if (words.length > maxWords) {
            var truncatedText = words.slice(0, maxWords).join(' ');
            element.textContent = truncatedText + '...';
        }
    });
});