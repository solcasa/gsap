const pages = gsap.utils.toArray('#hscroll .page');
console.log(pages);

const MAIN = gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),
    scrollTrigger: {
        trigger: '#hscroll',
        start: 'top top',
        end: '+=3500',
        scrub: 0,
        pin: true,
        // markers: true,
        // snap: { // 공간단위로 스냅이 붙는다.
        //     snapTo: 1 / (pages.length - 1),
        //     inertia: true,
        //     duration: { min: 1, max: 1 },
        // }
    }
});

const ITM = gsap.utils.toArray('#hscroll .move');
console.log(ITM);

ITM.forEach((it, idx) => {
    gsap.to(it, {
        y: 200,
        scrollTrigger: {
            trigger: it,
            start: "left 80%",
            // end: "center 200px",
            containerAnimation: MAIN,
            markers: true,
        }
    })
})