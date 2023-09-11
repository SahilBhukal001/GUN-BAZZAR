$(window).on("load",function(){
    /*---------------PRELOADER---------*/
    $(".preloader").fadeOut("slow");

});

$(document).ready(function(){
    /*-------NAVBAR SHRINK-------- */
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");

        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /*--------VIDEO POPUP----------*/
    
const videoSrc = $("#player").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
       if($(".video-popup").hasClass("open")){
           $(".video-popup").removeClass("open");
           $("#player").attr("src","");
    
       }
       else{
        $(".video-popup").addClass("open");
        if( $("#player").attr("src")== ''){
          $("#player").attr("src",videoSrc);
       }
    
       }
    
    });

    /*-------FEATURES CAROUSEL-------*/ 

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            
            },
            600:{
                items:2,
              
            },
            1000:{
                items:3,
               
               
            }
        }
    });
    /*------- SCREENSHORT CARSOUSEL-------*/ 


    $('.screenshorts-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            
            },
            600:{
                items:2,
              
            },
            1000:{
                items:4,
               
               
            }
        }
    });


/*------- TESTIMONIAL CARSOUSEL-------*/ 
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        //autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            
            },
            600:{
                items:2,
              
            },
            1000:{
                items:3,
               
               
            }
        }
    });


    /*------- TEAM CARSOUSEL-------*/ 
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            
            },
            600:{
                items:2,
              
            },
            1000:{
                items:3,
               
               
            }
        }
    });

/*------PAGE SCROLLING - SCROLLIT----*/

$.scrollIt( {
    topOffset: -50
});


/*------------NAVBAR COLLAPSE-----*/
$(".nav-link").on("click",function(){
  $(".navbar-collapse").collapse("hide");
}); 

/*-TOGGLE ---
function toggletheme(){
    if( localStorage.getItem("shala-theme")!==null){
        if( localStorage.getItem ("shala-theme") === "dark"){
            $("body").addClass("dark");
        }
        else{
            $("body").removeClass("dark");
        }
    }
    
        updateIcon();
    }
toggletheme();
$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
        localStorage.setItem("shala-theme","dark");

    }
    else{
        localStorage.setItem("shala-theme","light");

    }
    updateIcon();
});

function updateIcon(){
    if($("body").hasClass("dark")){
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
    }
    else{
        $(".toggle-theme i").removeClass("fa-sun")
        $(".toggle-theme i").addClass("fa-moon")
    }
}*/


    
    });