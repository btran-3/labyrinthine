var iconRotate = $('.icon-rotate');
if (iconRotate.length != 0) {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop(),
		maxScroll = $(document).height()-$(window).height();
		iconRotate.css({transform: 'rotate(-' + (180 * scroll/maxScroll) + 'deg)'});
	});
}


//alt version, but not based on scroll percentage
/*
;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

var largecircle = document.getElementById("largecircle");

// to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

window.addEventListener("optimizedScroll", function() {
    largecircle.style.transform = "rotate(-"+window.pageYOffset*.4+"deg)";
});
*/
