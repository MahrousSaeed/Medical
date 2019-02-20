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
    
    $("#departments .links li").on("click", function () {
        "use strict";
        
        var dataId = "#" + $(this).attr("data-id");
         console.log(dataId);
        
        
        
        
        $(this).attr("data-Id", $(dataId).attr("id") ).css("borderBottom","none");
        
        $(dataId).siblings().css("display","none");
        $(dataId).fadeIn().siblings().css("display","none");
        
       
    });
    // start gallery
    
    var numThumbnailsImg = $(".gallery .thumbnails").children().length,
        
        //calc width of Thumbnails Img  dynamic
        
        ThumbnailsImgWidth = 100 / numThumbnailsImg - 0.6;
    
    $(".gallery .thumbnails img").css("width", ThumbnailsImgWidth + "%");
    
    
    $(".gallery .thumbnails img").click(function () {
        
        
        $(".gallery .master-img img")
            .fadeOut(0).attr("src", $(this).attr("src")).fadeIn(500);
        
        $(this).addClass("selected").siblings().removeClass("selected");
        
    });
            //chevron click
    $(".gallery .master-img .fa-chevron-right").click(function () {
        
        if ($(".thumbnails .selected").is(":last-child")) {
            
            $(".thumbnails img").eq(0).click();
            
        } else {
            
            $(".thumbnails .selected").next().click();
        }
        
    });
    
    $(".gallery .master-img .fa-chevron-left").click(function () {
        
        if ($(".thumbnails .selected").is(":first-child")) {
            
            $(".thumbnails img:last").click();
            
        } else {
            
            $(".thumbnails .selected").prev().click();
        }
        
    });
    
    //end gallery
});
