 /*
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     *
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    (function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
$(function() {


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



    function hideWorks() {
      $('.work-desc').removeClass('is-active');
      $('#works').fadeOut(1000);
    }

    function hideProductionItems() {
      $('.m_productions .item').removeClass('is-show-border is-show');
    }

    p1 = new Vivus('prod-1', {duration: 35, file: 'images/prod-1.svg'});
    p2 = new Vivus('prod-2', {duration: 35, file: 'images/prod-2.svg'});
    p3 = new Vivus('prod-3', {duration: 35, file: 'images/prod-3.svg'});
    p4 = new Vivus('prod-4', {duration: 35, file: 'images/prod-4.svg'});
    p5 = new Vivus('prod-5', {duration: 35, file: 'images/prod-5.svg'});
    p6 = new Vivus('prod-6', {duration: 35, file: 'images/prod-6.svg'});
    s1 = new Vivus('s1', {duration: 100, file: 'images/s-1.svg'});
    s2 = new Vivus('s2', {duration: 100, file: 'images/s-2.svg'});
    s3 = new Vivus('s3', {duration: 100, file: 'images/s-3.svg'});
    s4 = new Vivus('s4', {duration: 100, file: 'images/s-4.svg'});
    s5 = new Vivus('s5', {duration: 100, file: 'images/s-5.svg'});


    // Инициализация fp.js
    $('#main').fullpage({

      scrollingSpeed: 1500,
      autoScrolling: true,
      fitToSection: true,
      scrollOverflow: true,
      controlArrows: false,
      resize: true,
      fixedElements: '#header',
      normalScrollElements: '#map, textarea',
      scrollOverflowOptions: {
        click:false,
        preventDefaultException: { tagName: /.*/ }
      },
      afterRender: function(){
        $('#header, .pricelist, #works').css('opacity', '1');
        $('.m_productions').css('visibility', 'visible');
      },

      onLeave: function(index, nextIndex, direction){
        // Главная
        if (nextIndex == 1 && direction == 'up'){
          $('.mouse-down').fadeIn(1000);
          hideWorks();
          setTimeout(function(){
            var mySplitText = new SplitText('#split-lead', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.7, {
              opacity:0,
              cycle:{
                y:[-20, -20]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },600);
        }

        // Продакшн
        if (nextIndex == 2){
          hideWorks();
          $('#works').hide();
          hideProductionItems();

          p1.stop().reset();
          p2.stop().reset();
          p3.stop().reset();
          p4.stop().reset();
          p5.stop().reset();
          p6.stop().reset();

          var ANIM_IN_INTERVAL = 700;

          itemProdIcon1 = setTimeout(function(){
            p1.play();
            var mySplitText = new SplitText('#split-1', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }

          }, ANIM_IN_INTERVAL);
          itemProdIcon2 = setTimeout(function(){
            p2.play();
            var mySplitText = new SplitText('#split-2', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }

          }, ANIM_IN_INTERVAL*2);
          itemProdIcon3 = setTimeout(function(){
            p3.play();
            var mySplitText = new SplitText('#split-3', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }

          }, ANIM_IN_INTERVAL*3);
          itemProdIcon4 = setTimeout(function(){
            p4.play();
            var mySplitText = new SplitText('#split-4', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }

          }, ANIM_IN_INTERVAL*4);
          itemProdIcon5 = setTimeout(function(){
            p5.play();
            var mySplitText = new SplitText('#split-5', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }

          }, ANIM_IN_INTERVAL*5);
          itemProdIcon6 = setTimeout(function(){
            p6.play();
            var mySplitText = new SplitText('#split-6', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }

          }, ANIM_IN_INTERVAL*6);

          itemProdsBorderedActived = setTimeout(function(){
            $('.m_productions .item').addClass('is-show-border');
          }, ANIM_IN_INTERVAL*7);

          $('.m_productions .item').each(function(i) {
            var $item = $(this);
            itemProdsActived = setTimeout(function(){
              $item.addClass('is-show');
            }, ANIM_IN_INTERVAL*i);
          });
        }

        if ( index == 2 ) {
          clearTimeout(itemProdsActived);
          clearTimeout(itemProdsBorderedActived);
          clearTimeout(itemProdIcon1);
          clearTimeout(itemProdIcon2);
          clearTimeout(itemProdIcon3);
          clearTimeout(itemProdIcon4);
          clearTimeout(itemProdIcon5);
          clearTimeout(itemProdIcon6);
          hideProductionItems();
        }

        // end Productions

        // Services
        if (nextIndex == 3) {
          s1.reset().play();

          hideWorks();
          setTimeout(function(){
            var mySplitText = new SplitText('#split-serv-1', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1900);


          $('.services-progress .dot').removeClass('current');
          $('#s-projecting .dot').addClass('current');
        }

        if (nextIndex == 4) {
          s2.reset().play();
          setTimeout(function(){
            var mySplitText = new SplitText('#split-serv-2', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1900);
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
          setTimeout(function(){
            var mySplitText = new SplitText('#split-serv-3', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1900);
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
          setTimeout(function(){
            var mySplitText = new SplitText('#split-serv-4', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1900);
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
          setTimeout(function(){
            var mySplitText = new SplitText('#split-serv-5', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1900);
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
        // end Services

        // Works
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
          // waves();
          setTimeout(function(){
            $('.works-counter .current, .works-info .number').text('01');
            $('.works-nav li a').removeClass('current');
            $('.works-nav li').eq(0).find('a').addClass('current');
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(0).addClass('current');
            $('.work-preview .image').eq(0).addClass('current');
            $('.work-preview-mobile .image').eq(0).addClass('current');
            $('.works-info .links a').eq(0).addClass('current');
            $('.works-info .titles h2').eq(0).addClass('current');
          },750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-1', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(1).addClass('current');
            $('.work-preview .image').eq(1).addClass('current');
            $('.work-preview-mobile .image').eq(1).addClass('current');
            $('.works-info .links a').eq(1).addClass('current');
            $('.works-info .titles h2').eq(1).addClass('current');
          },750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-2', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(2).addClass('current');
            $('.work-preview .image').eq(2).addClass('current');
            $('.work-preview-mobile .image').eq(2).addClass('current');
            $('.works-info .links a').eq(2).addClass('current');
            $('.works-info .titles h2').eq(2).addClass('current');
          },750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-3', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(3).addClass('current');
            $('.work-preview .image').eq(3).addClass('current');
            $('.work-preview-mobile .image').eq(3).addClass('current');
            $('.works-info .links a').eq(3).addClass('current');
            $('.works-info .titles h2').eq(3).addClass('current');
          },750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-4', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(4).addClass('current');
            $('.work-preview .image').eq(4).addClass('current');
            $('.work-preview-mobile .image').eq(4).addClass('current');
            $('.works-info .links a').eq(4).addClass('current');
            $('.works-info .titles h2').eq(4).addClass('current');
          },750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-5', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(5).addClass('current');
            $('.work-preview .image').eq(5).addClass('current');
            $('.work-preview-mobile .image').eq(5).addClass('current');
            $('.works-info .links a').eq(5).addClass('current');
            $('.works-info .titles h2').eq(5).addClass('current');
          }, 750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-6', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(6).addClass('current');
            $('.work-preview .image').eq(6).addClass('current');
            $('.work-preview-mobile .image').eq(6).addClass('current');
            $('.works-info .links a').eq(6).addClass('current');
            $('.works-info .titles h2').eq(6).addClass('current');
          }, 750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-7', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(7).addClass('current');
            $('.work-preview .image').eq(7).addClass('current');
            $('.work-preview-mobile .image').eq(7).addClass('current');
            $('.works-info .links a').eq(7).addClass('current');
            $('.works-info .titles h2').eq(7).addClass('current');
          }, 750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-8', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(8).addClass('current');
            $('.work-preview .image').eq(8).addClass('current');
            $('.work-preview-mobile .image').eq(8).addClass('current');
            $('.works-info .links a').eq(8).addClass('current');
            $('.works-info .titles h2').eq(8).addClass('current');
          }, 750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-9', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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
            $('.works-info .titles h2, .works-info .descriptions .item, .works-info .links a, .work-preview .image, .work-preview-mobile .image').removeClass('current');
            $('.works-info .descriptions .item').eq(9).addClass('current');
            $('.work-preview .image').eq(9).addClass('current');
            $('.work-preview-mobile .image').eq(9).addClass('current');
            $('.works-info .links a').eq(9).addClass('current');
            $('.works-info .titles h2').eq(9).addClass('current');
          },750);
          setTimeout(function(){
            var mySplitText = new SplitText('#split-work-10', {type:"lines"});
            TweenMax.staggerFrom(mySplitText.lines, 0.9, {
              opacity:0,
              cycle:{
                y:[-10, -10]
              }
            }, 0.2, allDone);
            function allDone() {
              mySplitText.revert();
            }
          },1600);
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


    //=include modules.js
    /**
     * Vars
     */
    var points = [];
    var rafID = null;
    var rafIDContacts = null;

    var guiVars = function() {
      this.totalPoints = 8;
      this.viscosity = 50;
      this.mouseDist = 80;
      this.damping = 0.08;
      this.showIndicators = false;
      this.leftColor = 'transparent';
      this.rightColor = '#111';
    }
    var vars = new guiVars();

    /**
     * Mouse handler
     */
    var mouseX = 0,
      mouseY = 0,
      mouseLastX = 0,
      mouseLastY = 0,
      mouseDirectionX = 0,
      mouseDirectionY = 0,
      mouseSpeedX = 0,
      mouseSpeedY = 0;

    // Get mouse direction
    function mouseDirection(e) {
      if (mouseX < e.pageX)
        mouseDirectionX = 1;
      else if (mouseX > e.pageX)
        mouseDirectionX = -1;
      else
        mouseDirectionX = 0;

      if (mouseY < e.pageY)
        mouseDirectionY = 1;
      else if (mouseY > e.pageY)
        mouseDirectionY = -1;
      else
        mouseDirectionY = 0;

      mouseX = e.pageX;
      mouseY = e.pageY;
    }
    $(document).on('mousemove', mouseDirection);

    // Get mouse speed
    function mouseSpeed() {
      mouseSpeedX = mouseX - mouseLastX;
      mouseSpeedY = mouseY - mouseLastY;

      mouseLastX = mouseX;
      mouseLastY = mouseY;

      setTimeout(mouseSpeed, 50);
    }
    mouseSpeed();

    /**
     * Point
     */
    function Point(x, y, canvas) {
      this.x = x;
      this.ix = x;
      this.vx = 0;
      this.cx = 0;
      this.y = y;
      this.iy = y;
      this.cy = 0;
      this.canvas = canvas;
    }

    Point.prototype.move = function() {
      this.vx += (this.ix - this.x) / vars.viscosity;

      var dx = this.ix - mouseX,
        dy = this.y - mouseY;

      var gap = this.canvas.data('gap');

      // Move point only when leaving color block
      if ((mouseDirectionX > 0 && mouseX > this.x) || (mouseDirectionX < 0 && mouseX < this.x)) {
        if (Math.sqrt(dx * dx) < vars.mouseDist && Math.sqrt(dy * dy) < gap) {
          this.vx = mouseSpeedX / 8
        }
      }

      this.vx *= (1 - vars.damping);
      this.x += this.vx;
    };

    /**
     * Init canvas
     */
    function initCanvas() {
      var canvas = $('.m_works canvas');
      var context = canvas.get(0).getContext('2d');

      cancelAnimationFrame(rafID);

      // Resize canvas
      $('.m_works canvas').get(0).width = $(window).width();
      $('.m_works canvas').get(0).height = $(window).height();

      // Add points
      points = [];
      var gap = (canvas.height()) / (vars.totalPoints - 1);
      var pointX = $(window).width() / 2;

      for (var i = 0; i <= vars.totalPoints - 1; i++)
        points.push(new Point(pointX, i * gap, canvas));

      // Start render
      renderCanvas();

      canvas.data('gap', gap);
    }
    function initCanvasContacts() {
      var canvas = $('.contacts-canvas canvas');
      var context = canvas.get(0).getContext('2d');

      cancelAnimationFrame(rafIDContacts);

      // Resize canvas
      $('.contacts-canvas canvas').get(0).width = $(window).width();
      $('.contacts-canvas canvas').get(0).height = $(window).height();

      // Add points
      points = [];
      var gap = (canvas.height()) / (vars.totalPoints - 1);
      var pointX = $(window).width() / 2;

      for (var i = 0; i <= vars.totalPoints - 1; i++)
        points.push(new Point(pointX, i * gap, canvas));

      // Start render
      renderCanvasContacts();

      canvas.data('gap', gap);
    }

    /**
     * Render canvas
     */
    function renderCanvas() {
      var canvas = $('.m_works canvas');
      var context = canvas.get(0).getContext('2d');

      // rAF
      rafID = requestAnimationFrame(renderCanvas);

      // Clear scene
      context.clearRect(0, 0, canvas.width(), canvas.height());
      context.fillStyle = vars.leftColor;
      context.fillRect(0, 0, canvas.width(), canvas.height());

      // Move points
      for (var i = 0; i <= vars.totalPoints - 1; i++)
        points[i].move();

      // Draw shape
      context.fillStyle = vars.rightColor;
      context.strokeStyle = vars.rightColor;
      context.lineWidth = 1;
      context.beginPath();

      context.moveTo($(window).width()/2, 0);
      // context.moveTo(0, 0);

      for (var i = 0; i <= vars.totalPoints - 1; i++) {
        var p = points[i];

        if (points[i + 1] != undefined) {
          p.cx = (p.x + points[i + 1].x) / 2 - 0.0001; // - 0.0001 hack to fix a 1px offset bug on Chrome...
          p.cy = (p.y + points[i + 1].y) / 2;
        } else {
          p.cx = p.ix;
          p.cy = p.iy;
        }

        context.bezierCurveTo(p.x, p.y, p.cx, p.cy, p.cx, p.cy);
      }

      context.lineTo(0, $(window).height());
      context.lineTo(0, 0);
      context.closePath();
      context.fill();

      if (vars.showIndicators) {
        // Draw points
        context.fillStyle = '#000';
        context.beginPath();
        for (var i = 0; i <= vars.totalPoints - 1; i++) {
          var p = points[i];

          context.rect(p.x - 2, p.y - 2, 4, 4);
        }
        context.fill();

        // Draw controls
        context.fillStyle = '#fff';
        context.beginPath();
        for (var i = 0; i <= vars.totalPoints - 1; i++) {
          var p = points[i];

          context.rect(p.cx - 1, p.cy - 1, 2, 2);
        }
        context.fill();
      }
    }
    function renderCanvasContacts() {
      var canvas = $('.contacts-canvas canvas');
      var context = canvas.get(0).getContext('2d');

      // rAF
      rafIDContacts = requestAnimationFrame(renderCanvasContacts);

      // Clear scene
      context.clearRect(0, 0, canvas.width(), canvas.height());
      context.fillStyle = 'transparent';
      context.fillRect(0, 0, canvas.width(), canvas.height());

      // Move points
      for (var i = 0; i <= vars.totalPoints - 1; i++)
        points[i].move();

      // Draw shape
      context.fillStyle = '#111';
      context.strokeStyle = '#111';
      context.lineWidth = 1;
      context.beginPath();

      context.moveTo($(window).width()/2, 0);
      // context.moveTo(0, 0);

      for (var i = 0; i <= vars.totalPoints - 1; i++) {
        var p = points[i];

        if (points[i + 1] != undefined) {
          p.cx = (p.x + points[i + 1].x) / 2 - 0.0001; // - 0.0001 hack to fix a 1px offset bug on Chrome...
          p.cy = (p.y + points[i + 1].y) / 2;
        } else {
          p.cx = p.ix;
          p.cy = p.iy;
        }

        context.bezierCurveTo(p.x, p.y, p.cx, p.cy, p.cx, p.cy);
      }

      context.lineTo($(window).width(), $(window).height());
      context.lineTo($(window).width(), 0);
      context.closePath();
      context.fill();

      if (vars.showIndicators) {
        // Draw points
        context.fillStyle = '#000';
        context.beginPath();
        for (var i = 0; i <= vars.totalPoints - 1; i++) {
          var p = points[i];

          context.rect(p.x - 2, p.y - 2, 4, 4);
        }
        context.fill();

        // Draw controls
        context.fillStyle = '#fff';
        context.beginPath();
        for (var i = 0; i <= vars.totalPoints - 1; i++) {
          var p = points[i];

          context.rect(p.cx - 1, p.cy - 1, 2, 2);
        }
        context.fill();
      }
    }

    /**
     * Resize handler
     */
    function resizeHandler() {
      initCanvas();
      initCanvasContacts();

    }
    $(window).on('resize', resizeHandler).trigger('resize');
    $('a[href="#"]').click(function(e){ e.preventDefault() });

    enquire.register("screen and (min-width:1240px)", {
        match : function() {
          $('html').addClass('rem');
        },
        unmatch : function() {
          $('html').removeClass('rem');
          $('html').css('font-size', '1px');
        },
        deferSetup : true
    });

    function remSize() {
      var w = $(window).width();
      if (w >= 1240) {
        var k = w / 1920;
        $('html.rem').css('font-size', k);
      }
    };
    remSize();

    $(window).resize( $.debounce( 250, function(e){
      remSize();
    }));

});

