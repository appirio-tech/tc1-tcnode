
$(document).ready(function(){
		
		// Setup the carousel functionalities
		
		setHoverClickFunctions = function(carousel){
			
			carousel.setup();
			
			$('#mycarousel LI').bind('mouseover', function(){
				carousel.stopAuto();
			});

			$('#mycarousel LI').bind('mouseout', function(){
				carousel.startAuto(5);
			});
			
			$(carousel.buttonNext).bind('click',function(){
				carousel.next();
			});
			
			$(carousel.buttonPrev).bind('click',function(){
				carousel.prev();
			});

		}
		
		$('#mycarousel').jcarousel({
			start: 1,
			scroll: 1,
			auto: 5,
			wrap: "both",
			initCallback: setHoverClickFunctions
		});
		
		
		initMessages = function(){	
		
            var mouseOverIcon = 0;
            var currentPopup = -1;
            var totalPopups = 0;
            popupRotate = function() {
                if (mouseOverIcon == 0) {
                    if (currentPopup != -1) {
                        hidePopup($("#popup").children()[currentPopup], 800);
                    }
                    ++currentPopup;
                    if (currentPopup >= (totalPopups - 1)) {
                        currentPopup = 0;
                    }
                    showPopup($("#popup").children()[currentPopup], 800);
                }
            }

			setPopupPosition = function(linkLeft, linkTop){
				
				var last_popup = $("#popup").children().length - 1;
				
				var my_popup = $("#popup").children()[last_popup];
				
				var popup_height = $(my_popup).height();
				
				var popup_width = $(my_popup).width();
				
				linkTop = linkTop.substr(0, linkTop.length - 2 );
				linkLeft = linkLeft.substr(0, linkLeft.length - 2 );
				
				// Set the popup position so it can fit on the screen
				if( eval(linkLeft) + popup_width > $("#header").width() )
				{
					
					$($(my_popup).children()[1]).css("padding-left", (eval(linkLeft) + popup_width - $("#header").width() + 15 + (($("#header").width() - popup_width) / 5))+'px');
					
					linkLeft = $("#header").width() - popup_width - (($("#header").width() - popup_width) / 5);

				}
			
				$(my_popup).css('left',linkLeft+'px');
				$(my_popup).css('top',( eval(linkTop) - eval(popup_height) )+'px');
						
			}
			
			showPopup = function(myPopup, fadeTime){
                if (currentPopup != -1) { hidePopup($("#popup").children()[currentPopup], 50);}
				$(myPopup).fadeIn(fadeTime);
			}
			
			hidePopup = function(myPopup, fadeTime){
				$(myPopup).fadeOut(fadeTime);
			}
							
			parseXMLFile = function(data){
				
				var person_num = 1;
				
				$("message",data).each(function(){
						
						// Get the message content from the XML file
						var message = $(this).text();
												
						// Add new person icon (link) to the header
						if( person_num < 4 )
							$("#popupLinks").append("<a href='#' class='personGroup1 person person"+person_num+"'></a>");
						else if( person_num < 11 )
							$("#popupLinks").append("<a href='#' class='personGroup2 person person"+person_num+"'></a>");
						else
							$("#popupLinks").append("<a href='#' class='personGroup3 person person"+person_num+"'></a>");
						
						var last_link = $("#popupLinks").children().length - 1; 
						var my_link = $("#popupLinks").children()[last_link];
						var left = $(my_link).css('left');
						var top = $(my_link).css('top');
						
						// Add new popup
						$("#popup").append("<div class='popup'><div class='popupContent'><p>"+message+"</p></div><div class='popupBottom'><div class='popupArrow'></div></div></div>");
						
						var last_popup = $("#popup").children().length - 1;
						var my_popup = $("#popup").children()[last_popup];
						
						$(my_link).mouseover(function(){
                                mouseOverIcon = 1;
								showPopup( my_popup, 50 );
						});
						
						$(my_link).mouseout(function(){
                                mouseOverIcon = 0;
								hidePopup( my_popup, 50 );
						});
						
						setPopupPosition(left,top);
						
						++person_num;
				});

                totalPopups = person_num;
	
			}
			
			
			// Read the messages from the XML file
			$.ajax({
															   
				url: "/xml/messages.xml",
				dataType: ($.browser.msie) ? "text" : "xml",
																 
				success: function(data){
					var xml;
			
					if( typeof data == "string" ){
						xml = new ActiveXObject("Microsoft.XMLDOM");
						xml.async = false;
						xml.loadXML(data);
						parseXMLFile(xml);
					}else{
						xml = data;
						parseXMLFile(xml);
					}
				}
			});
			
            $("#popupLinks").everyTime(5000, 'popup-rotate', popupRotate);
		}
		
		initMessages();
		
});
