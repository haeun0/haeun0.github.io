window.load = function () {};
$(document).ready(function () {
    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        });
    });
    let gotop = $('.gotop');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();
        if (scrollbar > 778) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }
    });

    // 주메뉴 관련 코드
    let nav = $('.nav');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();
        if (scrollbar > 778) {
            nav.addClass('nav-fix');
        } else {
            nav.removeClass('nav-fix');
        }
    });



    // 퍼블리싱 슬라이드 영역 세로확인용
    new Swiper(".sw-publ", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 10,
        // 수정!!!!!!!!!!!!!!!!!!!!!!!
        // loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


    // // 퍼블리싱 슬라이드 영역 - 가로
    // // let appendNumber = 600;
    // // let prependNumber = 1;
    // const swiper = new Swiper('.sw-publ', {
    //     // direction: "vertical",
    //     slidesPerView: 3,
    //     // centeredSlides: true,
    //     spaceBetween: 10,
    //     // loop: true,
    //     // pagination: {
    //     //     el: '.swiper-pagination',
    //     //     type: 'fraction',
    //     // },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     // virtual: {
    //     //     slides: (function () {
    //     //         const slides = [];
    //     //         for (var i = 0; i < 600; i += 1) {
    //     //             slides.push('Slide ' + (i + 1));
    //     //         }
    //     //         return slides;
    //     //     })(),
    //     // },
    // });

    // document
    //     .querySelector('.slide-1')
    //     .addEventListener('click', function (e) {
    //         e.preventDefault();
    //         swiper.slideTo(0, 0);
    //     });

    // document
    //     .querySelector('.slide-250')
    //     .addEventListener('click', function (e) {
    //         e.preventDefault();
    //         swiper.slideTo(249, 0);
    //     });

    // document
    //     .querySelector('.slide-500')
    //     .addEventListener('click', function (e) {
    //         e.preventDefault();
    //         swiper.slideTo(499, 0);
    //     });

    // document
    //     .querySelector('.prepend-2-slides')
    //     .addEventListener('click', function (e) {
    //         e.preventDefault();
    //         swiper.virtual.prependSlide([
    //             'Slide ' + --prependNumber,
    //             'Slide ' + --prependNumber,
    //         ]);
    //     });

    // document
    //     .querySelector('.append-slide')
    //     .addEventListener('click', function (e) {
    //         e.preventDefault();
    //         swiper.virtual.appendSlide('Slide ' + ++appendNumber);
    //     });

    // 기타영역 슬라이드
    var swiper = new Swiper(".sw-others", {
        slidesPerView: 4,
        grid: {
            rows: 2,
        },
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


});