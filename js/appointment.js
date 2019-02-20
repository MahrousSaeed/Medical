$(document).ready(function () {
    "use strict";
    $(".loadingPage").fadeOut(1000);
    $(".link li a").click(function () {
        
        $(".link a").removeClass("active");
        
        $(this).addClass("active");
    });
    
    $(window).scroll(function () {
        var windowS = $(window).scrollTop();
        var ggg = $(".header").innerHeight;
        
        if (windowS >= 54) {
            
            $(".navigation-bar").addClass("sticky");
            $(".navigation-bar .bar").animate({
                paddingTop:"0px",
                paddingBottom:"0"
            },0);
            $(".navigation-bar .bar a").animate({
                paddingTop:"20px",
                paddingBottom:"20px",
                
            },0);
            $(".navigation-bar .link").animate({
                paddingTop:"0px",
                marginBottom:"0px"
                
                
            },0);
            
            
             $(".brand").animate({
                fontSize:"33px",
                 paddingTop:"7px"
            },0);
            $(".brand img").animate({
                width:"50px",
                height:"50px"
            },0);
        }
        else 
        {
            $(".navigation-bar").removeClass("sticky");
            
            $(".navigation-bar .bar").animate({
                paddingTop:"30px",
                paddingBottom:"10px"
            },0);
            $(".navigation-bar .bar a").animate({
                paddingTop:"10px",
                paddingBottom:"10px",
                
            },0);
            $(".navigation-bar .link").animate({
                paddingTop:"5px",
                marginBottom:"10px"
                
            },0);
            
            $(".brand").animate({
                fontSize:"38px"
            },0);
            $(".brand img").animate({
                width:"55px",
                height:"55px"
            },0);
            
            
        }
        
    }); 
    
    
});




// appointment
    var appointLH = $("#appointment .left").innerHeight();
    var appointrH = $("#appointment .right").innerHeight();
    $("#appointment .left").css("height",appointrH);
    $(window).resize(function () {
        $("#appointment .left").css("height",appointrH);

    });