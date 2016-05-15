/**
 *	Scripts
 **/
 
$(document).ready(function() {
	
	$('.tableContainer .letteBlacklink').hover(function(){
		var iText = $(this).attr('rel');
		$(this).append('<div class="smallTooltip"><div class="smallTooltipLeft"><div class="smallTooltipRight"><div class="smallTooltipMiddle">'+ iText +'</div></div></div></div>');			
		$(this).parent().find('.smallTooltip').css('margin-left',(-($(this).parent().find('.smallTooltip').width()/2)-4));
		if($.browser.msie && $.browser.version == 7){
			$(this).parent().find('.smallTooltip').css('margin-left',(-($(this).parent().find('.smallTooltip').width()/2)-4));	
		}
	},function(){
		$(this).parent().find('.smallTooltip').remove();
	});
	
	// input hint
	$("input.hint").focus(function() {
        var hint = $(this);
        var val = $(this).val();
        if ($(this).hasClass("hint")) {
            $(this).val("");
            $(this).removeClass("hint");
            $(this).blur(function() {
                if (hint.val() == "" || hint.val() == val) {
                    hint.addClass("hint");
                    hint.val(val);
                }
            })
        }
    })
	
	// home page news headline
	if ($("#newsHeadLineCarousel").length>0) {
		$("#newsHeadLineCarousel").jcarousel({
			scroll: 1,
			auto: 5,
			wrap: "circular",
			initCallback: mycarousel_initCallback,
			itemVisibleInCallback: {
            	onBeforeAnimation: mycarousel_itemVisibleOutCallback
        	},
			// This tells jCarousel NOT to autobuild prev/next buttons
			buttonNextHTML: null,
			buttonPrevHTML: null
		});
	}
	
	// log in , log out
	$(".logIn").click(function() {
		$(".guest").addClass("hide");
		$(".user,.myProfile").removeClass("hide");
	})
	
	$(".logOut").click(function() {
		$(".guest").removeClass("hide");
		$(".user,.myProfile").addClass("hide");
	})
	
	// page setting pull down
	$(".user li.pageSetting").click(function(e){
		if($(e.target).parents("a").attr("class")=="hoverBtn"){
			var $me = $(this);
				if(!$me.hasClass("hover")){
				$me.prev().css("background","none");
				$me.addClass("hover");
				$me.children(".subNav").removeClass("hide");
			}
		}
	});
	
	// close page setting
	$(".user li.pageSetting .redBtn, .user li.pageSetting .greyBtn").click(function(){
		$(".user li.pageSetting").css("background","url(i/name-divider.png) right 1px no-repeat");
		$(".user li.pageSetting").removeClass("hover");
		$(".user li.pageSetting").children(".subNav").addClass("hide");
	})
	
	// top nav pull down
	$("#topNav>ul>li").hover(
		function(){
			var $me = $(this);
			if($me.find(".subNav").length != 0){
				$me.children("a").addClass("firstLevel");
				$me.children("a").css("text-shadow","#333333 0 -1px 0");
				$me.children(".subNav").removeClass("hide");
				if($.browser.msie && $.browser.version == 6){
					$("#topNav .subNav .content ul li a span.over").width($("#topNav .subNav .content ul li a").width());
				}
			}
		},
		function(){
			var $me = $(this);
			$me.children("a").removeClass("firstLevel");
			$me.children(".subNav").addClass("hide");
		}
	);
	
	// topTen hint
	$(".topTen a.hint").click(function(){
		switch($(".topTenSelect").val()){
			case "topTenAlgo":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedCoders');
				break;
			case "topTenAlgoSchools":
				openWin('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topSchools','schoolrankinfo', 500, 500);
				break;
			case "topTenAlgoCountries":
				openWin('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topCountries','countryrankinfo', 500, 500);
				break;
			case "topTenDes":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedDesigners');
				break;
			case "topTenDev":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedDevelopers');
				break;
			case "topTenMM":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedMMCoders');
				break;
			case "topTenConceptualization":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedConceptors');
				break;
			case "topTenSpecification":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedSpecificators');
				break;
			case "topArchitecture":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedArchitects');
				break;
			case "topAssembly":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedAssemblers');
				break;
			case "topTestSuites":
				infoWindow('http://www.topcoder.com/tc?module=Static&d1=statistics&d2=info&d3=topRatedTesters');
				break;
			default:
				break;
		}
	});
	
	// contest list
	$("#contestList li .node").click(function(){
		if($(this).hasClass("expanded")){
			$(this).removeClass("expanded");
			$(this).addClass("collapsed");
			$(this).siblings("ul").addClass("hide");
		}
		else{
			$(this).removeClass("collapsed");
			$(this).addClass("expanded");
			$(this).siblings("ul").removeClass("hide");
		}
	});
	
	// filter
	$("#filterContainer .content .struct li .optionsContainer .optionBtn").click(function(){
		if($(this).hasClass("collapsed")){
			$(this).html("Hide options");
			$(this).removeClass("collapsed");
			$(this).addClass("expanded");
			$("#filterContainer .content .struct").addClass("full");
			$("#filterContainer .content .struct .more").removeClass("hide");
			$("#filterContainer .content>.rightSide>.inner").addClass("expanded");
		}
		else{
			$(this).html("Show more options");
			$(this).removeClass("expanded");
			$(this).addClass("collapsed");
			$("#filterContainer .content .struct").removeClass("full");
			$("#filterContainer .content .struct .more").addClass("hide");
			$("#filterContainer .content>.rightSide>.inner").removeClass("expanded");
		}
	});
	
	$(".optionsContainer li.first input[type='checkbox']").click(function(){
		if($(this).attr("checked")){
			$(this).parent().siblings().children("input[type='checkbox']").attr("checked", true);
		}
		else{
			$(this).parent().siblings().children("input[type='checkbox']").attr("checked", false);
		}
	});
	
	$(".optionsContainer li.more input[type='checkbox']").click(function(){
		if($(this).attr("checked")){
			if(!$(this).parent().hasClass("sub")){
				$(this).parent().nextAll().each(function(){
					if($(this).hasClass("sub")){
						$(this).children().attr("checked", true);
					}
					else{
						return false;
					}
				});
			}
			else{
				var allSubChecked = true;
				$(this).parent().prevAll().each(function(){
					if(!$(this).hasClass("sub")){
						return false;
					}
					else if(!$(this).children().attr("checked")){
						allSubChecked = false;
					}
				});
				$(this).parent().nextAll().each(function(){
					if(!$(this).hasClass("sub")){
						return false;
					}
					else if(!$(this).children().attr("checked")){
						allSubChecked = false;
					}
				});
				if(allSubChecked){
					$(this).parent().prevAll().each(function(){
						if(!$(this).hasClass("sub")){
							$(this).children().attr("checked", true);
							return false;
						}
					});
				}
			}
			var allChecked = true;
			$(this).parent().siblings(".more").children("input[type='checkbox']").each(function(){
				if(!$(this).attr("checked")){
					allChecked = false;
				}
			})
			if(allChecked){
				$(this).parent().siblings(".first").children("input[type='checkbox']").attr("checked", true);
			}
		}
		else{
			$(this).parent().siblings(".first").children("input[type='checkbox']").attr("checked", false);
			if(!$(this).parent().hasClass("sub")){
				$(this).parent().nextAll().each(function(){
					if($(this).hasClass("sub")){
						$(this).children().attr("checked", false);
					}
					else{
						return false;
					}
				});
			}
			else{
				$(this).parent().prevAll().each(function(){
					if(!$(this).hasClass("sub")){
						$(this).children().attr("checked", false);
						return false;
					}
				});
			}
		}
	});
	
	// clear filter
	$("#filterContainer .greyBtn").click(function(){
		$(".optionsContainer input[type='checkbox']").attr("checked", false);
		$("#filterContainer .datepicker").val("MM/ DD/ YYYY");
		$(".priceFilter input:eq(0)").val("0");
		$(".priceFilter input:eq(1)").val("6000+");
		$("#slider").slider({values:[0, 6000]});
	});
	
	if ($(".datepicker").length > 0) {
		$(".datepicker").datepicker({
			showOn: "button",
			buttonImage: "i/calendar-icon.png",
			buttonImageOnly: true
		});
		$(".dp-choose-date").click(function(){
			$(this).prev().trigger("focus");
		});
	}
	
	$(".dateSelect").change(function(){
		switch($(this).val()){
			case "Before":
			case "After":
			case "On":
				$(this).next().css("display", "block");
				break;
			case "Between":
				$(this).next().css("display", "block");
				$(this).next().children(".between").removeClass("hide");
				break;
			default:
				$(this).next().css("display", "none");
				$(this).next().children(".between").addClass("hide");
				break;
		}
	});
	
	// td hover
	$(".contestTable table tbody tr:nth-child(even)").addClass("even");
	$(".contestTable table tbody tr").hover(
		function(){
			$(".contestTable table tbody tr.hover").removeClass("hover");
			$(this).addClass("hover");
			$(".contestTable .tableContainer .tdHover:eq(0)").css("top",($(this).offset().top - $(".contestTable .tableContainer").offset().top)+"px");
			$(".contestTable .tableContainer .tdHover:eq(1)").css("top",($(this).offset().top - $(".contestTable .tableContainer").offset().top) + $(this).height() - 2 +"px");
			$(".contestTable .tableContainer .tdHover").removeClass("hide");
		}
		,
		function(){}
	);
	$(".contestTable table thead tr").hover(
		function(){
			$(".contestTable table tbody tr.hover").removeClass("hover");
			$(".contestTable .tableContainer .tdHover").addClass("hide");
		},
		function(){}
	)
	$(".tableContainer").hover(
		function(){},
		function(){
			$(".contestTable table tbody tr.hover").removeClass("hover");
			$(".contestTable .tableContainer .tdHover").addClass("hide");
		}
	)
	
		/* dataTable line toggle color */
		$("table.dataTable").find("tr").each(function(index){
			if(index>0){
				if(index%2==0){$(this).addClass("odd");}else{$(this).addClass("even");}
			}
		});
	
	// slider
	if ($("#slider").length > 0) {
		$( "#slider").slider({
			range: true,
			min: 0,
			max: 6000,
			values: [ 0, 6000 ],
			slide: function( event, ui ) {
				var value0 = ui.values[0];
				var value1 = ui.values[1];
				$(".priceFilter input:eq(0)").val(value0 == 6000 ? "6000+" : value0);
				$(".priceFilter input:eq(1)").val(value1 == 6000 ? "6000+" : value1);
			}
		});
		var value0 = $("#slider").slider("values", 0);
		var value1 = $("#slider").slider("values", 1);
		$(".priceFilter input:eq(0)").val(value0 == 6000 ? "6000+" : value0);
		$(".priceFilter input:eq(1)").val(value1 == 6000 ? "6000+" : value1);
		$("#slider").removeClass("ui-corner-all");
		$(".ui-slider-handle").removeClass("ui-corner-all");
		$(".ui-slider-handle").removeClass("ui-state-default");
		
		$(".priceFilter input").change(function(){
			var value0 = parseInt($(".priceFilter input:eq(0)").val());
			var value1 = parseInt($(".priceFilter input:eq(1)").val());
			if(value0 > value1){
				value0 = value1;
			}
			if(value1 < value0){
				value1 = value0;
			}
			$("#slider").slider({values:[value0 == "6000+" ? 6000 : value0, value1 == "6000+" ? 6000 :value1]});
		});
	}
	
	$("#topNav li a.current,#topNav .subNav .content ul li a span").css("text-shadow","#333333 0 -1px 0");
	
	// browser fixes
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/chrome\/([\d.]+)/)!=null){
		$("#filterContainer .content .struct li .moreOptions .dateFilter p img").css("top","2px");
	}
	if(ua.match(/version\/([\d.]+).*safari/)!=null){
		$("#filterContainer .content .struct li .moreOptions .dateFilter p img").css("top","2px");
	}
	
	if($.browser.msie && $.browser.version == 6){
		DD_belatedPNG.fix("#header,.logo,#topNav li a.current .arrow,.search .icon,.bulletLink,#name .subNav .head,#name .subNav .head .inner,#name .subNav .content,#name .subNav .content .rightSideCustom,#name .subNav .content .innerSide,#name .subNav .foot,#name .subNav .foot .rightSide,#name .subNav .foot .inner,.over,#contestList li.current .arrow,.ui-slider-handle");
		$("#contestList li, .contestTable .tableContainer, .tools .content li, #newsContainer .content").css("zoom","1");
		$("#topNav .subNav .content ul li").hover(
			function(){
				$(this).find(".over").css("display","block");
			}
			,
			function(){
				$(this).find(".over").css("display","none");
			}
		);
	}
	if($.browser.msie && $.browser.version == 7){
		$("#contestList li.current a span,#contestList li ul").css("zoom","1");
	}
});

