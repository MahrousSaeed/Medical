$(document).ready(function () {
    
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
    
    // start slider
    var windowH = $(window).innerHeight();
    var navH = $(".navigation-bar").innerHeight();
    
    console.log(windowH);
    console.log(navH);
    $("#slider .carousel-item").css("height",windowH - navH - 54);
    
    // appointment
    var appointLH = $("#appointment .left").innerHeight();
    var appointrH = $("#appointment .right").innerHeight();
    $("#appointment .left").css("height",appointrH);
    $(window).resize(function () {
        $("#appointment .left").css("height",appointrH);

    });
    
    
   
});



// content


$("#content .department .item h2").on("click", function () {
   
    $("#content .department .item p").css("display","none");
    $(this).next("p").css("display","block");
     
    
});

/*var x = document.getElementById("count")
    for (var i = 0; i<100; i++)
    {
        x.innerHTML = i;
    }*/



// counter to
var statisticsO = $("#statistics").offset().top;
$(window).scroll(function () {
    var statisticsO = $("#statistics").offset().top;
    var windowScrollTop = $(this).scrollTop();
    if (windowScrollTop >= statisticsO - 500 )
        {
            
            $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 7000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});

            
        }
     
    
});
// start team
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:23,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
/*$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/