// 3 배너
$(function(){
const items = document.querySelectorAll('.item');

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    height: item.clicked ? '200px' : '200px',
    duration: 0.5,
     });


  item.clicked = !item.clicked;
  gsap.to(item, {
    height: item.clicked ? '420px' : '200px',
     });

};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener('click', () => expand(item, i));
});


    //menubar
    var gnbM=$("#gnb > ul > .main , .topslide");
    gnbM.mouseover(function(){
      $(".sub, .topslide").stop().slideDown(350);
    });
    gnbM.mouseout(function(){
        $(".sub, .topslide").stop().slideUp(350);
    });


});
