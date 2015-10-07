document.addEventListener("DOMContentLoaded",function(){
	var navButton = document.querySelector(".menu");
	var navMenu = document.querySelector(".nav_menu");
	navMenu.classList.add("accessibly_hidden");
	var visible = false;

	navButton.addEventListener("click", function(){
		if (visible){
			navMenu.classList.add("accessibly_hidden");
		}else {
			navMenu.classList.remove("accessibly_hidden");
		}
		visible = !visible;
	})



	jQuery.fn.extend({
	  scrollTo : function(speed, easing) {
	    return this.each(function() {
	      var targetOffset = $(this).offset().top;
	      $('html,body').animate({scrollTop: targetOffset}, speed, easing);
	    });
	  }
	});

	$('.next-section').click(function(e){
	    e.preventDefault();
	    var $this = $(this),
	        $next = $this.parent().next();
	    
	    $next.scrollTo(400, 'linear');
	});

	$('.prev-section').click(function(e){
	    e.preventDefault();
	    var $this = $(this),
	        $prev = $this.parent().prev()
		$prev.scrollTo(400, 'linear');
	});
});