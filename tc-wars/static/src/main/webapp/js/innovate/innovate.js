/* Engage */


var currentCarouselItem = 4;        // For Carousel
var totalCarouselItem = 5;          // For Carousel
var autoRotateTime = 3000;          // For Carousel : in milliseconds, zero for no rotation
var currentOrganizationImage = 1;   // For Organization Image Fade In / Fade Out
var totalOrganizationImage = 6;     // For Organization Image Fade In / Fade Out
var autoTimeImageFadeIn = 3000;     // For Organization Image Fade In / Fade Out


jQuery(document).ready(function() {
    // Ride the carousel...
    $("#btn" + currentCarouselItem).addClass("on");
    $("#engage-carousel").jcarousel({
        start: currentCarouselItem,
        auto: autoRotateTime / 1000,    // Pass in seconds
        animation: 'normal',
        wrap: "both",
        scroll: 1,
        initCallback: engage_carousel_initCallback,
        itemVisibleInCallback: engage_carousel_itemVisibleInCallback,
        // This tells jCarousel NOT to autobuild prev/next buttons
        buttonNextHTML: null,
        buttonPrevHTML: null
    });

    // Organization logo
    fadeInCallback = function() {
        $('#logo' + currentOrganizationImage).fadeOut(autoTimeImageFadeIn, fadeOutCallback);
        currentOrganizationImage = (currentOrganizationImage % totalOrganizationImage) + 1;
    }
    fadeOutCallback = function() {
        $('#logo' + currentOrganizationImage).fadeIn(autoTimeImageFadeIn, fadeInCallback);
    }
    $('#org .org_logo').hide();
    $('#logo' + currentOrganizationImage).show();
    fadeOutCallback();

// misc 
	$('#btn-lets-talk').click(function() { 
        $('#engage-info').hide(); 
        $('#engage-contact').show(); 
		$('#lets_talk').hide(); 
		$('#lets_talk_grey').show(); 
    }); 
    $('#header').css('z-index', '100');
    $('#header .wrapper').css('z-index', '100');
});

function engage_carousel_initCallback(carousel){
    $('.jcarousel-control a').bind('click', function() {
        $('.jcarousel-control .btn-num').removeClass('on');
        $('#' + this.id).addClass('on');
        autoScroll = false;
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        currentCarouselItem = Number(jQuery(this).text());
        return false;
    });


    $('#engage-carousel-next').bind('click', function() {
        $('.jcarousel-control .btn-num').removeClass('on');
        currentCarouselItem = (currentCarouselItem % totalCarouselItem) + 1;
        $('#btn' + currentCarouselItem).addClass('on');
        autoScroll = false;
        carousel.next();
        return false;
    });

    $('#engage-carousel-prev').bind('click', function() {
        $('.jcarousel-control .btn-num').removeClass('on');
        currentCarouselItem = (currentCarouselItem - 1) % totalCarouselItem == 0 ? totalCarouselItem : (currentCarouselItem - 1) % totalCarouselItem;
        $('#btn' + currentCarouselItem).addClass('on');
        autoScroll = false;
        carousel.prev();
        return false;
    });
};

var autoScroll = false;
function engage_carousel_itemVisibleInCallback(carousel) {
    $('.jcarousel-control .btn-num').removeClass('on');
    if (autoScroll == true)
        currentCarouselItem = (currentCarouselItem % totalCarouselItem) + 1;
    $('#btn' + currentCarouselItem).addClass('on');
    autoScroll = true;
};
