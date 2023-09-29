const all = (selector) => {
    return document.querySelectorAll(selector);

};
const mainContainer        = document.querySelector('.main-container');
const sliderMainContainers = Array.from(all('.slider-main-container'));
const sliders              = Array.from(all('.slider-main-container .slider-container'));
const magnifierSliders     = Array.from(all('.slider-magnifier-container .slider-container'));

function padNumberWithZero(i) {
    return i < 10 ? '0' + i : i;
};

setInterval(
    () => {
        const currentDate = new Date();
        const hr          = padNumberWithZero(currentDate.getHours());
        const hrArr       = Array.from('' + hr, Number);
        const mn          = padNumberWithZero(currentDate.getMinutes());
        const mnArr       = Array.from('' + mn, Number);
        const sc          = padNumberWithZero(currentDate.getSeconds());
        const scArr       = Array.from('' + sc, Number);
        const timerArr    = [
            ...hrArr,
            ...mnArr,
            ...scArr,
        ]

        gsap.set('.main-container', {
            autoAlpha: 1

        });

        sliders.forEach((slider, i) => {
            gsap.timeline()
            .to(
                slider,{
                    y: -75 * timerArr[i],

                    ease: 'Sine.easeInOut'

                },

            )
            .to(
                magnifierSliders[i],{
                    y: -75 * timerArr[i],

                    ease: 'Sine.easeInOut'

                },

                0,

            );

        });

    },
    
    1000,
);

