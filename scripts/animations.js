if (window.innerWidth < window.innerHeight) {
    document.querySelector('.outer-wrapper').style = `display:none`;
} else {
    document.querySelector('.mobile-info').style = `display:none`;
}


const frameChild = document.querySelectorAll('.frame-child');
const frameMain = document.querySelector('.frame-main');
const bacon1 = document.querySelector('#bacon-1');
const bacon2 = document.querySelector('#bacon-2');
const bacon3 = document.querySelector('#bacon-3');
const bacon4 = document.querySelector('#bacon-4');
const bacon5 = document.querySelector('#bacon-5');
const bacon6 = document.querySelector('#bacon-6');
const bacon7 = document.querySelector('#bacon-7');
const bacon8 = document.querySelector('#bacon-8');
const bacon9 = document.querySelector('#bacon-9');
const bacon10 = document.querySelector('#bacon-10');
const bacon11 = document.querySelector('#bacon-11');
const bacon12 = document.querySelector('#bacon-12');
const bacon13 = document.querySelector('#bacon-13');
const bacon14 = document.querySelector('#bacon-14');
const bacon15 = document.querySelector('#bacon-15');
const bacon16 = document.querySelector('#bacon-16');

const problemsText = document.querySelector('.problems-text');
const problem1 = document.querySelector('#problem-1');
const problem2 = document.querySelector('#problem-2');
const problem3 = document.querySelector('#problem-3');

const solutionsText = document.querySelector('.solutions-text');
const solution1 = document.querySelector('#solution-1');
const solution2 = document.querySelector('#solution-2');
const solution3 = document.querySelector('#solution-3');

const whale = document.querySelector('.whale');
const fishes = document.querySelector('.fishes');
const shell = document.querySelector('.shell');

const slide = document.querySelector('.slide');
const outerWraper = document.querySelector('.outer-wrapper');

const path = document.querySelector('.path');
const pathContainer = document.querySelector('.path__container');

const angular = document.querySelector('#angular');
const css = document.querySelector('#css');
const firebase = document.querySelector('#firebase');
const git = document.querySelector('#git');
const html = document.querySelector('#html')
const java = document.querySelector('#java');
const js = document.querySelector('#js');
const mongo = document.querySelector('#mongo');
const node = document.querySelector('#node');
const react = document.querySelector('#react');
const redux = document.querySelector('#redux');
const skills = document.querySelectorAll('.skills');
const journey = document.querySelectorAll('.journey');
const reload = document.querySelector('#reload');
const text = document.querySelector('.text');

reload.addEventListener('click', function () {
    window.location.reload(true);
})

bacon1Observer = new IntersectionObserver((entry, observer) => {
    let time = 7;
    if (entry[0].intersectionRatio > 0) {
        frameChild.forEach((el) => {
            el.style.animation =
                `appear 3s forwards, orbit ${time}s linear 0s infinite alternate`;
            time = time + 4;
        })
        frameMain.innerHTML = "I'm a web developer and I enjoy creating smart solutions for real problems";
        frameMain.style.animation = 'appear 2s forwards'
        observer.unobserve(entry[0].target);
    }
})

