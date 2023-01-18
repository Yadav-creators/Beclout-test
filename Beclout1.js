

    $(document).ready(function(){
      $(".btn-bkaky").click(function(){
        $(".btn-bkaky").addClass("change");
      });
    });
        $(document).ready(function(){
          $(".btn-bkaky1").click(function(){
            $(".btn-bkaky").removeClass("change");
          });
        });
    $(document).ready(function(){
      $(".btn-bkaky1").click(function(){
        $(".btn-bkaky1").addClass("change1");
      });
    });
        $(document).ready(function(){
          $(".btn-bkaky").click(function(){
            $(".btn-bkaky1").removeClass("change1");
          });
        });

    $(document).ready(function(){
      $(".background-button-change").click(function(){
        $(".background-button-change").addClass("change123");
      });
    });
        $(document).ready(function(){
          $(".background-button-change").click(function(){
            $(".background-button-change01").removeClass("change123");
          });
        });
    $(document).ready(function(){
      $(".background-button-change01").click(function(){
        $(".background-button-change01").addClass("change123");
      });
    });
        $(document).ready(function(){
          $(".background-button-change01").click(function(){
            $(".background-button-change").removeClass("change123");
          });
        });
    $(document).ready(function(){
      $(".background-button-change01").click(function(){
        $(".button-youtube-active").removeClass("button-youtube-active");
      });
    });
    $(document).ready(function(){
      $(".creator-button-1").click(function(){
        $(".creator-button-1").addClass("change12345");
      });
    });
        $(document).ready(function(){
          $(".creator-button-1").click(function(){
            $(".creator-button-2").removeClass("change12345");
          });
        });
            $(document).ready(function(){
              $(".creator-button-2").click(function(){
                $(".button-1-active").removeClass("button-1-active");
              });
            });
    $(document).ready(function(){
      $(".creator-button-2").click(function(){
        $(".creator-button-2").addClass("change12345");
      });
    });
        $(document).ready(function(){
          $(".creator-button-2").click(function(){
            $(".creator-button-1").removeClass("change12345");
          });
        });
    $(document).ready(function(){
      $(".creator-button-3").click(function(){
        $(".creator-button-3").addClass("change1230");
      });
    });
    $(document).ready(function(){
      $(".creator-button-4").click(function(){
        $(".creator-button-3").removeClass("change1230");
        
      });
    });
    $(document).ready(function(){
      $(".creator-button-5").click(function(){
        $(".creator-button-3").removeClass("change1230");
        
      });
    });






    $(document).ready(function(){
      $(".creator-button-4").click(function(){
        $(".creator-button-4").addClass("change1230");
      });
    });
    $(document).ready(function(){
      $(".creator-button-3").click(function(){
        $(".creator-button-4").removeClass("change1230");
        
      });
    });
    $(document).ready(function(){
      $(".creator-button-5").click(function(){
        $(".creator-button-4").removeClass("change1230");
        
      });
    });
    $(document).ready(function(){
      $(".creator-button-5").click(function(){
        $(".creator-button-5").addClass("change1230");
      });
    });
    $(document).ready(function(){
      $(".creator-button-3").click(function(){
        $(".creator-button-5").removeClass("change1230");
        
      });
    });
    $(document).ready(function(){
      $(".creator-button-4").click(function(){
        $(".creator-button-5").removeClass("change1230");
        
      });
    });


    $(document).ready(function(){
      $(".creator-button-4").click(function(){
        $(".button-3-active").removeClass("button-3-active");
        
      });
    });
    
    
        $(document).ready(function(){
          $(".creator-button-5").click(function(){
            $(".button-3-active").removeClass("button-3-active");
            
          });
        });
        



    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    
    window.onclick = function(event) {
      if (!event.target.matches('.btn-bkaky')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    


   
$( document ).ready(function () {
  $(".moreBox").slice(0, 11).show();
    if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 20).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });



  
$(document).ready(function(){
    $(".i4").click(function(){
        // Change src attribute of image
        $(this).attr("src", "Group 12668.png");
    });    
});








    $('.bhoope9696').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
   
     responsive: [
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       },
          {
         breakpoint: 1025,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
     ]
   });
   







    $('.auc-cards').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 1,
   
     responsive: [
        {
         breakpoint: 1440,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
       {
         breakpoint: 1080,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
     ]
   });
   

   



    $('.trending-cards').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 4,
     slidesToScroll: 4,
   
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       },
          {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
       {
         breakpoint: 575,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
     ]
   });
   





    $('.user-slide-section').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
   
     responsive: [
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       },
          {
         breakpoint: 1025,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
       {
         breakpoint: 453,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
     ]
   });




   $('.bhoope9696').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrow:false
        }
      },
         {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrow:false
        }
      }, 
    ]
  });
  





          
   $('.slick-apply').slick({
    centerMode: true,
    dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 3,
     centerPadding: '20px',
     responsive: [
        {
         breakpoint: 1440,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
       {
         breakpoint: 1080,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           arrow:false
         }
       }, 
     ]
   });
   
   