function expansion_panel() {
  $('.expansion-panel li .ep-header').on('click', function(){
    $(this).next().slideToggle(300);
    $(this).toggleClass('is-open');
  });
}
expansion_panel();