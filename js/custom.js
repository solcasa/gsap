// window.addEventListener('DOMContentLoaded', function () {
//     gsap.to('.box', {
//         x: 1000,
//     })
// }) 이거 대신 defer 씀

const M = gsap.to('.box', {
    scrollTrigger: {
        trigger: '.test',
        start: 'center center', //앞: start, 뒤: scroller-start
        // markers: true,
        scrub: true,
        pin: true,
    },
    x: 150,
    y: 500,
    rotation: 360,
});


const L = gsap.from('.left', {
    scrollTrigger: {
        trigger: '.test2',
        start: 'center center',
        markers: true,
        scrub: 1,
        pin: true,
    },
    x: -500,
    opacity: 0,
});

// const LNK = document.querySelector('.gnb a');
// LNK.addEventListener('click', function (e) {
//     e.preventDefault();
//     const T = e.target.hash;
//     console.log(T)
//     //여기까지 쓰면 달까지 못가게 막아놓는것이고
//     gsap.to(window, {
//         scrollTo: { y: T, offsetY: 100 }
//     })
// })


const LINK = document.querySelectorAll('.gnb a');
const LINK2 = gsap.utils.toArray('.gnb a');
const NUM = document.querySelector('.num');
console.log(LINK, LINK2);


LINK.forEach((it, idx, arry) => {
    it.addEventListener('click', (e) => {
        e.preventDefault();
        const TG = e.target.hash;
        console.log(TG);
        gsap.to(window, {
            scrollTo: { y: TG, offsetY: 100 },
            ease: 'bounce',
        });

        NUM.innerHTML = idx;
    })
})