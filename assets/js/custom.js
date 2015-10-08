document.addEventListener("DOMContentLoaded",function(){
	

	//<==============NAVIGATION JUMP EFFECT===========================>

	//Selects first section with a class of .section
	$('section.section').first();
	//Selects the a link with class .display, adds click event and function 
	$('a.display').on('click', function(e) {
    	e.preventDefault();		//prevents the default event from happening when clicked on
    	var imgLoc = $(this).attr("href"),	//creates variable named imgLoc which stores the clicked link's href
	    that = $(this);
	    //If variable imgLoc is equal to and the same type as "assets/img/icons/arrow_1.png"
	    //also if the amount of sections after .current is greater than 0 then run following code
	    if (imgLoc === 'assets/img/icons/arrow_1.png' && $('.current').next('section.section').length > 0) {
	        var $next = $('.current').next('.section'); 	//new variable $next containing the section after the current section.
	        var top = $next.offset().top;					//new variable top that sets co-ordinates of .next to top.
	        $('.current').removeClass('current');			//selects class current and removes it
	      	$('body').animate({								//adds an animation to the body
          		scrollTop: top     							//scrolls to the co-ordinates top
        	},function () {
               	$next.addClass('current'); //adds the class current to variable $next
	        });

	    //Else if the img Loc is equal to and the same type as "assets/img/icons/kick_1.png"
	    //also if the amount of sections after .current is greater than 0 then run following code
	  	} else if (imgLoc === 'assets/img/icons/kick_1.png' && $('.current').prev('section.section').length > 0) {
	        var $prev = $('.current').prev('.section');
	        var top = $prev.offset().top;	        
	        $('.current').removeClass('current');	      
	        $('body').animate({
	          scrollTop: top     
	        }, function () {
	               $prev.addClass('current');
	        });
	  	}
	});

});