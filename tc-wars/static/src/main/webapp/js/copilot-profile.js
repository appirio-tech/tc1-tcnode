// define Google visualization charts for Copilot profile page

google.load("visualization", "1", {packages:["corechart"]});

// load the pie chart to display contest number by contest type
google.setOnLoadCallback(drawPieChart);
// load the column chart to display comparison of Planed, Real, Failure and
// Reposted contest number for each contest type in bars.
//google.setOnLoadCallback(drawColumnChart);

// This array stored all the colors that can be used for different contest types
var colorsArray = ['#D1D1D1','#B2B2B2','#666666','#A60000', '#A21B00', '#DA0000', '#DF1C33', '#FF4A00','#FF9000','#FEC228','#FFD97A','#FFE6A8'];


var chart, view;
/**
 * Use Google visualization Chart to draw the pie chart. The data of the chart should be stored
 * in the global variable namely piechart.
 */
function drawPieChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task');
    data.addColumn('number', 'The amount of the tasks');

    data.addRows(piechart.length);

    $.each(piechart, function(index, item) {
        data.setValue(index, 0, item.name);
        data.setValue(index, 1, item.value);
    })

    chart = new google.visualization.PieChart($(".pie-chart")[0]);
    // get the sub array from colorsArray which matches the number of contest types to display
    var chartColors = colorsArray.splice(0, piechart.length);

    chart.draw(data, {
        width:450,
        height: 340,
        title: 'Overall Contests',
        titleFontSize:14,
        legend:'right',
        pieSliceText: 'value',
        legendTextStyle:  {fontSize: 11},
        colors:chartColors
    });

    google.visualization.events.addListener(chart, 'ready', function() {

    });

}

/**
 * Use Google Visualization Chart to draw the bar chart. The data of the chart should be stored
 * in the global variable namely barchart.
 */
//function drawColumnChart() {
//    var data = new google.visualization.DataTable();
//    data.addColumn('string', 'type');
//    data.addColumn('number', 'Planned Contests');
//    data.addColumn('number', 'Real Contests');
//    data.addColumn('number', 'Reposts');
//    data.addColumn('number', 'Failures');
//    data.addRows(barchart.length);
//    $.each(barchart, function(index, item) {
//        data.setValue(index, 0, item.name);
//        data.setValue(index, 1, item.plannedContests);
//        data.setValue(index, 2, item.realContests);
//        data.setValue(index, 3, item.reposts);
//        data.setValue(index, 4, item.failures);
//    })
//
//    var chart = new google.visualization.ColumnChart($(".column-chart")[0]);
//    var width =600;
//    chart.draw(data, {
//        width: width,
//        height: 250,
//        title: 'No. of Contests',
//        titleColor:'#333333',
//        colors:["#D00000","#000000","#666666","#B2B2B2"],
//        legend:'none',
//        fontSize:11,
//        titleFontSize:12
//    });
//}

$(document).ready(function() {
    
    // add the controller triggers to the right panel in contest statistics
    var controllers = $(".palisade div.controller");
    var contents = $(".palisade .right-area table");
    controllers.click(function() {
        $(this).blur();
        contents.hide();
        controllers.removeClass("active");
        $(this).addClass("active");
        $(".palisade .right-area table." + $(this).attr("id")).show();
        return false;
    })
    $(controllers[0]).trigger("click");
})


