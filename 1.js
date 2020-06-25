// $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
  
//     for (var i=0;i<4;i++) {
//       next=next.next();
//       if (!next.length) {
//         next=$(this).siblings(':first');
//       }
//       next.children(':first-child').clone().appendTo($(this));
//     }
//   });

// khoahoc12
$(document).ready(function(){
    $(".Ly12").hide();
    $(".Hoa12").hide();
    $(".Van12").hide();
    $(".Anh12").hide();
    $("#Toan12").click(function(){
        $(".Toan12").show();
        $(".Ly12").hide();
        $(".Hoa12").hide();
        $(".Van12").hide();
        $(".Anh12").hide();
    });


    $("#Ly12").click(function(){
        $(".Ly12").show();
        $(".Toan12").hide();
        $(".Hoa12").hide();
        $(".Van12").hide();
        $(".Anh12").hide();
        });

    $("#Hoa12").click(function(){
        $(".Hoa12").show();
        $(".Toan12").hide();
        $(".Ly12").hide();
        $(".Van12").hide();
        $(".Anh12").hide();
    });

    $("#Van12").click(function(){
        $(".Van12").show();
        $(".Toan12").hide();
        $(".Ly12").hide();
        $(".Hoa12").hide();
        $(".Anh12").hide();
    });

    $("#Anh12").click(function(){
        $(".Anh12").show();
        $(".Toan12").hide();
        $(".Ly12").hide();
        $(".Van12").hide();
        $(".Hoa12").hide();
    });
});

// khoahoc9
$(document).ready(function(){
    $(".Ly9").hide();
    $(".Hoa9").hide();
    $(".Van9").hide();
    $(".Anh9").hide();
    $("#Toan9").click(function(){
        $(".Toan9").show();
        $(".Ly9").hide();
        $(".Hoa9").hide();
        $(".Van9").hide();
        $(".Anh9").hide();
    });


    $("#Ly9").click(function(){
        $(".Ly9").show();
        $(".Toan9").hide();
        $(".Hoa9").hide();
        $(".Van9").hide();
        $(".Anh9").hide();
        });

    $("#Hoa9").click(function(){
        $(".Hoa9").show();
        $(".Toan9").hide();
        $(".Ly9").hide();
        $(".Van9").hide();
        $(".Anh9").hide();
    });

    $("#Van9").click(function(){
        $(".Van9").show();
        $(".Toan9").hide();
        $(".Ly9").hide();
        $(".Hoa9").hide();
        $(".Anh9").hide();
    });

    $("#Anh9").click(function(){
        $(".Anh9").show();
        $(".Toan9").hide();
        $(".Ly9").hide();
        $(".Van9").hide();
        $(".Hoa9").hide();
    });
});

// khoahoc5
$(document).ready(function(){
    $(".ToanTA5").hide();
    $(".TiengViet5").hide();
    $(".TiengAnh5").hide();
    $("#Toan5").click(function(){
        $(".Toan5").show();
        $(".ToanTA5").hide();
        $(".TiengViet5").hide();
        $(".TiengAnh5").hide();
    });


    $("#ToanTA5").click(function(){
        $(".ToanTA5").show();
        $(".Toan5").hide();
        $(".TiengViet5").hide();
        $(".TiengAnh5").hide();
        });

    $("#TiengViet5").click(function(){
        $(".TiengViet5").show();
        $(".Toan5").hide();
        $(".ToanTA5").hide();
        $(".TiengAnh5").hide();
    });

    $("#TiengAnh5").click(function(){
        $(".TiengAnh5").show();
        $(".Toan5").hide();
        $(".ToanTA5").hide();
        $(".TiengViet5").hide();
    });

});
