
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
          $(".navChange").css("background" , "#182D65");
        }
  
        else{
            $(".navChange").css("background" , "transparent");  	
        }
    })
  });