$(document).ready(function() {

    // assign click event to total project header in the list view
    $("th#projectHeaderID").click(function() {
       headerSortingHandler($(this), 1);
    })
	
	// assign click event to total contest header in the list view
    $("th#contestHeaderID").click(function() {
       headerSortingHandler($(this), 2);
    })
	
	// assign click event to total repost header in the list view
    $("th#repostHeaderID").click(function() {
       headerSortingHandler($(this), 3);
    })
	
	// assign click event to total failures header in the list view
    $("th#failureHeaderID").click(function() {
       headerSortingHandler($(this), 4);
    })
	
	// assign click event to total bug races header in the list view
    $("th#bugRaceHeaderID").click(function() {
       headerSortingHandler($(this), 5);
    })
	
	// assign click event to current project header in the list view
    $("th#cProjectHeaderID").click(function() {
       headerSortingHandler($(this), 6);
    })
	
	// assign click event to current contest header in the list view
    $("th#cContestHeaderID").click(function() {
       headerSortingHandler($(this), 7);
    })

  
    // the handler used to handle header sorting in the list view
    function headerSortingHandler(element, sorting) {
        var currentSorting = $("#sortingID").val();
        var previousSorted = false;
        var previousOrder = 0;

        if (currentSorting % 10 == sorting) {
            var previousOrder = currentSorting / 10 | 0;
            previousSorted = true;
        }

        var sort = sorting;

        if (previousSorted) {
            sort = (previousOrder == 1 ? 0 : 1) * 10 + sorting;
        }

        $("#sortingID").val(sort);

        element.addClass('headerSortDown');
        $("#controlForm").submit();
    }


});
 