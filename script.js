const getDate = document.getElementById("getDate");
const getFullYear = new Date().getFullYear();
getDate.innerHTML = getFullYear;


$(document).ready(function(){
    $(".menu").click(function(){
        $(".navbar-section2").toggle();
    
        if ($(window).width() <= 640) { 
            if ($(".navbar-section2").is(":visible")) {
                $("body").css("overflow", "hidden");
            } else {
                $("body").css("overflow", "auto");
            }
        } else {
            $(".navbar-section2").toggle();
            $("body").css("overflow", "auto");
        }
      });
});
