var guitarName, creator, price;

$(document).ready(function () {

    var array = document.getElementsByClassName("plusIcon");
    for (var i = 0; i < array.length; i++)
        array[i].addEventListener('click', show, false);
    try {
        document.getElementsByClassName("edit")[0].addEventListener('click', edit, false);
        document.getElementsByClassName("reply")[0].addEventListener('click', edit, false);
    }
    catch (err) {
    }
    try {
        document.getElementsByTagName("a")[0].addEventListener('click', orderGuitar, false);
    }
    catch (err) {
    }
});

function edit() {
    var pickup = $(".item_title").eq(0).text();
    var body = $(".item_title").eq(1).text();
    var neck = $(".item_title").eq(2).text();
    var bridge = $(".item_title").eq(3).text();
    theForm = document.createElement('form');
    theForm.action = 'wizard.php';
    theForm.method = 'post';
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'edit';
    input.value = 'edit';
    theForm.appendChild(input);
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'pickup';
    input.value = pickup;
    theForm.appendChild(input);
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'body';
    input.value = body;
    theForm.appendChild(input);
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'neck';
    input.value = neck;
    theForm.appendChild(input);
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'bridge';
    input.value = bridge;
    theForm.appendChild(input);
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'guitarName';
    input.value = $(".user span").text();
    theForm.appendChild(input);
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'creator';
    input.value = $(".thirdCol h6").text();
    theForm.appendChild(input);
    document.getElementById('share').appendChild(theForm);
    theForm.submit();
}

function reply() {
}

function closePopup(e) {
    document.getElementById("lightbox").style.display = "none";

}

function orderGuitar(e) {
    document.getElementById("lightbox").style.display = "none";
    $.ajax({
        url: 'includes/call.php',
        data: {'orderGuitar': 'orderGuitar', 'guitarName': guitarName, 'creator': creator, 'price': price},
        type: 'post',
        success: function (response) {
            console.log(response);
            window.location = "myguitars.php";
        },
        error: function (xhr, status, error) {
            console.log("Failed + " + error + " + " + status + " + " + xhr.responseText);
        }
    });
}

function shareGuitar(e) {
    var link = "share.php?guitarName=" + guitarName + "&creator=" + creator;
    $.ajax({
        url: 'includes/call.php',
        data: {'mailto': 'eldad7@gmail.com', 'link': link},
        type: 'post',
        success: function (response) {
            console.log(link);
        },
        error: function (xhr, status, error) {
            console.log("Failed + " + error + " + " + status + " + " + xhr.responseText);
        }
    });
}

function show(e) {
    guitarName = $(this).parent().parent().children().eq(2).text();
    creator = $(this).parent().parent().children().eq(3).text();
    price = $(this).parent().parent().children().eq(4).text();
    $("#lightbox").css("display", "block");
    $.ajax({
        url: 'includes/call.php',
        data: {'showGuitar': 'showGuitar', 'guitarName': guitarName, 'creator': creator},
        type: 'post',
        success: function (response) {
            var div = document.getElementsByClassName("lbcontent")[0];
            div.innerHTML = response;
            var popup = document.getElementsByClassName("closePopup")[0];
            popup.addEventListener('click', closePopup, false);
            var share = document.getElementsByClassName("share")[0];
            share.addEventListener('click', shareGuitar, false);
            var order = document.getElementsByClassName("order")[0];
            order.addEventListener('click', orderGuitar, false);
        },
        error: function (xhr, status, error) {
            console.log("Failed + " + error + " + " + status + " + " + xhr.responseText);
        }
    });
};

$("#wizard").on("click", ".closePopup", function () {

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});