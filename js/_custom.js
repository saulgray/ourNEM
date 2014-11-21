// Slide in second navbar START
$(function() {
	var bar = $('#headerSlideContainer');
	var top = bar.css('top');
	$(window).scroll(function() {
		if($(this).scrollTop() > 120) {
			bar.stop().animate({'top' : '0px'}, 400);
		} else {
			bar.stop().animate({'top' : top}, 0);
		}
	});
});
// Slide in second navbar END
// SMOOTH SCROLLING START
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
