document.addEventListener('DOMContentLoaded', function () {
    const　hero = new HeroSlider('.swiper-container');
    hero.strat();

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.Twenn-animate-title', cb);
});
