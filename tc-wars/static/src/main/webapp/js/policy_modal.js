$(document).ready(function(){
	/* Privacy Policy */
    $("#privacyPolicyBtn").click(function(){
    	loadModal("privacyPolicyModal");
    	var $modal = $("#privacyPolicyModal");
    	$modal.css("overflow-y", "scroll");
    	$modal.css("top", "10px");
    	$modal.css("height", ($(window).height() - 20) + "px");
    });
});

//load Modal pop-up and dim background
loadModal = function(itemId) {
	closeModal();
	var popup=$("#"+itemId);
    $('#modalBackground').css("display", "block");
	$("#modalBackground").css("z-index",popup.css("z-index")-1);
    popup.css("display", "block");
    positionModal(popup);
    
	popup.find(".btnClose").bind("click", function () {
		closeModal();
});
	popup.find(".done").bind("click", function () {
		closeModal();
	});
};

//close Modal pop-up and remove it's background
closeModal = function() {
   	$('#modalBackground').css("display", "none");
	$('.modal').css("display", "none");
};

/* Position modal */
function positionModal( itemPopup) {
    var wWidth  = window.innerWidth;
    var wHeight = window.innerHeight;

    if (wWidth==undefined) {
        wWidth  = document.documentElement.clientWidth;
        wHeight = document.documentElement.clientHeight;
    }
    var boxLeft = parseInt((wWidth / 2) - ( itemPopup.width() / 2 ));
    var boxTop  = parseInt((wHeight / 2) - ( itemPopup.height() / 2 ));
	
	itemPopup.css('top', boxTop+"px");
	itemPopup.css('left', boxLeft+"px");
}