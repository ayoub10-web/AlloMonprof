//header animation

window.onscroll = function() {

    if (window.pageYOffset>50) {
        $("#header").addClass("fillheader");
      } else {

        setTimeout(function() {
            $("#header").removeClass();
           },0);
        
      }

}

// //Menu 


    $(".container2 .slides .slide").hide();
    $("#purple_slide").addClass("active-person");
    $("#purple_slide").show();
    $(".container2 .categories ul li  a span").addClass("purple_slide");
    $("#purple_slide").addClass("animate");
    $(".container2 .slides .slide .content ul li").addClass("purple_slide");

            $(".container2 .categories ul li a").click(function(e){
                e.preventDefault();

                var current_slide = this.name;
                $(".container2 .categories ul li  a span").removeClass("purple_slide");
                var id_prev_slide = $(".container2 .slides .active-person").attr('id');
                var id_prev_link = $(".container2 .categories ul li .active_link").attr('id');

                if(!$('#'+current_slide).hasClass("active-person")){
                    console.log("here");
                    console.log(current_slide)
                    console.log(id_prev_slide);
                    $(".container2 .slides .active-person").hide();
                    $("#"+id_prev_link).removeClass();
                    $(this).addClass(current_slide);
                    $(this).addClass("active_link");
                    $('#'+current_slide).addClass("animate");

                    $('#'+current_slide).show();
                    $('#'+current_slide).addClass("active-person");
                    $('#'+id_prev_slide).removeClass("active-person");
                    $(".container2 .slides .slide .content ul li").removeClass();
                    $(".container2 .slides .slide .content ul li").addClass(current_slide);
                  
                }
            });

// slide show 
$(document).ready(function () {
    $('.external').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        arrows: false,
        draggable: false,
        swipe: false,
        speed: 500
    });

    $('.internal').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        draggable: false,
        swipe: false,
        speed: 500
    });
});

// Events
$("#prev").css("opacity", "0.5");
$("#next").click(function (e) {
    e.preventDefault();
    $("#prev").css("opacity", "1");
    let index = $(".external").slick('slickCurrentSlide');
    let slide = $($(".external .slick-slide")[index]);
    if ($(slide).find(".internal").length == 0) {
        $(".external").slick('slickNext');
    } else {
        let internal_index = $(".external .internal").slick('slickCurrentSlide');
        let count = $(".external .internal .slick-slide").length - 1;
        if (internal_index == count) {
            $(".external").slick('slickNext');
        } else {
            $(".external .internal").slick('slickNext');
        }


    }
});


$("#prev").click(function (e) {
    e.preventDefault();

    let index = $(".external").slick('slickCurrentSlide');
    let slide = $($(".external .slick-slide")[index]);

    let internal_index = $(".external .internal").slick('slickCurrentSlide');
    let count = $(".external .internal .slick-slide").length - 1;
    if ($(slide).find(".internal").length == 0)
        $(".external").slick('slickPrev');
    else {

        if (internal_index == 0) {

            $(".external").slick('slickPrev');
        }

        else {
            $(".external .internal").slick('slickPrev');

        }
        if (internal_index == 1) {
            $("#prev").css("opacity", "0.5");
        }
        if(internal_index==count){
            $("#last_slide").removeClass("active_slide");
        }




    }
});

//style current slide
$("#bg").addClass("default_bg");
$("#nav").addClass("default_bg");
$('.external').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

    if ($(event.target).hasClass("external")) {

        if (nextSlide == slick.$slides.length - 2) {


            $("#bg").removeClass("default_bg");
            $("#bg").removeClass("second_bg");
            $("#bg").addClass("first_bg");

            $("#nav").removeClass("default_bg");
            $("#nav").removeClass("second_bg");
            $("#nav").addClass("first_bg");
            $("#next").css("opacity", "1");


        }
        else if (nextSlide == slick.$slides.length - 1) {
 
            $("#bg").removeClass("first_bg");
            $("#bg").addClass("second_bg");
            $("#nav").removeClass("first_bg");
            $("#nav").addClass("second_bg");
            $("#next").css("opacity", "0.5");
        }
        else {
            $("#bg").removeClass("first_bg");
            $("#bg").addClass("default_bg");
            $("#nav").removeClass("first_bg");
            $("#nav").addClass("default_bg");
            $("#next").css("opacity", "1");
        }

    }
});



$('.internal').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    if ($(event.target).hasClass("internal")) {
        let internal_index = $(".external .internal").slick('slickCurrentSlide');
        let count = $(".external .internal .slick-slide").length - 1;
        if (internal_index == count) {
            $("#line1").addClass("active1");
        }
        else {
            $("#line1").removeClass("active1");

    
        }

    }
});


$('.external').on('afterChange', function (event, slick, currentSlide, nextSlide) {

    if ($(event.target).hasClass("external")) {
        console.log(currentSlide);

        if (currentSlide==0) {

            $("#last_slide").addClass("active_slide");
            if ($("#line1").hasClass("active2")) {
                $("#line1").removeClass("active2");
            }
            $("#line1").addClass("active1");

        }
        else{
            $("#line1").removeClass("active1");
            if(currentSlide==1){
                if($("#line2").hasClass("active4")){
                    $("#line2").removeClass("active4");
                }
                $("#line1").addClass("active2"); 
                $("#line2").addClass("active3");         
            }
            else{
                
                $("#line1").removeClass("active2");
                $("#line1").removeClass("active3");
                $("#line2").addClass("active4"); 
            }          
        }



    }

});


