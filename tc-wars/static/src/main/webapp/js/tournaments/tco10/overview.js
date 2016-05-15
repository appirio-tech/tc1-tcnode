   $(document).ready(function(){
            $.get('http://www.topcoder.com/tco10feed/', function(data) {
            var iterator = 1;
	        $("item", data).each(function(){ 				    
				if(iterator<=5){
				  
                                  var title =   $(this).find('title').text();
                                  var fullTitle ="<h2 class='pageTitle'>"+title +"</h2>";
                                  var link =   $(this).find('link').text();
                                  var description = $(this).find('description').text();
                                  description = description.replace("[...]", "<a rel='trackback' href='"+link+"'>[...]</a>");
                                  var endContent= "<p>"+description +"</p>";

                                  var date =    $(this).find('pubDate').text();                  
                                  var dateFormatted = new Date(Date.parse(date)).toLocaleString();
                                  var author = $(this).find("[nodeName=dc:creator]").text();
                                  					  
                                  var authorInfo = "<p class='postmetadata alt'>"
	                                            +   "<small>"
				                       +      "This entry was posted by "
				                       +      "<b><span style='color: rgb(255, 153, 51);'>"+author+"</span></b> on "+dateFormatted +" "
						         +      "<a rel='trackback' href='"+link +"trackback/'>Trackback</a>."	
	                                            +   "</small>"
                                                   +"</p>";
  
                                  var element =$('<span>').append(fullTitle  +"<br>"+endContent +"<br>"+authorInfo +"<br>"); 
								  $("#feeds_element").append(element);
                                  
				  }
				  iterator = iterator + 1;
               }
);
				 
            }
            ,'text/xml'); 
		
  });
