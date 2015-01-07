
	$.i18n.init({
		//lng: 'en-US',
		ns: { namespaces: ['ns.common', 'ns.special'], defaultNs: 'ns.special'},
		useLocalStorage: false,
		debug: true
	}, function(t) {
		$('#add').text($.t('ns.common:add'));
		$('#appname').text($.t('app.name'));
		$('#appclient').text($.t('app.client'));
		<!-- OURNEM HOMEPAGE -->
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
		<!-- SPECIAL LINKS -->
		$("#linkHtml").i18n();
		$("#link2Html").i18n();
		$("#faqnavwhat").i18n();
		$("#navlang").i18n();
		$("#navtech").i18n();
		<!-- FAQ PAGE -->
		$('.headerFAQS').text($.t('faqs.headerFaqs'));

		$('#sideNavWhat').text($.t('faqs.nav.what'));
		$('#sideNavHistory').text($.t('faqs.nav.history'));
		$('#sideNavRedeem').text($.t('faqs.nav.redeem'));
		$('#sideNavDistr').text($.t('faqs.nav.distr'));
		$('#sideNavBit').text($.t('faqs.nav.bit'));
		$('#sideNavJava').text($.t('faqs.nav.java'));
		$('#sideNavInstall').text($.t('faqs.nav.install'));
		$('#sideNavBuy').text($.t('faqs.nav.buy'));

		$('.first').text($.t('faqs.whatHeader'));
		$('#whatContent').text($.t('faqs.whatContent'));

		$('#historyHeader').text($.t('faqs.historyHeader'));
		$('#historyContent li:nth-child(1)').text($.t('faqs.history1'));
		$('#historyContent li:nth-child(2)').text($.t('faqs.history2'));
		$('#historyContent li:nth-child(3)').text($.t('faqs.history3'));
		$('#historyContent li:nth-child(4)').text($.t('faqs.history4'));
		$('#historyContent li:nth-child(5)').text($.t('faqs.history5'));
		$('#historyContent li:nth-child(6)').text($.t('faqs.history6'));
		$('#historyContent li:nth-child(7)').text($.t('faqs.history7'));
		$('#historyContent li:nth-child(8)').text($.t('faqs.history8'));
		$('#historyContent li:nth-child(9)').text($.t('faqs.history9'));
		$('#historyContent li:nth-child(10)').text($.t('faqs.history10'));

		$('#distrbtnHeader').text($.t('faqs.distrbtnHeader'));
		$('#distrbtnIntro').text($.t('faqs.distrbtnIntro'));
		$('#distrbtnStats li:nth-child(1)').text($.t('faqs.distrbtn1'));
		$('#distrbtnStats li:nth-child(2)').text($.t('faqs.distrbtn2'));
		$('#distrbtnStats li:nth-child(3)').text($.t('faqs.distrbtn3'));
		$('#distrbtnStats li:nth-child(4)').text($.t('faqs.distrbtn4'));
		$("#distrbtnStats li:nth-child(5)").i18n();


		$('#bitHeader').text($.t('faqs.bitHeader'));
		$('#bitIntro').text($.t('faqs.bitIntro'));
		$('#bitInstructions li:nth-child(1)').i18n();
		$('#bitInstructions li:nth-child(2)').i18n();
		$('#bitInstructions li:nth-child(3)').i18n();
		$('#bitInstructions li:nth-child(4)').i18n();

		$('#javaHeader').text($.t('faqs.javaHeader'));
		$('#javaText').i18n();
		$('#javaWindowsHead').i18n();
		$('#javaWindowsVideo').i18n();
		$('#javaWindowsMan').i18n();
		$('#javaMacHead').i18n();
		$('#javaMacVideo').i18n();
		$('#javaMacMan').i18n();
		$('#javaLinuxHead').i18n();
		$('#javaLinuxVideo').i18n();
		$('#javaLinuxMan').i18n();

		$('#installClient').text($.t('faqs.installClient'));
		$('#installStep1').i18n();
		$('#installStep2').i18n();
		$('#installStep3').i18n();
		$('#installStep4').i18n();

		$('#buyNemHead').text($.t('faqs.buyNemHead'));
		$('#buyNem').i18n();
		$('#buyBitcoin').text($.t('faqs.buyBitcoin'));
		$('#buyBitcoinInfo').i18n();
		$('#buyingBitcoin1').i18n();
		$('#buyingBitcoin2').i18n();
		$('#buyingBitcoin3').i18n();
		$('#buyingBitcoin4').i18n();
		$('#buyingBitcoin5').i18n();
		$('#buyingNem').text($.t('faqs.buyingNem'));
		$('#buyingNem1').i18n();
		$('#buyingNem2').i18n();
		$('#buyingNem3').i18n();
		$('#buyingNem4').i18n();
		$('#buyingNem5').i18n();



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
