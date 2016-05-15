$(document).ready(function() {

    /**
     * This method handles the click event of the table header.
     * It will sort the table according to the header value.
     *
     * @param element the table header
     * @param sorting the sorting method index.
     */
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

    // assign click event to total project header in the list view
    $("#projectNameHeaderID").click(function() {
        headerSortingHandler($(this), 1);
    })

    $("#plannedContestHeaderID").click(function() {
        headerSortingHandler($(this), 2);
    })
    $("#numberOfContestHeaderID").click(function() {
        headerSortingHandler($(this), 3);
    })
    $("#realContestHeaderID").click(function() {
        headerSortingHandler($(this), 3);
    })
    $("#plannedDurationHeaderID").click(function() {
        headerSortingHandler($(this), 4);
    })
    $("#durationHeaderID").click(function() {
        headerSortingHandler($(this), 5);
    })
    $("#realDurationHeaderID").click(function() {
        headerSortingHandler($(this), 5);
    })
    $("#repostHeaderID").click(function() {
        headerSortingHandler($(this), 6);
    })
    $("#failureHeaderID").click(function() {
        headerSortingHandler($(this), 7);
    })
    $("#statusHeaderID").click(function() {
        headerSortingHandler($(this), 8);
    })

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

});
 