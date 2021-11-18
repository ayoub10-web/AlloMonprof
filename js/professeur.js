//header animation

window.onscroll = function() {

    if (window.pageYOffset>50) {
        $("#header").addClass("fillheader");
      } else {
  
        setTimeout(function() {
            $("#header").removeClass("fillheader");
           },0);
        
      }
  
  }

  //slider

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    simulateTouch:false,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
