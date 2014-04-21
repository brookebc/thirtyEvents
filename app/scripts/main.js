// $(document).ready(function() {

  	function showHeight (element, height) {
  		event.preventDefault();
  		$( ".getheight" ).text( "The height for the " + element + " is " + height + "px." );
  	}

		$( ".heightbtn" ).click(function() {
      showHeight( "paragraph", $( "p" ).height() );
    });

$( "select" )
   .change(function () {
     var str = "";

     $( "select option:selected" ).each(function() {
       str += $( this ).text() + " ";
    });
     $( ".day" ).text( str );
   })
   .change();

$( "li" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
    });

$(".hider").click(function(){
$(".hider").hide();
  		});

$(".changing-colors").bind('mouseover', function () { 
$(".changing-colors").css("background-color","tomato"); 
		});
$(".changing-colors").bind('mouseout', function () { 
$(".changing-colors").css("background-color","none"); 
		});

$(".image-widening").click(function(){
	event.preventDefault();
$(".image-widening").animate({width:"200px"});
		});
