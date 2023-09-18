Splitting();

gsap.from('.char', {
    rotateY: 180,
    opacity: 0,
    stagger: {
        amount: 1,
    }, 
    duration: 1,
    ease: 'power3.Out',
})

if (window.matchMedia('(max-width: 767px)').matches) {
    function Splitting() {
        return false;
    }
} else {}

