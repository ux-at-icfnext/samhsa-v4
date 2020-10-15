//Test jQuery
jQuery(document).ready(function($) {
    //$("h2").css("color", "red");
	//alert("JQUERY IS HERE");

    //Desktop Main Menu Hover Support
    $(".mainNav li").children("ul").hide();
    $(".mainNav li").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children("ul").show(300);
            $(this).children("ul li .third-level").hide();
        } else {
            $(this).children("ul").stop().hide(300);
        }
    });

});// End document load function