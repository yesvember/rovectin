
let STYLE = (element, opacity, transform = '') => {
    element.style.opacity = opacity;
    element.style.transform = transform;
};

// hero scroll-event
const hero = document.querySelector('#hero');
const heroTrigger = document.querySelector('.hero-trigger');
const modelImg = document.querySelector('.model');
const heroTxt = document.querySelector('.hero-txt');

let heroObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target === heroTrigger) {
            if (entry.isIntersecting) {
                STYLE(modelImg, 1, '')

                setTimeout(() => {
                    STYLE(heroTxt, 1, '')
                }, 500);
            } else {
                STYLE(modelImg, 0, '')
                STYLE(heroTxt, 0, '')
            }
        }
    });
});

heroObserve.observe(heroTrigger);

// new scroll event
const New = document.querySelector('#new');
const NewTrigger = New.querySelector('.new-trigger');
const NewImg = New.querySelector('.new-inner-rt');
const NewTitle = New.querySelector('h3');
const NewComment = New.querySelector('p');
const NewList = New.querySelector('ul');

let newObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target === NewTrigger) {
            if (entry.isIntersecting) {
                NewImg.style.opacity = 1;
                STYLE(NewImg, 1, '');

                setTimeout(() => {
                    STYLE(NewTitle, 1, 'translateY(0)');
                }, 400);
                setTimeout(() => {
                    STYLE(NewComment, 1,'translateY(0)');
                }, 800);
                setTimeout(() => {
                    STYLE(NewList, 1,'translateY(0)');
                }, 1200);

            } else {
                STYLE(NewImg, 0, '');
                STYLE(NewTitle, 0, 'translateY(-10%)');
                STYLE(NewComment, 0, 'translateY(-10%)');
                STYLE(NewList, 0, 'translateY(-10%)');
            }
        }
    });
});

newObserve.observe(NewTrigger);

// best scroll event
const best = document.querySelector('#best');
const bestTrigger = best.querySelector('.best-trigger');
const bestDecoImg = best.querySelector('.best-deco-bg');

let bestObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target === bestTrigger) {
            if (entry.isIntersecting) {
                STYLE(bestDecoImg, 0, '');
                bestDecoImg.style.width = '0%';
            } else {
                STYLE(bestDecoImg, 1, '');
                bestDecoImg.style.width = '100%';
            }
        }
    });
});

bestObserve.observe(bestTrigger);

// promotion scroll event
const promotion = document.querySelector('#promotion');
const promotionTrigger = promotion.querySelector('.promotion-trigger');
const promotionTitle = promotion.querySelector('h2');

let promotionObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target === promotionTrigger) {
            if (entry.isIntersecting) {
                STYLE(promotionTitle, 1, '');
            } else {
                STYLE(promotionTitle, 0, '');
            }
        }
    });
});

promotionObserve.observe(promotionTrigger);

// story scroll event
const story = document.querySelector('#story');
const storyTrigger = story.querySelector('.story-trigger');
const storyTitle = story.querySelector('h2 > span');

let storyObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target === storyTrigger) {
            if (entry.isIntersecting) {
                storyTitle.style.fontSize = '12rem';
            } else {
                storyTitle.style.fontSize = '16rem';
            }
        }
    });
});

storyObserve.observe(storyTrigger);