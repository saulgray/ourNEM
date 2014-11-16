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
