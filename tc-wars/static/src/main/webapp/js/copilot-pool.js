$(document).ready(function() {
    // the  function when the "sort by" select changed
    $("select#sortingDropDownID").change(function() {

        var selectedValue = $(this).val();

        $("#sortingID").val(selectedValue);

        $("#controlForm").submit();
    })
    // the sort function when the "Displaying/Page" select changed
    $("select#pageSizeID").change(function() {
        $("#controlForm").submit();
    })

    // the event when the list view is clicked
    $("a#listViewID").click(function() {
          $("#viewTypeID").val(1);
          $("#controlForm").submit();
    })

	// the event when the grid view is clicked
    $("a#gridViewID").click(function() {
         $("#viewTypeID").val(0);
         $("#controlForm").submit();
    })
    
      // IE6 PNG Fix
      if (navigator.platform == "Win32" && navigator.appName == "Microsoft Internet Explorer" && window.attachEvent) {
            window.attachEvent("onload", enableAlphaImages);
        }

        function enableAlphaImages() {
            var rslt = navigator.appVersion.match(/MSIE (\d+\.\d+)/, '');
            var itsAllGood = (rslt != null && Number(rslt[1]) >= 5.5);
            if (itsAllGood) {
                for (var i = 0; i < document.all.length; i++) {
                    var obj = document.all[i];
                    var bg = obj.currentStyle.backgroundImage;
                    var img = document.images[i];
                    if (img && img.src.match(/\.png$/i) != null) {
                        var src = img.src;
                        img.style.width = img.width + "px";
                        img.style.height = img.height + "px";
                        img.style.filter =
                        "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='crop')"
                        img.src = "/i/copilots/spacer.gif";
                    }
                }
            }
        }
});


 