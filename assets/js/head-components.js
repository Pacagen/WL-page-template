// head-components.js
// FOUC prevention for [WEBSITEURL]
// Include in <head> before other scripts

(function() {

    function initFOUCPrevention() {
        if (!document.querySelector('#fouc-prevention')) {
            const style = document.createElement('style');
            style.id = 'fouc-prevention';
            style.textContent = `
                body {
                    visibility: hidden;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }
                .no-js body {
                    visibility: visible;
                    opacity: 1;
                }
            `;
            document.head.insertBefore(style, document.head.firstChild);
        }

        if (!document.documentElement.classList.contains('js')) {
            document.documentElement.className += ' js';
        }
    }

    // Replace [CONVERGE_PIXEL_URL] with the full https script URL before launch.
    // Until then the pixel does not load, so a fork cannot send traffic to another site.
    var CONVERGE_PIXEL_SRC = '[CONVERGE_PIXEL_URL]';

    function initConvergeTracking() {
        if (window.cvg) return;

        var c = window.cvg = function () {
            c.process ? c.process.apply(c, arguments) : c.queue.push(arguments);
        };
        c.queue = [];

        if (!/^https:\/\//.test(CONVERGE_PIXEL_SRC)) {
            c.process = function () {};
            return;
        }

        var script = document.createElement('script');
        script.src = CONVERGE_PIXEL_SRC;
        script.async = true;
        document.head.appendChild(script);

        cvg({ method: "track", eventName: "$page_load" });
    }

    

    function initHeadComponents() {
        initFOUCPrevention();
        initConvergeTracking();
    }

    // cvg must be defined immediately so tracking.js can call it safely.
    // FOUC styles are DOM-safe to inject at parse time too.
    initHeadComponents();
})();
