/* NiceScroll*/
$(document).ready(

  function() { 

    $("html").niceScroll();

  }
);

/*Show Color Option */

$('.gear-check').click(function() {
    $('.color-option').show();
});

function showTopSliding(){
    var show = document.getElementById("layout_post");
    show.className = "top_visible";
}

function hideTopSliding(){
    var hide = document.getElementById("layout_post");
    hide.className = "top_sliding";
}

function toggleClass(){
    var tog = document.getElementById("mask0");
    tog.className = "newMask";
}
function toggleClass0(){
    var tog = document.getElementById("mask0");
    tog.className = "mask";
}

function toggleLike(){
    var liked = document.getElementById("like");
    liked.className = "fa fa-heart likeRed";
}

var Asd = ["Mohamed", "Ahmed", "Ali"];
console.log(Asd);

//var gal = $(".container").width();
//$(".gallery").width(gal);

//$(".gal").click(function(){
//    console.log("you have created a new div");
//});

//$('#gall').before($('#con'));
$(".layout-media").mouseenter(function(){
    $(this).children(".mask").addClass("newMask");
});

$(".layout-media").mouseleave(function(){
    $(this).children(".mask").removeClass("newMask");
});

$(".layout_content").mouseenter(function(){
    $(this).parent().children(".top_sliding").fadeIn(200);
});

$(".layout_content").mouseleave(function(){
    $(this).parent().children(".top_sliding").fadeOut(1000);
});

var width = $(document).width();
console.log(width);
