/**
 * Created by gadyezra on 1/12/17. Edited by Eldad Corem on 16/02/2017
 */

var mybands;
var email;

$(document).ready(function () {

    if (sessionStorage.getItem("email") == null)
        sessionStorage.setItem("email", "yossit@gmail.com");
    email = sessionStorage.getItem("email");
    $.getJSON("includes/json/bands.json", function (data) {
        mybands = data;
        $.each(data, function (key, val) {
            $("#artists").append('<section class="artist"><a href="#" class="cancel"></a>' + val.artist + '</section>');
        });
    });

    $("input").keyup(function () {
        if ($("input").val().length != 0) {
            $("#add").css({"display": "initial"});
        }
        else {
            $("#add").css({"display": "none"});
        }
    });

    $("#analysis").on("click", "span", function () {
        $("#artists").append('<section class="artist"><a href="#" class="cancel"></a>' + $("input").val() + '</section>');
        $("input").val("");
        $("#add").css({"display": "none"});
    });

    document.getElementsByTagName("button")[0].addEventListener('click', calculateGenre, false);
});

function calculateGenre() {
    $.getJSON("includes/json/lastFM.json", function (data) {
        topGenres = [];
        var i = 0;
        $.each(data, function (key, val) {
            if (sessionStorage.getItem(val.style) != null) {
                amount = parseInt(sessionStorage.getItem(val.style));
                amount = parseInt(amount + parseInt(mybands[i].songsNum));
                sessionStorage.setItem(val.style, amount);
                for (var j = 0; j < topGenres.length; j++)
                    if (topGenres[j].Genre === val.style)
                        topGenres[j].Value = amount;
            }
            else {
                sessionStorage.setItem(val.style, mybands[i].songsNum);
                item = {};
                item ["Genre"] = val.style;
                item ["Value"] = mybands[i].songsNum;
                topGenres.push(item);
            }

            i++;
        });
        topGenres.sort(function (a, b) {
            return a[1] - b[1]
        });
        $.ajax({
            url: 'includes/call.php',
            data: {
                'updateGenres': 'updateGenres',
                'firstGenre': topGenres[0].Genre,
                'secondGenre': topGenres[1].Genre,
                'thirdGenre': topGenres[2].Genre,
                'fourthGenre': topGenres[3].Genre,
                'fifthGenre': topGenres[4].Genre,
                'email': email
            },
            type: 'post',
            success: function (response) {
                console.log(response);
            },
            error: function (response, xhr, status, error) {
                console.log("Failed + " + error + " + " + status + " + " + xhr.responseText + response);
            }
        });
    });
}

$("#addbands").autocomplete({
    source: ["Metallica", "Led Zeppelin", "Iron Maiden", "QOTSA", "Arctic Monkeys", "Incubus", "Blink 182"]
});


$("#artists").on("click", ".artist a", function () {
    var to_delete = $(this).parent();
    var text = to_delete[0].textContent;
    console.log(text);
    to_delete.fadeOut(450, function () {
        to_delete.remove();
    });
    var filtered = mybands.filter(function (item) {
        return item.artist !== text;
    });
    mybands = filtered;
});

