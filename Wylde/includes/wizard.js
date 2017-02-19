/**
 * Created by gadyezra on 1/11/17.
 */

//jQuery time

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var iterator = 0;
var step = 0;
var private = 1;
var name, Duration, email, bridge, neck, body, pickup, recommended, final;
var lucky = false;
var price = 0;
// TODO CAROUSEL LOGIC:
// 1. Get all current parts to array of part name
// 2. Sort array according to taste
// 3. Set all images in div׳s to create the carousel
// 4. keep Iterator, clicking on right or left at carousel will trigger +1 in array
// 5. text + right side will change accordingly


var bestStyle = "Metal";
var email = "yossit@gmail.com";

function calculate() {
    price += parseFloat($(".item_price").eq(step - 1).text());
}

function moveSelectedFirst(array) {
    var i = 0;
    while (i < array.length) {
        if (array[i].style == bestStyle) {
            break;
        }
        i++;
    }
    var index = i;
    var temp = array[0];
    array[0] = array[index];
    array[index] = temp;
    return array;
};

function deleteCarousel(classname) {
    document.getElementsByClassName(classname)[0].remove();
}

function createCarousel(classname) {
    $(".desc h5").css("display", "block");
    $("." + classname).slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slick-next").click(function () {
        $(".desc h2").eq(step).text($(".slick-current h2").text());
        $(".desc p").eq(step).text($(".slick-current p").text());
        $(".item_title").eq(step).text($(".slick-current h2").text());
        $(".item_price").eq(step).text($(".slick-current article").text() + "$");
        $(".item_thumb").eq(step).css("background-image", "url(" + ($(".slick-current img").attr("src")) + ")");
        if ($(".slick-current h2").text() == recommended)
            $(".desc h5").css("display", "block");
        else
            $(".desc h5").css("display", "none");
    });
    $(".slick-prev").click(function () {
        $(".desc h2").eq(step).text($(".slick-current h2").text());
        $(".desc p").eq(step).text($(".slick-current p").text());
        $(".item_title").eq(step).text($(".slick-current h2").text());
        $(".item_price").eq(step).text($(".slick-current article").text() + "$");
        $(".item_thumb").eq(step).css("background-image", "url(" + ($(".slick-current img").attr("src")) + ")");
        if ($(".slick-current h2").text() == recommended)
            $(".desc h5").css("display", "block");
        else
            $(".desc h5").css("display", "none");
    });
    $(".desc h2").eq(step).text($(".slick-current h2").text());
    $(".desc p").eq(step).text($(".slick-current p").text());
    $(".item_title").eq(step).text($(".slick-current h2").text());
    $(".item_price").eq(step).text($(".slick-current article").text() + "$");
    $(".item_thumb").eq(step).css("background-image", "url(" + ($(".slick-current img").attr("src")) + ")");
    recommended = $(".slick-current h2").text();
};

$(document).ready(function () {
    createCarousel("carouselA");
    $(".desc h2").text($(".slick-current h2").text());
    $(".desc p").text($(".slick-current p").text());
    $(".item_title").text($(".slick-current h2").text());
    $(".item_price").text($(".slick-current article").text() + "$");
    if (sessionStorage.getItem("lucky") == 'true') {
        sessionStorage.setItem("lucky", false);
        buttons = document.getElementsByClassName('next');
        lucky = true;
        var i = 0;
        var looper = setInterval(function () {
            if (i < 4) {
                buttons[i].click();
                i++;
            }
            else
                clearInterval(looper);
        }, 0);
    }
    else {
        $(".backmobile").css("display", "none!important");
        $("#finishmobile").css("display", "none!important");
    }

});

$("#wizard").on("click", ".finish", function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
});

$("#wizard").on("click", ".edit", function () {
    name = $("#sectitle").text();
    creator = $(".thirdCol h6").text();
    var src = "images/guitar_" + final.substring(0, final.length - 4) + "_up.png";
    var today = new Date();
    var link = "images/guitar_" + final;
    sessionStorage.setItem("src", link);
    sessionStorage.setItem("total", price);
    $.ajax({
        url: 'includes/call.php',
        data: {
            'editGuitar': 'editGuitar', 'name': name, 'creator': creator, 'pickup': pickup, 'neck': neck,
            'body': body, 'bridge': bridge, 'price': price, 'img': src
        },
        type: 'post',
        success: function (response) {
            console.log("Success");
            console.log(response);
            window.location = 'successedit.html'
        },
        error: function (xhr, status, error) {
            console.log("Failed + " + error + " + " + status + " + " + xhr.responseText);
        }
    });
});

$("#wizard").on("click", ".submit", function () {
    name = document.getElementsByClassName("guitarName")[0].value;
    if (name == "")
        name = "myGuitar";
    var src = "images/guitar_" + final.substring(0, final.length - 4) + "_up.png";
    if (document.getElementsByClassName("public")[0].checked)
        private = 0;
    var today = new Date();
    var link = "images/guitar_" + final;
    sessionStorage.setItem("src", link);
    sessionStorage.setItem("total", price);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    $.ajax({
        url: 'includes/call.php',
        data: {
            'insertGuitar': 'insertGuitar', 'name': name, 'email': email, 'pickup': pickup, 'neck': neck,
            'body': body, 'bridge': bridge, 'private': private, 'price': price, 'img': src, 'created': today
        },
        type: 'post',
        success: function (response) {
            console.log("Success");
            console.log(sessionStorage.getItem("src"));
            window.location = 'success.html'
        },
        error: function (xhr, status, error) {
            console.log("Failed + " + error + " + " + status + " + " + xhr.responseText);
        }
    });
});

$("#wizard").on("click", ".closePopup", function () {

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});

$("#wizard").on("click", ".next", function () {
    if (lucky) {
        Duration = 0;
        animating = false;
    }
    else
        Duration = 800;
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent().parent();
    next_fs = $(this).parent().parent().next();
    step++;
    //activate next step on progressbar using the index of next_fs
    // $("#progressbar li").eq($("section").index(current_fs)).addClass("active");
    $("#progressbar li").eq($("#wizard section").index(next_fs)).addClass("active");
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'width': '45%',
                'position': 'absolute'
            });
            next_fs.css({'left': left, 'opacity': opacity});
        },
        duration: Duration,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });

    var current_title = $(".desc h2").html();

    if (step < 4) {
        $("#builder section").append('<div class="item"><div class="item_thumb"></div> <div class="item_title"></div><div class="item_price"></div></div>');
    }


    switch (step) {
        case 1: {
            pickup = $(".slick-current h2").text();
            deleteCarousel("carouselA");
            createCarousel("carouselB");
            break;
        }
        case 2: {
            body = $(".slick-current h2").text();
            final = $(".slick-current img").attr("src").substring(12);
            deleteCarousel("carouselB");
            createCarousel("carouselC");

            break;
        }
        case 3: {
            neck = $(".slick-current h2").text();
            deleteCarousel("carouselC");
            createCarousel("carouselD");
            break;
        }
        case 4: {
            bridge = $(".slick-current h2").text();
            $("#guitar_pic").css("background-image", "url(images/guitar_" + final + ")");
            break;
        }
    }
    calculate();
    $(".item_total p").text("Total: " + price + "$");
});


$(".previous").click(function () {
    Duration = 800;
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("section").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {

            scale = 0.8 + (1 - now) * 0.2;
            left = ((1 - now) * 50) + "%";
            opacity = 1 - now;
            current_fs.css({'left': left});
            previous_fs.css({'transform': 'scale(' + scale + ')', 'opacity': opacity});
        },
        duration: Duration,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

