$(document).ready(function(){
    $.tablesorter.addParser({ 
        // set a unique id 
        id: 'linkName', 
        is: function(s) { 
            // return false so this parser is not auto detected 
            return false; 
        }, 
        format: function(s) { 
            // format your data for normalization 
            return $.trim(s.toLowerCase()); 
        }, 
        // set type, either numeric or text 
        type: 'text' 
    }); 

    $.tablesorter.addParser({ 
        // set a unique id 
        id: 'money', 
        is: function(s) { 
            // return false so this parser is not auto detected 
            return false; 
        }, 
        format: function(s) { 
            // format your data for normalization 
            return parseFloat($.trim(s.replace(/[^\d]/g, "")));
        }, 
        // set type, either numeric or text 
        type: 'numeric' 
    }); 

    $.tablesorter.addParser({ 
        // set a unique id 
        id: 'date', 
        is: function(s) { 
            // return false so this parser is not auto detected 
            return false; 
        }, 
        format: function(s) { 
            // format your data for normalization
            s= $.trim(s);
            var datePart = s.substr(0,10).split(".");
            var value = (datePart[2] + datePart[0] + datePart[1]);
            if(s.length > 10) {
                var timePart = s.substr(10,5).split(":");  
                value += (timePart[0] + timePart[1]); 
            }
            
            return value * 1;
        }, 
        // set type, either numeric or text 
        type: 'numeric' 
    }); 

    function setupTable(tableId) {
        var table = $("#" + tableId);
        table.find("tbody tr").removeClass('dark').removeClass('light');
        table.find("tbody tr:odd").addClass('light');
        table.find("tbody tr:even").addClass('dark');
    }

    $("#cloudSpokesActiveContests").tablesorter({
        headers: {
          0: {
            sorter:'linkName'
          },
          1:{
            sorter:'date'
          },
          2:{
            sorter:'date'
          },
          3: {
            sorter:'money'
          }
        }
    });

    $("#cloudSpokesActiveContests").bind("sortEnd", function(){
        setupTable('cloudSpokesActiveContests');
    });


    $("#cloudSpokesContestStatus").tablesorter({
        headers: {
          0: {
            sorter:'linkName'
          },
        
          2:{
            sorter:'date'
          }
        }
    });

    $("#cloudSpokesContestStatus").bind("sortEnd", function(){
        setupTable('cloudSpokesContestStatus');
    });

  });