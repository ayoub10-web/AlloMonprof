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
// hover

// $(function() {
//   $('#a').hover(function() {
//     $('#b').css('background-color', 'yellow');
//   }, function() {
//     // on mouseout, reset the background colour
//     $('#b').css('background-color', '');
//   });
// });


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
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

  //


//  $("#showless").click(function(e) {
//        console.log("fgfjvgvhv");
//     e.preventDefault();
//    if( $("#showless").is(':visible')){
//     document.getElementById("#show").innerHTML="show less"; 
//    }else{
//      document.getElementById("#show").innerHTML="show more";
//    }
    

//   });



  $("#showless").on('click',function(e){
    console.log("clicked")
        e.preventDefault();

        if (!$("#hiddentopic").hasClass("visible")){
          $("#show").text("show less");
          $("#hiddentopic").addClass("visible");
        }

          else {
            $("#show").text("show more"); 
            $("#hiddentopic").removeClass("visible");

              

          }
        
     
    });


// price slider range


var slider = document.getElementById("range_slider");
var value = document.getElementById("value");
value.innerHTML = slider.value;

slider.oninput = function() {
  value.innerHTML = this.value;
}
 