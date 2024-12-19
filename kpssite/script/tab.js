$(function(){
    $('.tabs li').click(function(){
        var tab_id =$(this).attr('data-tab');//tab-1, tab-2
        
        $('.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    })
})