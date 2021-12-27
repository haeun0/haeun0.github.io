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
        if (scrollbar > 882) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }
    });

    // 주메뉴 관련 코드
    let nav = $('.nav');
    let profile = $('.profile');
    let profile_tit = $('.profile .tit');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();
        if (scrollbar > 882) {
            nav.addClass('nav-fix');
            profile.addClass('profile-fix');
        } else {
            nav.removeClass('nav-fix');
            profile.removeClass('profile-fix');
        }
    });

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {

        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }

            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 500);
        });
    });


    // possibility 영역
    $('.possi-1').waypoint(function (dir) {
        if (dir == "down") {
            $('.possi-1').addClass('possi-1-active');
        } else {

        }
    }, {
        offset: '80%'
    });

    $('.possi-2').waypoint(function (dir) {
        if (dir == "down") {
            $('.possi-2').addClass('possi-2-active');
        } else {

        }
    }, {
        offset: '80%'
    });

    $('.possi-3').waypoint(function (dir) {
        if (dir == "down") {
            $('.possi-3').addClass('possi-3-active');
        } else {

        }
    }, {
        offset: '88%'
    });








    // 리디자인 슬라이드    
    var rede_cont_box = $('.rede-cont-box');
    rede_cont_box.eq(0).show();

    var sw_rede = new Swiper('.sw-rede', {
        loop: true,
        direction: "vertical",
        navigation: {
            nextEl: ".sw-rede-up-bt",
            prevEl: ".sw-rede-down-bt",
        },
    });

    sw_rede.on('slideChange', function () {
        rede_cont_box.hide();
        rede_cont_box.eq(this.realIndex).show();
    });



    // 퍼블리싱 슬라이드
    new Swiper(".sw-publ", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        navigation: {
            nextEl: '.publ-up-bt',
            prevEl: '.publ-down-bt',
        },

    });

    // 기타 디자인 슬라이드
    var others_main_box = $('.others-main-box');
    others_main_box.eq(0).show();
    var others_box = $('.others-box');

    var sw_others = new Swiper('.sw-others', {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    $('.sw-others').mouseenter(function () {
        sw_others.autoplay.stop();
    });
    $('.sw-others').mouseleave(function () {
        sw_others.autoplay.start();
    });

    sw_others.on('slideChange', function () {
        // others_main_box.hide();
        // others_main_box.eq(this.realIndex).show();
    });

    $.each($('.others-box'), function (index, item) {
        $(this).click(function () {
            console.log(index)
            var temp = $(this).attr('data-other-box');
            others_main_box.hide();
            others_main_box.eq(temp).show();
        });
    });




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

    // skil 
    var bar_html = new ProgressBar.Circle(html, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        color: '#5d4b63',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });





    var bar_css = new ProgressBar.Circle(css, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        color: '#a38182',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });



    var bar_photoshop = new ProgressBar.Circle(photoshop, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        color: '#cecbda',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });



    var bar_illust = new ProgressBar.Circle(illust, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        color: '#d74d63',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });




    // 스크롤바의 위치를 체크한다.
    $(window).scroll(function () {
        // 스크롤바의 위치 값
        var scY = $(window).scrollTop();
        console.log(scY);

        if (scY > 700) {
            // 애니메이션 실행
            bar_html.animate(0.9); // Number from 0.0 to 1.0
            bar_css.animate(0.88); // Number from 0.0 to 1.0
            bar_photoshop.animate(0.95); // Number from 0.0 to 1.0
            bar_illust.animate(0.85); // Number from 0.0 to 1.0
        }

    });


});