async function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

// fade out animation
function fadeOut(element, direction, duration, delay = 0) {
    if (direction === 'left') {
        element.style.animation = `fadeOutLeft ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'right') {
        element.style.animation = `fadeOutRight ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'top') {
        element.style.animation = `fadeOutTop ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'bottom') {
        element.style.animation = `fadeOutBottom ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    }
}

// fade in animation

function fadeIn(element, direction, duration, delay = 0) {
    if (direction === 'left') {
        element.style.animation = `fadeInLeft ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'right') {
        element.style.animation = `fadeInRight ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'top') {
        element.style.animation = `fadeInTop ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    } else if (direction === 'bottom') {
        element.style.animation = `fadeInBottom ${duration}ms ease-in-out forwards`;
        element.style.animationDelay = `${delay}ms`;
    }
}

async function fadeAll(elementSelector, fadeType, direction, duration, delay = 0) {
    /*
        To use this function, first you need to add the 'data-fade' attribute to the element you want to fade.
    */
    
    const mainElement = document.querySelector(elementSelector);
    if (fadeType === 'in') {
        mainElement.dataset.fade = 'in';
        fadeIn(mainElement, direction, duration, delay < duration * 0.5 ? delay += duration * 0.1 : duration * 0.5);
    } else if (fadeType === 'out') {
        mainElement.dataset.fade = 'out';
        fadeOut(mainElement, direction, duration, delay < duration * 0.5 ? delay += duration * 0.1 : duration * 0.5);
    }

    const elements = document.querySelectorAll(`${elementSelector} *[data-fade]`);
    for (let i = elements.length - 1; i >= 0; i--) {
        let element = elements[i];
        if (fadeType === 'in') {
            element.dataset.fade = 'in';
            fadeIn(element, direction, duration, delay < duration * 0.5 ? delay += duration * 0.1 : duration * 0.5);
        } else if (fadeType === 'out') {
            element.dataset.fade = 'out';
            fadeOut(element, direction, duration, delay < duration * 0.5 ? delay += duration * 0.1 : duration * 0.5);
        }
    }

    await sleep(duration * 1.5 / 1000);

    return;
}