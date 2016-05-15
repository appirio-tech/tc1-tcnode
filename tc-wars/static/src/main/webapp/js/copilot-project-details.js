// define Google visualization charts for copilot project detail page

google.load("visualization", "1", {packages:["corechart"]});
// draw the first column chart - Planned contest VS Real contest
google.setOnLoadCallback(drawColumnChart1);
// draw the second column chart - Planned duration vs Real duration
google.setOnLoadCallback(drawColumnChart2);
// draw the third column chart - comparison of Planned, Real, Failure, and Reposted contest number
google.setOnLoadCallback(drawColumnChart3);

/**
 * Draw the first column chart. The data of the chart should be stored in the
 * global variable barchart1.
 */
function drawColumnChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'type');
    data.addColumn('number', 'Planned');
    data.addColumn('number', 'Real');
    data.addRows(barchart1.length);
    $.each(barchart1,function(index,item){
        data.setValue(index, 0, item.name);
        data.setValue(index, 1, item.planned);
        data.setValue(index, 2, item.real);
    }) 
    var chart = new google.visualization.ColumnChart($("#chart1 .chart")[0]);
    chart.draw(data, {
        width: 250,
        height: 250,
        colors:["#D00000","#000000"],
        legend:'none',
        min:0,
        tooltipFontSize:11,
        fontSize:12
    });
}

/**
 * Draw the second column chart. The data of the chart should be stored in the
 * global variable barchart2.
 */
function drawColumnChart2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'type');
    data.addColumn('number', 'Planned Duration');
    data.addColumn('number', 'Real Duration');
    data.addRows(barchart2.length);
    $.each(barchart2,function(index,item){
        data.setValue(index, 0, item.name);
        data.setValue(index, 1, item.planned);
        data.setValue(index, 2, item.real);
    });

    var chart = new google.visualization.BarChart($("#chart2 .chart")[0]);
    chart.draw(data, {
        width: 300,
        height: 250,
        colors:["#D00000","#000000"],
        legend:'none',
        min:0,
        hAxis:{title:'Days'},
        vAxis:{title:'Planned VS Real'},
        fontSize:12,
        titleFontSize:11
    });
}

/**
 * Draw the third column chart. The data of the chart shold be stored in the global variable barchart3.
 */
function drawColumnChart3() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'type');
    data.addColumn('number', 'Planned Contests');
    data.addColumn('number', 'Real Contests');
    data.addColumn('number', 'Reposts');
    data.addColumn('number', 'Failures');
    data.addRows(barchart3.length);
    $.each(barchart3,function(index,item){
        data.setValue(index, 0, item.name);
        data.setValue(index, 1, item.plannedContests);
        data.setValue(index, 2, item.realContests);
        data.setValue(index, 3, item.reposts);
        data.setValue(index, 4, item.failures);
    });

    var chart = new google.visualization.ColumnChart($("#chart3 .chart")[0]);
    chart.draw(data, {
        width: 320,
        height: 280,
        title: 'No. of Contests', 
        colors:["#D00000","#000000","#666666","#B2B2B2"],
        legend:'none',
        min:0,
        tooltipFontSize:11,
        fontSize:12
     });
}

$(document).ready(function(){

    // add the controller triggers to the right panel in project details
    var controllers = $(".palisade div.controller");
    var contents = $(".palisade .right-area table");
    controllers.click(function(){
        $(this).blur();
        contents.hide();
        controllers.removeClass("active");
        $(this).addClass("active");
        $(".palisade .right-area table." + $(this).attr("id")).show();
        return false;
    })
    $(controllers[0]).trigger("click"); 

})



