function mobileHeader() {
  $('.btn-nav a').on('click', function() {
    var $btnNav = $(this).parent();
    $btnNav.toggleClass('is-open');
    $btnNav.next().toggleClass('is-open');
  });
}
mobileHeader();

$('#header nav button').on('click', function(){
  if ( $(this).parents('nav').hasClass('is-open') ) {
    $('.btn-nav').removeClass('is-open');
    $('.btn-nav').next().removeClass('is-open');
  }

});