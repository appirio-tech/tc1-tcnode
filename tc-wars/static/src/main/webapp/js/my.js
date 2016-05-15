$(document).ready(function(){

/*function equalHeights(element) { 
 var maxHeight = 0; 
 var maxItem;
 var maxItem_adjust;
element.children().each(function(i){ 
 jQuery(this).wrapInner('<div></div>'); 
 }); 
  
 function heightChecker(){ 
 element.children().each(function(i){ 
 if(jQuery(this).outerHeight() > maxHeight) { 
 maxHeight = jQuery(this).height();
 maxItem = jQuery(this);
 setHeight(maxHeight);
 } 
 }); 
  
 maxItem_adjust =maxItem.height();
 if(maxHeight > (maxItem.children().height() )){
 maxHeight = maxItem.children().height() ;
 setHeight(maxHeight); 
 }
  
 setTimeout(function(){heightChecker()}, 30) 
 } 
  
 function setHeight(target){
 element.children().each(function(i){
 var adjust = jQuery(this).outerHeight()-jQuery(this).height(); 
 if(jQuery.browser.msie && jQuery.browser.version < 7.0){
 jQuery(this).css({'height': target - adjust }); 
 }
 else{
 jQuery(this).css({'min-height': target - adjust }); 
 }
 })
 }
  
 heightChecker();
}
equalHeights($('.dataMain'));
*/

function my()
{
	
	document.getElementById("rightLink").style.width="122px";
	var k=10;
	while (document.getElementById("rightLink").offsetHeight-20<document.getElementById("forumPostHistory").offsetHeight*4&&k>0)
	{k--;
	document.getElementById("rightLink").style.width = (document.getElementById("rightLink").offsetWidth+10)+"px";}
	//document.getElementById("rightLink").style.height = (document.getElementById("briefText").offsetHeight-20)+"px";
	//document.getElementById("rightLink").style.width="132px";
	if (window.location.toString().search("12_12")+1)
	{
	$(".left").height(250);
		$(".right").height(250);
	}
	else
	if (window.location.toString().search("12_02")+1)
	{
	$(".left").height(350);
		$(".right").height(350);
	}
	else
	var dbt=$("#databoxtable").height();
	//$("#left").height(dbt);
	//$("#right").height(dbt);
	var ri=$("#right").height();
	if ($("#left").height()<ri){
	
		$("#left").css({'height': ri});
	}
	else
	{
		$("#right").css({'height': $("#left").height()});
		
	}


}

$(window).resize(function(){my();})
my();
});