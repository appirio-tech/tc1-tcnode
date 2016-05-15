$(function(){
		 // main menu hover top 
		 $("#menu ul li a").hover(
			   function(){
				   $(this).parent().addClass("hover");
				   $("#menu ul li.last").removeClass("hover");
			   },
			   function(){
				   $(this).parent().removeClass("hover");

			   }
		 );
		// #welcome .crossButton div hover
		$("#welcome .crossButton div").hover(
			 function(){
				 $(this).addClass("hover");
			 },
			 function(){
				 $(this).removeClass("hover");
			 }
		);
		//secondary Navigation place to center for position
		$(".subMenu .tertiaryNav ul").each(function(i){
			  var lengths=$(this).eq(i).width();
			  $(".subMenu .tertiaryNav ul").eq(i).css('margin-left',"0px");
			  if (($.browser.msie) && ($.browser.version == 6.0))
			  {
				  $(".subMenu .tertiaryNav ul").eq(i).css('margin-left',"0px");
			  }
		});
		//when click secondary Navigation item, tertiary navigation appear 
		$(".subMenu .secondaryNav li a.tertiaryNavBT").click(function(){
			  $(this).parent().siblings().removeClass("actived");   // tab change actived
			  $(this).parent().addClass("actived");
			  if (($.browser.msie) && ($.browser.version == 7.0))
			  {
				  $(this).children(".right").css("top","2px");
				  $(this).children(".left").css("top","2px");
			  }
			  if (($.browser.msie) && ($.browser.version == 6.0))
			  {
				  $(this).children(".right").css({'right':'0px','top':'2px'});
				  $(this).children(".left").css({'left':'-31px','top':'2px'});
			  }
			  if(ua.match(/version\/([\d.]+).*safari/)!=null)
			  {
				  $(this).children(".left").css('height','29px');
				  $(this).children(".right").css('height','29px');
			  }
			  $(".subMenu .tertiaryNav ul").addClass("hide");  //which tertiary navigation show
			  $(".subMenu .tertiaryNav ul").css("display",'none');
			  switch($(this).children(".text").text())
			  {
				  case "Competition Rules":
				  $(".subMenu .tertiaryNav .competitionRules").removeClass("hide");
				  $(".subMenu .tertiaryNav .competitionRules").css("display",'inline-block');
				  if(ua.match(/firefox\/([\d.]+)/)!=null && ua.match(/firefox\/([\d.]+)/)[1].split('.')[0]<3)  //fix ff2.0
				  {
					 $(".subMenu .tertiaryNav .competitionRules").css("display",'-moz-inline-box');
				  }
				  var length=$(".subMenu .tertiaryNav .competitionRules").width();
				  $(".subMenu .tertiaryNav .competitionRules").css('margin-left',(920-length)/2+"px");
				  if (($.browser.msie) && ($.browser.version == 6.0))
				  {
					 $(".subMenu .tertiaryNav .competitionRules").css('margin-left',(920-length)/4+"px");
				  }
				  break;
				  case "Sponsors":
				  /*
				  $(".subMenu .tertiaryNav .sponsors").removeClass("hide");
				  $(".subMenu .tertiaryNav .sponsors").css("display",'inline-block');
				  if(ua.match(/firefox\/([\d.]+)/)!=null && ua.match(/firefox\/([\d.]+)/)[1].split('.')[0]<3)  //fix ff2.0
				  {
					 $(".subMenu .tertiaryNav .sponsors").css("display",'-moz-inline-box');
				  }
				  var length=$(".subMenu .tertiaryNav .sponsors").width();
				  $(".subMenu .tertiaryNav .sponsors").css('margin-left',(920-length)/2+"px");
				  if (($.browser.msie) && ($.browser.version == 6.0))
				  {
					 $(".subMenu .tertiaryNav .sponsors").css('margin-left',(920-length)/4+"px");
				  }
				  */
				  break;
				  case "Advancers":
				  $(".subMenu .tertiaryNav .advancers").removeClass("hide");
				  $(".subMenu .tertiaryNav .advancers").css("display",'inline-block');
				  if(ua.match(/firefox\/([\d.]+)/)!=null && ua.match(/firefox\/([\d.]+)/)[1].split('.')[0]<3)  //fix ff2.0
				  {
					 $(".subMenu .tertiaryNav .advancers").css("display",'-moz-inline-box');
				   }
				  var length=$(".subMenu .tertiaryNav .advancers").width();
				  $(".subMenu .tertiaryNav .advancers").css('margin-left',"0px");
				  if (($.browser.msie) && ($.browser.version == 6.0))
				  {
					 $(".subMenu .tertiaryNav .advancers").css('margin-left',"0px");
				  }
				  break;
			  }
		  });
		  //tertiary Navigation hover style
		  $(".subMenu .tertiaryNav ul li a").hover(
				   function(){
					   $(this).parent().addClass("hover");
				   },
				   function(){
					   $(this).parent().removeClass("hover");
				   }
		  );
		 //table even tr add style 
		 $("tr:even>td").addClass("even");

	      //fix browser
		  if (($.browser.msie) && ($.browser.version == 7.0))   //fix ie 7.0
		  {
			  $("table tr th span.right").css({'position':'relative','top':'-10px','right':'-6px'});
			  $(".subMenu .secondaryNav li.actived a span.right").css("top","2px");
			  $(".subMenu .secondaryNav li.actived a span.left").css("top","2px");
			  $("#footer ul").css('margin-bottom','10px');
			  $(".inputText").css({'margin-top':'-15px','margin-left':'40px'});
			  $(".leaderboardTable tr td.last").css('text-align','left');
			  $(".selectDropdownSimulate").css('margin-left','5px');
			  $(".selectDropdownSimulate span.selectSign").css({'top':'2px','right':'-4px'});
			  $(".selectDropdownSimulate .selectList").css('left','5px');
			  $(".subMenu .secondaryNav").css('margin-bottom','-10px');
		  }
		  var Sys = {};
		  var ua = navigator.userAgent.toLowerCase();
		  if(ua.match(/firefox\/([\d.]+)/)!=null && ua.match(/firefox\/([\d.]+)/)[1].split('.')[0]<3)  //fix ff2.0
		  {
			  $(".subMenu .secondaryNav").css('margin-top','12px');
			  $(".subMenu .tertiaryNav").css('margin-top','10px');
			  $("table tr th span.right").css('margin-top','-16px');
			  $("a.fixRight span.rightTopBT").css('right','3px');
			  $("a.fixRight span.rightBottomBT").css('right','3px');
			  $(".subMenu .secondaryNav").css({'margin-top':'3px','margin-bottom':'-10px'});
		  }
		  if(ua.match(/firefox\/([\d.]+)/)!=null && ua.match(/firefox\/([\d.]+)/)[1].split('.')[0]>2)  //fix ff3.0
		  {
			   $("table tr th span.right").css('margin-top','-17px');
			   $(".subMenu .secondaryNav").css('margin-bottom','-10px');
		  }
		
		  if(ua.match(/version\/([\d.]+).*safari/)!=null &&                         // Safari 3
			ua.match(/version\/([\d.]+).*safari/)[1].split('.')[0]<4)
		  {
			  $(".subMenu .secondaryNav li a").css('padding','7px 15px 10px 30px');
			  $(".subMenu .secondaryNav li.actived a span.left").css('height','29px');
			  $(".subMenu .secondaryNav li.actived a span.right").css('height','29px');
			  $(".subMenu .secondaryNav").css('margin-bottom','-12px');
		  }	
		  if(ua.match(/version\/([\d.]+).*safari/)!=null &&           // Safari 4
			ua.match(/version\/([\d.]+).*safari/)[1].split('.')[0]>3)
		  {
			  $(".subMenu .secondaryNav li a").css('padding','7px 15px 10px 30px');
			  $(".subMenu .secondaryNav li.actived a span.right").css('height','29px');
			  $(".subMenu .secondaryNav li.actived a span.left").css('height','29px');
			  $(".subMenu .secondaryNav").css('margin-bottom','-12px');
		  }
		  if(ua.match(/chrome\/([\d.]+)/)!=null && ua.match(/chrome\/([\d.]+)/)[1].split('.')[0]>2) //Chrome 3 
		  {
              $(".subMenu .secondaryNav").css('margin-bottom','-10px');
          }
		  if(ua.match(/chrome\/([\d.]+)/)!=null && ua.match(/chrome\/([\d.]+)/)[1].split('.')[0]<3) //Chrome 2
		  {
              $(".subMenu .secondaryNav").css('margin-bottom','-10px');
          }
		  if (($.browser.msie) && ($.browser.version ==6.0))   //fix ie 6.0
		  {
				$("#header .logo").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/logo.png'");
				$("#header .logo").css("background","none");
				$("#header .topcoderLogo").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/topcoder-logo.png'");
				$("#menu ul li.overview a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-overview.png'");
				$("#menu ul li.overview a span.itemIcon").css("background","none");
				$("#menu ul li.algorithm a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-Algorithm.png'");
				$("#menu ul li.algorithm a span.itemIcon").css("background","none");
				$("#menu ul li.design a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-Design.png'");
				$("#menu ul li.design a span.itemIcon").css("background","none");		
				$("#menu ul li.development a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-Development.png'");
				$("#menu ul li.development a span.itemIcon").css("background","none");		
				$("#menu ul li.studio a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-Studio.png'");
				$("#menu ul li.studio a span.itemIcon").css("background","none");		
				$("#menu ul li.marathon a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-Marathon.png'");
				$("#menu ul li.marathon a span.itemIcon").css("background","none");		
				$("#menu ul li.moddash a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-ModDash.png'");
				$("#menu ul li.moddash a span.itemIcon").css("background","none");		
				$("#menu ul li.arena a span.itemIcon").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/main-menu-Arena.png'");
				$("#menu ul li.arena a span.itemIcon").css("background","none");
				$(".crossButton").css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='i/cross.png'");
				$(".crossButton").css("background","none");
				$(".subMenu .secondaryNav li.actived a span.left").css({'left':'-31px','top':'2px'});
				$(".subMenu .secondaryNav li.actived a span.right").css({'right':'0px','top':'2px'});
				$(".section .logo .leftbottomCorner").css('bottom','-15px');
				$(".section .logo .rightbottomCorner").css('bottom','-15px');
				$(".section .small .leftbottomCorner").css('bottom','-14px');
				$(".section .small .rightbottomCorner").css('bottom','-14px');
				$("#mainbody .rightBottom").css({'bottom':'-6px','right':'-2px'});
				$("#mainbody .leftBottom").css({'bottom':'-6px'});
				$(".homeMainBody .rightBottom").css({'bottom':'-7px','right':'-2px'});
				$(".homeMainBody .leftBottom").css({'bottom':'-7px'});
				$("#content .contentInner .innerBottom .innerLeftBottom").css({'bottom':'-2px','height':'41px'});
				$("#content .contentInner .innerBottom .innerRightBottom").css({'bottom':'-2px','height':'41px'});
				$("#footer ul").css('margin-bottom','10px');
				$("#header .topcoderLogo").css("background","none");
				$("#content .register").css('right','-4px');
				$("#mainbody .rightTop").css('right','-2px');
				$(".subMenu .secondaryNav").css('margin-left','40px');
				$("table tr th span.right").css({'position':'relative','top':'-3px','right':'-6px'});
				$(".secondaryNav li:last-child a .right").css('right','-2px');
		   }	   
});