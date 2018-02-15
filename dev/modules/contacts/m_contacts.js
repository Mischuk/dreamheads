function toggleMap() {
  var $list =  $('.contacts-list .list');
  var $toggleButton = $('.back-to-list');
  var $mapBg = $('.map-bg');
  // Show map


  $('#toggle-map').on('click', function(){
    $toggleButton.addClass('is-open');
    $list.animate({
      'opacity': '0'
    }, {
      easing: 'linear',
      duration: 500,
      complete: function() {
        $list .css({'z-index': '-1'});
      }
    });
    $mapBg.animate({
      'opacity': '0'
    }, {
      easing: 'linear',
      duration: 500,
      complete: function() {
        $mapBg.css({'z-index': '-1'});
      }
    });


    var mapOptions = {
      scaleControl: true,
      disableDefaultUI: false
    };
    map.setOptions(mapOptions);

    $('.contacts-form, .contacts-canvas').addClass('anim-right');

  });

  // Hide map
  $toggleButton.on('click', function(){
    $(this).removeClass('is-open');
    $list.css({'z-index': '10'});
    $list.animate({
      'opacity': '1'
    }, {
      easing: 'linear',
      duration: 500
    });
    $mapBg.css({'z-index': 'auto'});
    $mapBg.animate({
      'opacity': '1'
    }, {
      easing: 'linear',
      duration: 500
    });
    var mapOptions = {
      scaleControl: false,
      disableDefaultUI: true,
    };
    map.setOptions(mapOptions);
    $('.contacts-form, .contacts-canvas').removeClass('anim-right');
  });
}
toggleMap();

function attachFiles() {
  $('#attach-form-input').change(
    function(e){
      var attach_label = '';
      var names = [];

      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        names.push($(this).get(0).files[i].name);
      }
      if ( $(this).get(0).files.length == 1 ) {
        var attach_label = 'Файл: '
      }
      if ( $(this).get(0).files.length > 1 ) {
        var attach_label = 'Файлы: '
      }
      if ( jQuery.isEmptyObject(names) == false) {
        $('.attached-file .value').text(attach_label + names).addClass('attached');
      } else if ( jQuery.isEmptyObject(names) == true &&  !$('.attached-file .value').text() == '') {
        return false;
      } else {
        $('.attached-file .value').text('').removeClass('attached');
      }
      $.fn.fullpage.reBuild();
    }
  );
}

attachFiles();

function submitForm() {
  $('form[name=lead-form]').submit(function(){
    $(this).find('input, textarea').val('');
    $('.m_contacts .contacts-form .form-row .attached-file .value').text('');
    $('.success-submit').fadeIn(300);
    return false;
  });
}
submitForm();