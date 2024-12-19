$(function(){
    let currentIndex = 0;
    $("sliders").hide().first().show();

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 4;
        $(".sliders").eq(currentIndex).fadeOut(1200);
        $(".sliders").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex ;
    }, 4000);


    $('.btn_gotop').click(function(){
        $('html, body').animate({scrollTop:0},600);
        return false;
    });

    $('.btn_gobottom').click(function(){
        $('html, body').animate({scrollTop: $('#footer').offset().top},600);
    });





    $(document).on('ready', function() {

        $(".regular").slick({
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow : '.visual-prev',
          nextArrow : '.visual-next'
        });
  
      });
})


