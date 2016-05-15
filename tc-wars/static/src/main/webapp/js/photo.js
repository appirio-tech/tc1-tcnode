/*
 * Copyright (C) 2011 TopCoder Inc., All Rights Reserved.
 */

/**
 * Used to handle user upload/remove photo logic.
 * 
 * @author pvmagacho
 * @version 1.0
 */
$(document).ready(function() {
    $.ajaxSetup({cache : false});

    var coor = null;



    if($(".popup-wrapper").length > 0) {
        // Remove photo popup open handler
        $('#removePhotoLink').on(ev, function () {
            showPopup('remove-photo');
        });

        // Add secondary email popup open handler
        $('#addSecondaryEmailLink').on(ev, function (e) {
            showPopup('secondary-email');
            e.preventDefault();
        });

        $("#removePhotoButton").live('click', function(){
            hidePopup('remove-photo');
            var request = {};
            request.removalReason = "Self removal";

            $.ajax({
                type: 'post',
                url:  "photo?module=remove",
                data: request,
                cache: false,
                dataType: 'json',
                async : false,
                success: handleRemoveResult
            });
        })

    } else {
        $('#removePhotoLink').click(function() {
            $('.photoPopup').css("height", $(document).height());
            $('.popupRemovePhoto').show();
        });

        /* BUTTON YES REMOVE PHOTO */
        $('.btnYes').live('click', function() {
            $('.popupRemovePhoto').hide();

            var request = {};
            request.removalReason = "Self removal";

            $.ajax({
                type: 'post',
                url:  "photo?module=remove",
                data: request,
                cache: false,
                dataType: 'json',
                async : false,
                success: handleRemoveResult
            });
        });

    }
    
    $('.submitPhotoTrigger').click(function() {
        $('.photoPopup').css("height", $(document).height());
        $('.popupUploadPhoto').show();
    });
    

    /* BUTTON CANCEL UPLOAD PHOTO */
	$('.btnCancel').live('click', function() {
		$('.popupUploadPhoto').hide();
	});
        
	/* BUTTON NO REMOVE PHOTO */
	$('.btnNo').live('click', function() {
		$('.popupRemovePhoto').hide();
	});
	

    /* SHOW WINDOW OPEN FILE */
	photoSelected = function() {
        $('#photoUploadForm').submit(); 
    };
    
    if ($.browser.msie) {
        // IE suspends timeouts until after the file dialog closes
        $('input[name=photoFile]').click(function(event) {
            setTimeout(function() {
                photoSelected();
            }, 0);
        });
    } else {
        // All other browsers behave
        $('input[name=photoFile]').change(photoSelected);
    }
        
    var picWidth = $("#uploadImage").width();
    var picHeight = $("#uploadImage").height();
    
    $('.btnUpload').click(function() {
        if (!previewPath) {
            alert("Please select a photo first");
        } else {
            $("#submitPhotoForum input[name=previewPath]").val(previewPath);
            $("#submitPhotoForum input[name=lx]").val();
            
            if (coor) {
                $("#submitPhotoForum input[name=lx]").val(coor.x);
                $("#submitPhotoForum input[name=ly]").val(coor.y);
                $("#submitPhotoForum input[name=rx]").val(coor.x + coor.w);
                $("#submitPhotoForum input[name=ry]").val(coor.y + coor.h);
                
                $("#submitPhotoForum input[name=picWidth]").val(picWidth);
                $("#submitPhotoForum input[name=picHeight]").val(picHeight);
            }                     

            $("#submitPhotoForum").submit();
        }
        
    });
    
    if (previewPath) {
        $('.popupUploadPhoto').show();
        
        var src = previewPath;
        $("#uploadImage").html("<img>");
        $("#uploadImage").hide();
        $("#uploadImage img").attr("src", src);
        $('#photoUploadRight img').attr("src", src);
        $('#photoUploadRight img').css("width", "140px");
        $('#photoUploadRight img').css("height", "140px");
        
        if (originalFile) {
            $("#photoUploadLeft .locateInput .inner").html(originalFile);
        }
        
        var targetHeight = 400.0, targetWidth = 400.0;
        var newImage = new Image();
        newImage.onload = function onLoadImg() {
            var aspect = newImage.height / newImage.width;
            if (aspect > ( targetHeight / targetWidth )) {
                $("#uploadImage img").css("height", "400px");
                $("#uploadImage img").css("width", Math.round(400/aspect)+"px");
            } else {
                $("#uploadImage img").css("width", "400px");
                $("#uploadImage img").css("height", Math.round(400*aspect)+"px");
            }
            picWidth = $("#uploadImage").width();
            picHeight = $("#uploadImage").height();

            $("#uploadImage").show();
            $("#uploadImage img").Jcrop({
                onChange: showPreview,
                onSelect: showPreview,
                aspectRatio: 140/140
            });
        }
        newImage.src = src;
    }
    
    function showPreview(coords) {
        if (parseInt(coords.w) > 0)
        {
            coor = coords;
            var rx = 136 / coords.w;
            var ry = 136 / coords.h
            
            $('#photoUploadRight img').css({
                width: Math.round(rx * picWidth) + 'px',
                height: Math.round(ry * picHeight) + 'px',
                marginLeft: '-' + Math.round(rx * coords.x + 3) + 'px',
                marginTop: '-' + Math.round(ry * coords.y + 4) + 'px'
            });
        }
    }
    
    function handleRemoveResult(result) {
        if (result.success) {
            $('#photoUploadForm input').val("");
            $(".submitPhotoTrigger:eq(1)").parent().show();
            $("#removePhotoLink").parent().hide();
            
            $("img.memberPhoto").attr("src", "/i/m/nophoto_submit.gif");
            alert("Remove photo successful");
        } else if (result.error) {
            alert(result.error.message);
        }
    }
    
    $('.photoPopup').css("height", $(document).height());
})

