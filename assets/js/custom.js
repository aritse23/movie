document.addEventListener("DOMContentLoaded",function(){
	
	//<====================NAVIGATION MENU============================>
	//toggles the navigation menu to show and hide
	$(".menu").click(function(event){
		event.preventDefault();
		$(".nav_menu").slideToggle("slow");
	})

	$(".nav_links").click(function(){
		$(".nav_menu").slideToggle("slow");
	})
	//prevents all a tags in class .prevent from linking anywhere
	// $(".prevent a").click(function(e){
	// 	e.preventDefault();
	// })


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
	        var $prev = $('.current').prev('.section'); //selects section with class current, then gets the section prior to current
	        var top = $prev.offset().top;	        	//sets variable top to the co-ord of the top of previous section
	        $('.current').removeClass('current');	     //removes class current and all child
	        $('body').animate({							//creates animation on body element
	          scrollTop: top				//scrolls to the top of previous section
	        }, function () {
	               $prev.addClass('current');	//gives that prev section a class of current
	        });
	  	}


	});
	
	//<===============NAV MENU=========================>
	$(".nav_links").on("click",function(){		//if ckicking class
		var new_current = $(this).attr("href");	//creates variable which stores the clicked link's href
	    //alert($(".current").attr("id"));		//tests to display which section has the class "current"
	    $(".current").removeClass("current");	//removes the current class and all child

	    if(new_current == "#synopsis"){			//if variable value is equal to ....
	    	$("#synopsis").addClass("current");		//then add the class current to section...
	    } else if (new_current == "#characters"){
	    	$("#characters").addClass("current");
	    }
	    else if (new_current == "#gallery"){
	    	$("#gallery").addClass("current");
	    }	    
	    else if (new_current == "#trailer"){
	    	$("#trailer").addClass("current");
	    }
	});


	//<==============CHARACTERS MODAL======================>

	$(".char_list a img").click(function(event){ //when clicking image in .char_list
		event.preventDefault();		//stops the default event from running
		var imgAlt = $(this).attr("alt");	//create variable that stores alt attribute of image we clicked on
		
		if (imgAlt=="cobb"){	//if alt value is equal to ....
			$(".cobb").show();		//show ...
			$(".exit").click(function(event){ //if .exit class is clicked
				event.preventDefault();		//stops the default event from running
		 		$(".cobb").hide();		//hide the class ...		 	
		 	});
		} else if(imgAlt=="mal"){
			$(".mal").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".mal").hide();
		 	});	
		} else if(imgAlt=="arthur"){
			$(".arthur").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".arthur").hide();
		 	});	
		} else if(imgAlt=="ariadne"){
			$(".ariadne").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".ariadne").hide();
		 	});	
		} else if(imgAlt=="eames"){
			$(".eames").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".eames").hide();
		 	});	
		} else if(imgAlt=="saito"){
			$(".saito").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".saito").hide();
		 	});	
		} else if(imgAlt=="fischer"){
			$(".fischer").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".fischer").hide();
		 	});	
		} else if(imgAlt=="yusuf"){
			$(".yusuf").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".yusuf").hide();
		 	});	
		}


		
		
	});

	$(".char_list2 a img").click(function(event){ //when clicking image in .char_list
		event.preventDefault();		//stops the default event from running
		var imgAlt = $(this).attr("alt");	//create variable that stores alt attribute of image we clicked on
		
		if (imgAlt=="cobb"){	//if alt value is equal to ....
			$(".cobb").show();		//show ...
			$(".exit").click(function(event){ //if .exit class is clicked
				event.preventDefault();		//stops the default event from running
		 		$(".cobb").hide();		//hide the class ...		 	
		 	});
		} else if(imgAlt=="mal"){
			$(".mal").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".mal").hide();
		 	});	
		} else if(imgAlt=="arthur"){
			$(".arthur").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".arthur").hide();
		 	});	
		} else if(imgAlt=="ariadne"){
			$(".ariadne").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".ariadne").hide();
		 	});	
		} else if(imgAlt=="eames"){
			$(".eames").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".eames").hide();
		 	});	
		} else if(imgAlt=="saito"){
			$(".saito").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".saito").hide();
		 	});	
		} else if(imgAlt=="fischer"){
			$(".fischer").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".fischer").hide();
		 	});	
		} else if(imgAlt=="yusuf"){
			$(".yusuf").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".yusuf").hide();
		 	});	
		}
		

		
		
	});
	
	//<=============gallery TABS===============>
	$(".side_button a img").click(function(event){ //if image in class is clicked
		event.preventDefault();		//stops the default event from running
		var imgAlt = $(this).attr("alt");	//create variable that stores alt attribute of image we clicked on
		if (imgAlt=="wallpapers"){		//if imgAlt equals the value ...
			$(".wallpapers").show();	//then show... and hide...
			$(".posters").hide();
			$(".screenshots").hide();
			$(".behind_scenes").hide();
			$(".wallpaper_text").show();
			$(".poster_text").hide();
			$(".screenshot_text").hide();
			$(".behind_text").hide();
			$(".one").show();
			$(".two").hide();
			$(".three").hide();
			$(".four").hide();			

			

		} else if (imgAlt=="posters"){
			$(".wallpapers").hide();
			$(".posters").show();
			$(".screenshots").hide();
			$(".behind_scenes").hide();
			$(".wallpaper_text").hide();
			$(".poster_text").show();
			$(".screenshot_text").hide();
			$(".behind_text").hide();
			$(".one").hide();
			$(".two").show();
			$(".three").hide();
			$(".four").hide();	

		} else if (imgAlt=="screenshots"){
			$(".wallpapers").hide();
			$(".posters").hide();
			$(".screenshots").show();
			$(".behind_scenes").hide();
			$(".wallpaper_text").hide();
			$(".poster_text").hide();
			$(".screenshot_text").show();
			$(".behind_text").hide();
			$(".one").hide();
			$(".two").hide();
			$(".three").show();
			$(".four").hide();	

		} else if (imgAlt=="behind the scenes"){
			$(".wallpapers").hide();
			$(".posters").hide();
			$(".screenshots").hide();
			$(".behind_scenes").show();
			$(".wallpaper_text").hide();
			$(".poster_text").hide();
			$(".screenshot_text").hide();
			$(".behind_text").show();
			$(".one").hide();
			$(".two").hide();
			$(".three").hide();
			$(".four").show();	
		}
	});
		 	
	
	//<============GALLERY IMAGES===============>
	
	var $overlay = $('<div id="overlay"></div>'); 	//creates a div  element with id overlay
	var $image = $("<img>");	//creates image element 
	//add image to overlay
	$overlay.append($image);	//adds image to overlay

	$(".gallery_content .image_list a img").click(function(event){	//selects img from class
		event.preventDefault();		//stops the default event from running
		$("#gallery").append($overlay);		//adds overlay to section gallery
		var imgLoc = $(this).attr("src");	//new variable that stores the src attribute from image that we click on
		$image.attr("src", imgLoc);		//uses variable imgLoc as source location of variable $image
		$overlay.show();		//displays the overlay

	})
	$overlay.click(function(){	//when the overlay div is clicked
		$overlay.hide();		//hide overlay
	})
			
	// <==============GALLERY EFFECT==============>
	$(function() {
	    $(".rslides").responsiveSlides();

	    $(".slider3").responsiveSlides({
	        manualControls: '.slider3-pager',
	        maxwidth: 720
	      });
		});

});