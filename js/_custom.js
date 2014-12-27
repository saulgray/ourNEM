
	$.i18n.init({
		//lng: 'en-US',
		ns: { namespaces: ['ns.common', 'ns.special'], defaultNs: 'ns.special'},
		useLocalStorage: false,
		debug: true
	}, function(t) {
		$('#add').text($.t('ns.common:add'));
		$('#appname').text($.t('app.name'));
		$('#appclient').text($.t('app.client'));

		$('#navclient').text($.t('nav.client'));
		$('#navbuy').text($.t('nav.buy'));
		$('#navfaq').text($.t('nav.faq'));
		$('#navtech').text($.t('nav.tech'));
		$('#navupdate').text($.t('nav.update'));
		$('#navlang').text($.t('nav.lang'));

		$('#clientsheader1').text($.t('clients.header1'));
		$('#clientsabout1').text($.t('clients.about1'));
		$('#clientsclick1').text($.t('clients.click1'));
		$('#clientshelp1').text($.t('clients.help1'));
		$('#clientslink1').text($.t('clients.link1'));

		$('#clientsheader2').text($.t('clients.header2'));
		$('#clientsabout2').text($.t('clients.about2'));
		$('#clientsclick2').text($.t('clients.click2'));

		$('#statsnis').text($.t('stats.nis'));
		$('#statsacc').text($.t('stats.acc'));
		$('#statsdorm').text($.t('stats.dorm'));
		$('#statsavg').text($.t('stats.avg'));

		$('#buyheader').text($.t('buy.header'));
		$('#buybox1').text($.t('buy.box1'));
		$('#buybox1click').text($.t('buy.box1click'));
		$('#buybox2').text($.t('buy.box2'));
		$('#buybox2click').text($.t('buy.box2click'));
		$('#buybox3').text($.t('buy.box3'));
		$('#buybox3click').text($.t('buy.box3click'));


		$('#faqheader').text($.t('faq.header'));
		$('#faqreadfaq').text($.t('faq.readfaq'));
		$('#faqirc').text($.t('faq.irc'));
		$('#faqforum').text($.t('faq.forum'));
		$('#faqwiki').text($.t('faq.wiki'));

		$('#footerlogotext').text($.t('footer.logotext'));

		$('#footerresources').text($.t('footer.resources'));
		$('#footerresources1').text($.t('footer.resources1'));
		$('#footerresources2').text($.t('footer.resources2'));
		$('#footerresources3').text($.t('footer.resources3'));
		$('#footerresources4').text($.t('footer.resources4'));
		$('#footerresources5').text($.t('footer.resources5'));
		$('#footerresources6').text($.t('footer.resources6'));

		$('#footerarticles').text($.t('footer.articles'));
		$('#footerarticles1').text($.t('footer.articles1'));
		$('#footerarticles2').text($.t('footer.articles2'));
		$('#footerarticles3').text($.t('footer.articles3'));
		$('#footerarticles4').text($.t('footer.articles4'));
		$('#footerarticles5').text($.t('footer.articles5'));
		$('#footerarticles6').text($.t('footer.articles6'));

		$('#footernewsletters').text($.t('footer.newsletters'));
		$('#footernewsletters1').text($.t('footer.newsletters1'));
		$('#footernewsletters2').text($.t('footer.newsletters2'));
		$('#footernewsletters3').text($.t('footer.newsletters3'));
		$('#footernewsletters4').text($.t('footer.newsletters4'));
		$('#footernewsletters5').text($.t('footer.newsletters5'));
		$('#footernewsletters6').text($.t('footer.newsletters6'));

		$("#linkHtml").i18n();
		$("#link2Html").i18n();
		$("#faqnavwhat").i18n();
		$("#navlang").i18n();
		$("#navtech").i18n();




		$('#insert').text($.t('app.insert', {youAre: 'great'}))
		$('#singular').text($.t('app.child', {count: 1}))
		$('#plural').text($.t('app.child', {count: 3}))
		$('#nesting').text($.t('app.district'));
		$('#male').text($.t('app.friend_context', {context: 'male'}))
		$('#female').text($.t('app.friend_context', {context: 'female'}))

		$('.nav').i18n();
		$('#btn').i18n();
		$('#extendedAttr').i18n();
	});

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
