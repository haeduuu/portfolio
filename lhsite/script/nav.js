$(function(){
    var gnbLi = $('#gnb > li');
    var sub = $('#gnb > li > ul');
    var min =$('#hwrap').height();
    var max =$('#gnb > li > ul').innerHeight()+min;
    
     gnbLi.on("mouseenter focus",function(){
      $('#hwrap').stop().animate({height:max},"fast","swing",function(){
           sub.stop().fadeIn('fast');
      });
        sub.removeClass('on');
        $(this).find('ul').addClass('on');
     }); 
     $('#header').mouseleave(function(){
         sub.stop().fadeOut('fast',function(){
            $('#hwrap').stop().animate({height:min},'fast','swing');
         });
     });
     
     $('#gnb > li > a').focus(function(){
      $('#hwrap').stop().animate({height:max},"fast","swing");
        sub.stop().fadeIn("fast");
     }).blur(function(){
        sub.stop().fadeOut("fast");
      $('#hwrap').stop().animate({height:min},"fast","swing");
     });



     
   //   tab
     $('ul.tabs li').click(function(){
      var tab_id =$(this).attr('data-tab');
    
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      
      $(this).addClass('current');
      $('#'+tab_id).addClass('current');
    
     });




   
   });