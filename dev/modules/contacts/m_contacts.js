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
  });
}
toggleMap();