function mycarousel_initCallback(carousel) {
    $("#newsHeadLineCarouselNav a").bind("click", function() {
        carousel.scroll($.jcarousel.intval($(this).text()));
		$(this).parents("ul").find(".active").removeClass("active");
		$(this).parent().addClass("active");
        return false;
    });
};

function mycarousel_itemVisibleOutCallback(carousel, item, idx, state){
	$("#newsHeadLineCarouselNav").find(".active").removeClass("active");
	$("#newsHeadLineCarouselNav li").eq(idx%$("#newsHeadLineCarouselNav li").length-1).addClass("active");
}

function openWin(url, name, w, h) {
    var left = Math.round((screen.availWidth - w)/2);
    var top = Math.round((screen.availHeight-h)/2);
    win = window.open(url, name, "scrollbars=yes,toolbar=no,resizable=yes,menubar=no"
            + ",width=" + w + ",height=" + h
            + ",left=" + left + ",top=" + top);
    win.location.href = url;
    win.focus();
}

function infoWindow(url) {
  var width = 300
  var height = 250
  var left = (screen.availWidth - width) / 2;
  var top = (screen.availHeight-height)/2;
  OpenWin=this.open(url,"Info",
            "toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes"
            + ",width=" + width + ",height=" + height
            + ",left=" + left + ",top=" + top);
}


