$(function() {
    /* throttle / debounce */
    (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

    $('a[href="#"]').click(function(e){
      e.preventDefault();
    });


    // Главная: Следующий экран
    $('.mouse-down').on('click', function(){
      $.fn.fullpage.moveSectionDown();
      $(this).fadeOut(300);
    });


    // Шапка: Главное меню
    $('#main-nav-prods').on('click', function() { $.fn.fullpage.moveTo(2) });
    $('#main-nav-servs').on('click', function() { $.fn.fullpage.moveTo(3) });
    $('#main-nav-works').on('click', function() { $.fn.fullpage.moveTo(8) });
    $('#main-nav-contacts').on('click', function() { $.fn.fullpage.moveTo(18) });


    // Услуги: Навигация
    $('#btn-section-3').on('click', function() { $.fn.fullpage.moveTo(3) });
    $('#btn-section-4').on('click', function() { $.fn.fullpage.moveTo(4) });
    $('#btn-section-5').on('click', function() { $.fn.fullpage.moveTo(5) });
    $('#btn-section-6').on('click', function() { $.fn.fullpage.moveTo(6) });
    $('#btn-section-7').on('click', function() { $.fn.fullpage.moveTo(7) });

    // Портфолио: Навигация
    $('#w-1').on('click', function() { $.fn.fullpage.moveTo(8) });
    $('#w-2').on('click', function() { $.fn.fullpage.moveTo(9) });
    $('#w-3').on('click', function() { $.fn.fullpage.moveTo(10) });
    $('#w-4').on('click', function() { $.fn.fullpage.moveTo(11) });
    $('#w-5').on('click', function() { $.fn.fullpage.moveTo(12) });
    $('#w-6').on('click', function() { $.fn.fullpage.moveTo(13) });
    $('#w-7').on('click', function() { $.fn.fullpage.moveTo(14) });
    $('#w-8').on('click', function() { $.fn.fullpage.moveTo(15) });
    $('#w-9').on('click', function() { $.fn.fullpage.moveTo(16) });
    $('#w-10').on('click', function() { $.fn.fullpage.moveTo(17) });

    // Инициализация fp.js
    $('#main').fullpage({

      scrollingSpeed: 1000,
      autoScrolling: true,
      fitToSection: true,
      scrollOverflow: true,
      controlArrows: false,
      fixedElements: '#header',
      normalScrollElements: '#map',
      scrollOverflowOptions: {
        click:false,
        preventDefaultException: { tagName: /.*/ }
      },


      onLeave: function(index, nextIndex, direction){

        // Index
        if (nextIndex == 1 && direction == 'up'){
          $('.mouse-down').fadeIn(1000);
          $('.work-desc').removeClass('is-active');
          $('#works').fadeOut(1000);
        }


        // Production
        if (nextIndex == 2){
          $('.m_productions .item').removeClass('is-show-border');
          $('.m_productions .item').removeClass('is-show');

          $('.work-desc').removeClass('is-active');
          $('#works').fadeOut(1000);

          p1.stop().reset();
          p2.stop().reset();
          p3.stop().reset();
          p4.stop().reset();
          p5.stop().reset();
          p6.stop().reset();

          var ANIM_IN_INTERVAL = 700;

          itemProdIcon1 = setTimeout(function(){ p1.play() }, ANIM_IN_INTERVAL);
          itemProdIcon2 = setTimeout(function(){ p2.play() }, ANIM_IN_INTERVAL*2);
          itemProdIcon3 = setTimeout(function(){ p3.play() }, ANIM_IN_INTERVAL*3);
          itemProdIcon4 = setTimeout(function(){ p4.play() }, ANIM_IN_INTERVAL*4);
          itemProdIcon5 = setTimeout(function(){ p5.play() }, ANIM_IN_INTERVAL*5);
          itemProdIcon6 = setTimeout(function(){ p6.play() }, ANIM_IN_INTERVAL*6);
          itemProdsBorderedActived = setTimeout(function(){
            $('.m_productions .item').addClass('is-show-border');
          }, ANIM_IN_INTERVAL*7);

          $('.m_productions .item').each(function(i) {
            var $item = $(this);
            itemProdsActived = setTimeout(function(){
              $item.addClass('is-show');
            }, ANIM_IN_INTERVAL*i);
          });

        } else {
          clearTimeout(itemProdsActived);
          clearTimeout(itemProdsBorderedActived);
          clearTimeout(itemProdIcon1);
          clearTimeout(itemProdIcon2);
          clearTimeout(itemProdIcon3);
          clearTimeout(itemProdIcon4);
          clearTimeout(itemProdIcon5);
          clearTimeout(itemProdIcon6);

          $('.m_productions .item').removeClass('is-show');
          $('.m_productions .item').removeClass('is-show-border');
        }

        // end Productions

        // Services
        if (nextIndex == 3) {
          s1.reset().play();

          $('.work-desc').removeClass('is-active');
          $('#works').fadeOut(1000);

          $('.services-progress .dot').removeClass('current');
          $('#s-projecting .dot').addClass('current');
        }
        if (nextIndex == 4) {
          s2.reset().play();
          $('.progress-bar').addClass('anim-in-second');
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-in-second');
            $('.progress-bar').addClass('anim-out-second');
          },1000);
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-out-second');
          },2000);
          $('.services-progress .dot').removeClass('current');
          $('#s-design .dot').addClass('current');
        }

        if (nextIndex == 5) {
          s3.reset().play();
          $('.progress-bar').addClass('anim-in-third');
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-in-third');
            $('.progress-bar').addClass('anim-out-third');
          },1000);
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-out-third');
          },2000);
          $('.services-progress .dot').removeClass('current');
          $('#s-webdev .dot').addClass('current');
        }

        if (nextIndex == 6) {
          s4.reset().play();
          $('.progress-bar').addClass('anim-in-fourth');
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-in-fourth');
            $('.progress-bar').addClass('anim-out-fourth');
          },1000);
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-out-fourth');
          },2000);
          $('.services-progress .dot').removeClass('current');
          $('#s-mobdev .dot').addClass('current');
        }

        if (nextIndex == 7) {
          s5.reset().play();
          $('.progress-bar').addClass('anim-in-fifth');
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-in-fifth');
            $('.progress-bar').addClass('anim-out-fifth');
          },1000);
          setTimeout(function(){
            $('.progress-bar').removeClass('anim-out-fifth');
          },2000);
          $('.services-progress .dot').removeClass('current');
          $('#s-backend .dot').addClass('current');
        }
        if (index == 8 && direction == 'up') {
          $('#works').fadeOut(1000);
          $('.work-desc').removeClass('is-active');
        }
        if (nextIndex == 8) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('#works').delay(500).fadeIn(1000);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('01');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(0).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(0).addClass('current');
            $('.work-preview .image').eq(0).addClass('current');
            $('.works-info .links a').eq(0).addClass('current');
            $('.works-info .titles h2').eq(0).addClass('current');
          },750);
        }
        if ( index == 9 && direction=='up') {

          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
        }
        if (nextIndex == 9) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('02');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(1).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(1).addClass('current');
            $('.work-preview .image').eq(1).addClass('current');
            $('.works-info .links a').eq(1).addClass('current');
            $('.works-info .titles h2').eq(1).addClass('current');
          },750);
        }
        if (nextIndex == 10) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('03');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(2).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(2).addClass('current');
            $('.work-preview .image').eq(2).addClass('current');
            $('.works-info .links a').eq(2).addClass('current');
            $('.works-info .titles h2').eq(2).addClass('current');
          },750);
        }
        if (nextIndex == 11) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('04');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(3).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(3).addClass('current');
            $('.work-preview .image').eq(3).addClass('current');
            $('.works-info .links a').eq(3).addClass('current');
            $('.works-info .titles h2').eq(3).addClass('current');
          },750);
        }
        if (nextIndex == 12) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('05');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(4).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(4).addClass('current');
            $('.work-preview .image').eq(4).addClass('current');
            $('.works-info .links a').eq(4).addClass('current');
            $('.works-info .titles h2').eq(4).addClass('current');
          },750);
        }
        if (nextIndex == 13) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('06');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(5).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(5).addClass('current');
            $('.work-preview .image').eq(5).addClass('current');
            $('.works-info .links a').eq(5).addClass('current');
            $('.works-info .titles h2').eq(5).addClass('current');
          }, 750);
        }
        if (nextIndex == 14) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('07');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(6).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(6).addClass('current');
            $('.work-preview .image').eq(6).addClass('current');
            $('.works-info .links a').eq(6).addClass('current');
            $('.works-info .titles h2').eq(6).addClass('current');
          }, 750);
        }
        if (nextIndex == 15) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('08');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(7).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(7).addClass('current');
            $('.work-preview .image').eq(7).addClass('current');
            $('.works-info .links a').eq(7).addClass('current');
            $('.works-info .titles h2').eq(7).addClass('current');
          }, 750);
        }
        if (nextIndex == 16) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('09');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(8).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(8).addClass('current');
            $('.work-preview .image').eq(8).addClass('current');
            $('.works-info .links a').eq(8).addClass('current');
            $('.works-info .titles h2').eq(8).addClass('current');
          }, 750);
        }
        if (nextIndex == 17) {
          $('.work-desc').removeClass('is-active');
          setTimeout(function(){
            $('.work-desc').addClass('is-active');
          },1000);
          $('.work-layout').addClass('anim-out');
          setTimeout(function(){
            $('.work-layout').removeClass('anim-out');
          },1500);
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('10');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(9).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image').removeClass('current');
            $('.works-info .descriptions .item').eq(9).addClass('current');
            $('.work-preview .image').eq(9).addClass('current');
            $('.works-info .links a').eq(9).addClass('current');
            $('.works-info .titles h2').eq(9).addClass('current');
          },750);
        }
        if (index == 18 && nextIndex == 17) {
          $('#works').delay(500).fadeIn(1000);

        }
        if (nextIndex == 18) {
          $('.work-desc').removeClass('is-active');
          $('#works').fadeOut(1000);
        }
      }
    });

    p1 = new Vivus('prod-1', {duration: 50, file: 'images/prod-1.svg'});
    p2 = new Vivus('prod-2', {duration: 50, file: 'images/prod-2.svg'});
    p3 = new Vivus('prod-3', {duration: 50, file: 'images/prod-3.svg'});
    p4 = new Vivus('prod-4', {duration: 50, file: 'images/prod-4.svg'});
    p5 = new Vivus('prod-5', {duration: 50, file: 'images/prod-5.svg'});
    p6 = new Vivus('prod-6', {duration: 50, file: 'images/prod-6.svg'});
    s1 = new Vivus('s1', {duration: 200, file: 'images/s-1.svg'});
    s2 = new Vivus('s2', {duration: 200, file: 'images/s-2.svg'});
    s3 = new Vivus('s3', {duration: 200, file: 'images/s-3.svg'});
    s4 = new Vivus('s4', {duration: 200, file: 'images/s-4.svg'});
    s5 = new Vivus('s5', {duration: 200, file: 'images/s-5.svg'});

    //=include modules.js
});