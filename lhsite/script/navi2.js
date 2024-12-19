$(function(){
   $('.msub').hide();

   $('.mtit').click(function(){
        $('.msub').slideUp();
        $(this).next().slideDown(); //show()
        
   })
})