bacon2Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        problemsText.style.animation =
            `slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
        observer.unobserve(entry[0].target);
    }
})

bacon3Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        problem1.style.animation = `problems-disappear 0.1s forwards`;
        solution1.style.animation = `solutions-appear 0.1s forwards`;
        observer.unobserve(entry[0].target);
    }
})

bacon4Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        problem2.style.animation = `problems-disappear 0.1s forwards`;
        solution2.style.animation = `solutions-appear 0.1s forwards`;
        observer.unobserve(entry[0].target);
    }
})

bacon5Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        problem3.style.animation = `problems-disappear 0.1s forwards`;
        solution3.style.animation = `solutions-appear 0.1s forwards`;
        observer.unobserve(entry[0].target);
    }
})

bacon6Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        solutionsText.style.animation =
            `slide-out-left 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`;
        observer.unobserve(entry[0].target);
    }
})

bacon7Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        frameMain.style.animation =
            `disappear 1.5s forwards`;
        frameChild.forEach((el) => {
            el.style.animation =
                `disappear 1.5s forwards`;
        })
        whale.style.animation = `whale-grow 2s forwards`;
        observer.unobserve(entry[0].target);
    }
})

bacon8Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        whale.style.animation = `whale-swim 10s linear infinite both`;
        text.innerHTML = "I can work on my own";
        text.style.animation = `appear 1s forwards, swim 10s linear 1s infinite both`;
        observer.unobserve(entry[0].target);
    }
})

bacon9Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        whale.style.animation =
            `slide-out-top 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`;
        fishes.style.animation = `fishes-grow 1s forwards`;
        text.innerHTML = "or with the TEAM";

        observer.unobserve(entry[0].target);

    }
})

bacon10Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        fishes.style.animation = `fishes-swim 10s linear infinite both`;
        observer.unobserve(entry[0].target);

    }
})

bacon11Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {

        text.innerHTML = "but the most important is";
        observer.unobserve(entry[0].target);

    }
})

bacon12Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        text.innerHTML = "to have common goals";
        fishes.style.animation = `fishes-move 3s forwards`;
        shell.style.animation = `shell-bounce 0.9s both 1.5s`;
        observer.unobserve(entry[0].target);

    }
})

bacon13Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        text.style.animation =
            `disappear 1.5s forwards`;
        observer.unobserve(entry[0].target);

    }
})

bacon14Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        text.innerHTML = "the next thing";
        text.style.animation = `appear 1s forwards`;
        observer.unobserve(entry[0].target);

    }
})

bacon15Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        outerWraper.style.animation = `disable-scroll-2 15s`;

        slide.style.animation = `blink 5s`;
        text.style.animation = `text-focus-in 2s`;
        text.innerHTML = "SIMPLICITY";
        text.className = `simplicity1`;

        setTimeout(() => {
            text.innerHTML = "simplicity is beauty";
            text.style.animation = `text-focus-in 3s 2s`;
            text.className = `simplicity2`;
        }, 2000);

        setTimeout(() => {
            text.style.animation = `text-focus-in 2s 5s`;
            text.innerHTML = "and the last one";
        }, 5000);

        setTimeout(() => {
            text.style.animation = `text-focus-in 2s 7s`;
            text.innerHTML = "story";
            text.className = `story`;
        }, 7000);

        setTimeout(() => {
            text.style.animation = `text-focus-in 2s 9s`;
            text.innerHTML = "this is my story";
        }, 9000);

        path.style.animation = `appear 1s forwards 1s`;
        pathContainer.style.animation = `path-appear 12s steps(80) 11s 1 normal both`;

        let time = 12;
        let n = 1.1;
        java.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        git.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        html.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        css.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        js.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        angular.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        firebase.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        node.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        mongo.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        react.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        time = time + n;
        redux.style.animation =
            `slide-in-bck-center 2.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${time}s both`;
        observer.unobserve(entry[0].target);

    }
})

bacon16Observer = new IntersectionObserver((entry, observer) => {
    if (entry[0].intersectionRatio > 0) {
        journey.forEach((el) => {
            el.style.animation =
                `journey-blur 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`;
        })
        observer.unobserve(entry[0].target);

    }
})



bacon1Observer.observe(bacon1);
bacon2Observer.observe(bacon2);
bacon3Observer.observe(bacon3);
bacon4Observer.observe(bacon4);
bacon5Observer.observe(bacon5);
bacon6Observer.observe(bacon6);
bacon7Observer.observe(bacon7);
bacon8Observer.observe(bacon8);
bacon9Observer.observe(bacon9);
bacon10Observer.observe(bacon10);
bacon11Observer.observe(bacon11);
bacon12Observer.observe(bacon12);
bacon13Observer.observe(bacon13);
bacon14Observer.observe(bacon14);
bacon15Observer.observe(bacon15);
bacon16Observer.observe(bacon16);