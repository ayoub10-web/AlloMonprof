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