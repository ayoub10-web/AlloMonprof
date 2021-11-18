
// show
var slides=["Mon profile","Mes factures","Mes paiments","Carte Cadeau"];
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    simulateTouch:false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (slides[index]) + '</span>';
      },
  },



  });


