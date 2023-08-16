export const initNav = function () {
// function initNav () {
    let navTimeline;

    function headerMenu() {
        const menuToggler = $('.menu-toggler');
        const target = menuToggler.data('target');
        const navBg = $(target).find('.navigation-bg');
        const navInner = $(target).find('.nav-inner');
        const navLinks = $(target).find('.nav-link');
        const animationTime = 0.3;
        const easeIn = Circ.easeIn;
        const easeOut = Circ.easeOut;
        const easeInOut = Circ.easeInOut;

        if (!navTimeline) {
            navTimeline = gsap.timeline({paused: true})
                .fromTo(
                    target,
                    animationTime,
                    {top: '-100%', ease: easeIn},
                    {
                        top: '0%',
                        ease: easeOut,
                        onReverseComplete: function () {
                            menuToggler.removeClass('active');
                        }
                    }
                )
                .staggerTo(
                    navBg,
                    animationTime,
                    {width: '100%', ease: easeInOut},
                    0.25
                )
                .fromTo(
                    navInner,
                    animationTime,
                    {right: '-100%', ease: easeIn},
                    {right: '0%', ease: easeOut}
                )
                .staggerFromTo(
                    navLinks,
                    animationTime,
                    {y: '50', opacity: 0},
                    {y: '0', opacity: 1},
                    0.05
                );
        }

        menuToggler.on('click', function () {
            if (menuToggler.hasClass('active')) {
                navTimeline.reverse();
                menuToggler.removeClass('active');
            } else {
                navTimeline.play();
                menuToggler.addClass('active');
            }
        });
    }

    $(document).ready(function () {
        headerMenu();
    });

    // Stop the animation when the page changes
    $(window).on('beforeunload', function () {
        if (navTimeline) {
            navTimeline.kill();
            navTimeline = null;
        }
    });
}

// initNav();