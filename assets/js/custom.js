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
	
	//<===============NAV MENU=========================>
	$(".nav_links").on("click",function(){
		var new_current = $(this).attr("href");	//creates variable named imgLoc which stores the clicked link's href
	    
	    alert($(".current").attr("id"));
	    $(".current").removeClass("current");
	    if(new_current == "#plot"){
	    	alert(new_current);
	    	$("#plot").addClass("current");
	    } else if (new_current == "#characters"){
	    	alert(new_current);
	    	$("#characters").addClass("current");
	    }
	    else if (new_current == "#downloads"){
	    	alert(new_current);
	    	$("#downloads").addClass("current");
	    }
	    else if (new_current == "#gallery"){
	    	alert(new_current);
	    	$("#gallery").addClass("current");
	    }
	    else if (new_current == "#trailer"){
	    	alert(new_current);
	    	$("#trailer").addClass("current");
	    }
		// if(imgLoc == "assets/img/icons/cloud_1.png"){ //checks to see if imgLoc is the same as "assets/img/icons/cloud_1.png"
	 //    	var $current = $(".cloud1").attr("href"); //new var current holds href value of class cloud1
		// 	$('.current').removeClass('current');//removes class current
		// 	$current.addClass('current');
		// }
	});


	//<==============CHARACTERS MODAL======================>

	//$("body").append($overlay);
	//var $overlay = $("#overlay");
	//$("#characters").append($overlay);
	$(".char_list a img").click(function(event){
		event.preventDefault();
		var imgAlt = $(this).attr("alt");
		
		if (imgAlt=="cobb"){
			//$overlay.append($(".cobb"));
			$(".cobb").show();
			$(".exit").click(function(event){
				event.preventDefault();
		 		$(".cobb").hide();
		 		//$("#overlay .cobb").remove();
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
	
	//<=============DOWNLOADS TABS===============>
	$(".side_button a img").click(function(event){
		event.preventDefault();
		var imgAlt = $(this).attr("alt");
		if (imgAlt=="wallpapers"){
			$(".wallpapers").show();
			$(".posters").hide();
			$(".soundtracks").hide();
			$(".wallpaper_text").show();
			$(".poster_text").hide();
			$(".soundtrack_text").hide();
			

		} else if (imgAlt=="posters"){
			$(".posters").show();
			$(".wallpapers").hide();
			$(".soundtracks").hide();
			$(".poster_text").show();
			$(".wallpaper_text").hide();			
			$(".soundtrack_text").hide();
		} else if (imgAlt=="soundtracks"){
			$(".soundtracks").show();
			$(".wallpapers").hide();
			$(".posters").hide();
			$(".soundtrack_text").show();
			$(".wallpaper_text").hide();
			$(".poster_text").hide();			
		}
	});
		 	
	
	//<=============GALLERY TABS===============>
	$(".side_button1 a img").click(function(event){
		event.preventDefault();
		var imgAlt = $(this).attr("alt");
		if (imgAlt=="screenshots"){
			$(".screenshots").show();
			$(".behind_scenes").hide();
			$(".screenshot_text").show();
			$(".behind_text").hide();
		} else if (imgAlt=="behind the scenes"){
			$(".behind_scenes").show();
			$(".screenshots").hide();
			$(".behind_text").show();
			$(".screenshot_text").hide();
		}
	});
	

	//<============GALLERY IMAGES===============>
	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");
	//add image to overlay
	$overlay.append($image);
	//add overlay to body
	
	$(".gallery_content .image_list a img").click(function(event){
		event.preventDefault();
		$("#gallery").append($overlay);
		var imgLoc = $(this).attr("src");
		$image.attr("src", imgLoc);
		$overlay.show();

	})

	//<=============DOWNLOAD IMAGES==============>

	$(".download_content .image_list a img").click(function(event){
		event.preventDefault();
		$("#downloads").append($overlay);
		var imgLoc = $(this).attr("src");
		$image.attr("src", imgLoc);
		$overlay.show();

	})
	$overlay.click(function(){
		$overlay.hide();
	})
			
	

});