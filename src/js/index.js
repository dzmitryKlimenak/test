/*--------------SLIDER-----------------------------*/

let jsSliderLeft = document.getElementById('btn-left'),
    jsSliderRight = document.getElementById('btn-right');

let jsPolosa = document.getElementById('js-polosa'),
    left = 0,
    jsArr = document.querySelectorAll('#js-polosa>.slider--item').length-1;

let windowWidth = document.documentElement.clientWidth;

if (windowWidth < 1024 && windowWidth >=768) {
    jsSliderLeft.addEventListener('click', () => {
        if (left > -650*jsArr && left <= 0) {
            left = left - 650;
        }
        jsPolosa.style.left = left + 'px';
    });

    jsSliderRight.addEventListener('click', () => {
        if (left >= -650*jsArr && left < 0) {
            left = left + 650;
        }
        jsPolosa.style.left = left + 'px';
    });
} else if (windowWidth < 768 && windowWidth >=320) {
    jsSliderLeft.addEventListener('click', () => {
        if (left > -300*jsArr && left <= 0) {
            left = left - 300;
        }
        jsPolosa.style.left = left + 'px';
    });

    jsSliderRight.addEventListener('click', () => {
        if (left >= -300*jsArr && left < 0) {
            left = left + 300;
        }
        jsPolosa.style.left = left + 'px';
    });
} else {
    jsSliderLeft.addEventListener('click', () => {
        if (left > -970*jsArr && left <= 0) {
            left = left - 970;
        }
        jsPolosa.style.left = left + 'px';
    });

    jsSliderRight.addEventListener('click', () => {
        if (left >= -970*jsArr && left < 0) {
            left = left + 970;
        }
        jsPolosa.style.left = left + 'px';
    });
}

/*------------------------HIDE ANIMATE--------------------------*/
function fade (elem, t, f) {
    let fps = 50,
        time = t || 500,
        steps = time / fps,
        op = 1,
        d0 = op /steps;

    let callback = f || function () {};

    let timer = setInterval(function () {
        op -= d0;
        elem.style.opacity = op;
        steps--;

        if (steps === 0) {
            clearInterval(timer);
            callback.call(elem);
        }
    }, (1000 / fps));
}

/*---------------------FORM------------------------*/
let btnOpenForm = document.getElementById('btn--form'),
    btnCloseForm = document.getElementById('btn--close'),
    form = document.getElementById('form');

btnOpenForm.addEventListener('click', () => {
    form.setAttribute("style", "display:flex; opacity: 1;");
    btnCloseForm.style.display = 'block';
});

btnCloseForm.addEventListener('click', () => {
    btnCloseForm.style.display = 'none';
    fade(form, 1000, function () {
        this.style.display = 'none';
    });
});


/*------------------------------mobile menu -------------------------------*/

let bar = document.getElementById('bar'),
    hide = document.getElementById('hide'),
    mobileMenu = document.getElementById('mobileMenu');

bar.addEventListener('click', () => {
    bar.style.display = 'none';
    mobileMenu.setAttribute("style", "transform: translateX(0)");
    hide.style.display = 'block';
});

hide.addEventListener('click', () => {
    hide.style.display = 'none';
    mobileMenu.setAttribute("style", "transform: translateX(100%)");
    bar.style.display = 'block';
});



