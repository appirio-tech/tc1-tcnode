// JavaScript Document

$(document).ready(function(){
			
			
			//--------------------------------------------------- Rotation effect for the Main navigation
			$(function(){
				var rotationTimer;
				var startImage = 0;
				var imageNum = 2;
				var contentId;
				
				rotateImage = function(myItem,sImage){
					
					contentId = $(myItem).children()[0];
					startImage = sImage;
					imageNum = startImage;
					
					contentId.style.backgroundPosition = '0px '+(-(imageNum-1)*67)+'px';
					++imageNum;
					rotationTimer = setInterval('changeImage()',100);					
				}
				
				changeImage = function(){
					if( imageNum == 20 ) imageNum = 1;
					
					
					contentId.style.backgroundPosition = '0px '+(-(imageNum-1)*67)+'px';

					++imageNum;
					
				}
				
				clearRotateImage = function(){
					imageNum = startImage;
					contentId.style.backgroundPosition = '0px '+(-(imageNum-1)*67)+'px';
					clearInterval(rotationTimer);
				}
				
			});
			
			//---------------------------------------------- Tabs navigation in the Spotlight area
			$(function(){
					   
				var currentTab = 0;
				var activeTab = 0;
				$('#spotLightTabs LI').each(function(){
					if( this.className.search('on') != -1 ) 
					{
						$('#spotLightContentInner > DIV')[currentTab].style.display ="block";
						activeTab = currentTab;
					}
					else
						$('#spotLightContentInner > DIV')[currentTab].style.display ="none";
					
					++currentTab;
					
					if( activeTab == 3 )
						$($('.spotLightTop')[0]).css('background-image','none');
					else 
						$($('.spotLightTop')[0]).css('background-image','url(i/spotLightTop.png)');
					
				});
				
				showTab = function(myLink,tabIndex){
					// Hide the active tab
					$($('#spotLightContentInner > DIV')[activeTab]).css('display','none');
					// Remove "on" class from the active link
					$($('#spotLightTabs LI')[activeTab]).removeClass('on');
					
					// Highlight the clicked link
					$($(myLink).parents()[0]).addClass('on');
					// Show the new tab
					$($('#spotLightContentInner > DIV')[tabIndex]).fadeIn();
					
					activeTab = tabIndex;
					
					if( activeTab == 3 )
						$($('.spotLightTop')[0]).css('background-image','none');
					else 
						$($('.spotLightTop')[0]).css('background-image','url(i/spotLightTop.png)');
 				}
				
				
				
			});
			

			setCurrentPage = function(textContent){
				document.getElementById('currentPage').innerHTML = textContent;
			}
			
			//---- Zebra stripping for data tables
			$("table.data tr:nth-child(odd)").addClass('even');
			
			
			//--- Table hover
			$("table.data tr").mouseover(function(){
					$(this).addClass('hover');
			});
			
			$("table.data tr").mouseout(function(){
					$(this).removeClass('hover');
			});
			
			//------- Set the content height for IE6
			if( $.browser.msie) 
				if( eval($.browser.version) <= 6 )
					$("#contentInner").css("height",$("#contentInnerInner").height()+"px");
			
});