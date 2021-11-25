$(document).ready(function () {
    // 위로가기 기능
    $('.gotop').click(function () {

        $('html, body').animate({
            scrollTop: 0
        });

    });

    // 리디자인 슬라이드
    new Swiper(".sw-rede", {
        slidesPerView: 4,
        loop: true,
    });

    // 퍼블리싱 슬라이드
    new Swiper(".sw-publ", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
    });

    // 말 줄임 적용
    $(".publ-desc").dotdotdot({
        wrapper: 'div',
        /*  콘텐트를 감쌀 요소. */
        ellipsis: '... ',
        /*  말줄임표를 뭘로 할지 */
        wrap: 'word',
        /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
        after: null,
        /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
        watch: false,
        /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
        height: null,
        /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
        tolerance: 0 /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    });

    $(".rede-box-desc p").dotdotdot({
        wrapper: 'div',
        /*  콘텐트를 감쌀 요소. */
        ellipsis: '... ',
        /*  말줄임표를 뭘로 할지 */
        wrap: 'word',
        /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
        after: null,
        /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
        watch: false,
        /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
        height: null,
        /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
        tolerance: 0 /*  글이 넘치면 이만큼쯤 height를 늘린다 */
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

    // photoshop성취율
    var photoshop = new ProgressBar.Line(skill_photoshop, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FF0000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#FF0000'
        },
        to: {
            color: '#FF0000'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });



    // illust 성취율
    var illust = new ProgressBar.Line(skill_illust, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#00ff00',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#00ff00'
        },
        to: {
            color: '#00ff00'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });


    // xd 성취율
    var xd = new ProgressBar.Line(skill_xd, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#0000ff',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#0000ff'
        },
        to: {
            color: '#0000ff'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // html 성취율
    var html = new ProgressBar.Circle(skill_html, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    html.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    html.text.style.fontSize = '2rem';

    // css 성취율
    var css = new ProgressBar.Circle(skill_css, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    css.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    css.text.style.fontSize = '2rem';

    // jquery 성취율
    var jquery = new ProgressBar.Circle(skill_jquery, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    jquery.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    jquery.text.style.fontSize = '2rem';

    // oa 성취율
    var oa = new ProgressBar.Circle(skill_oa, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#333',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    oa.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    oa.text.style.fontSize = '2rem';


    // photoshop.animate(0.8); 
    // illust.animate(0.95); 
    // xd.animate(0.83); 
    // html.animate(1.0); 
    // css.animate(0.9); 
    // jquery.animate(0.75); 
    // oa.animate(0.88); 

    // 스크롤을 했을 때 모션 시작
    var sc_y = $(window).scrollTop();
    $(window).scroll(function () {
        sc_y = $(window).scrollTop();
        console.log(sc_y);

        if (sc_y >= 910) {
            photoshop.animate(0.8);
            illust.animate(0.95);
            xd.animate(0.83);
            html.animate(1.0);
            css.animate(0.9);
            jquery.animate(0.75);
            oa.animate(0.88);
        }
    });

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    // 스크롤시 애니메이션 
    $('.life-img').waypoint(function (dir) {
        if (dir == "down") {
            $('.life-img').addClass('life-img-active');
        } else {
            $('.life-img').removeClass('life-img-active');
        }
    }, {
        offset: '100%'
    });

    $(".etc-sample").niceScroll({
        cursorwidth: "20px",
        cursoropacitymax: 0.5,
        boxzoom: true,
    });

});

window.onload = function () {
    AOS.init();
}