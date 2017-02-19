<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="includes/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet">
    <script src="includes/jquery-3.1.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="includes/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="includes/slick/slick-theme.css"/>
    <script type="text/javascript" src="includes/slick/slick.min.js"></script>
    <script src="includes/jquery.easing.min.js"></script>
    <script src="includes/explore.js"></script>

</head>
<body>
<?php
include('includes/dbConnection.php');
if (isset($_POST['topGenre']))
    $topGenre = $_POST['topGenre'];
else
    $topGenre = 'Metal';
$email = "yossit@gmail.com";
?>
<div class="container">
    <header>
        <section id="headright">
            <a href="#" id="profileName">Yossi Tsaraf</a>
            <a href="#" id="profilePic"><img src="images/users/yossit.png"></a>
        </section>
        <a href="index.html" id="logo"></a>
    </header>
    <main id="explore">
        <h1>Explore our catalog...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adip scingelit.
            Etiam sed dignissim odio.</p>
        <div class="exploreCarousel">
            <?php
            $query = "SELECT * from tbl_guitars_208 where creator = '$email' OR private=0 order by creator='$email' DESC";
            $result = mysqli_query($connection, $query);
            while ($row = $result->fetch_object()) {
                echo '<div>
                         <article>
                    <section class="guitar_top">
                    <div class="plusIcon">+</div>
                    </section>';
                echo '<img src=' . $row->img . '>';
                echo '<h3 class="guitarName">' . $row->guitarName . '</h3>';
                echo '<h3 class="hidden">' . $row->creator . '</h3>';
                echo '<p>' . $row->price . '</p>';
                echo '<p>' . $row->created . '</p>';
                echo '</article>
                          </div>';
            }
            ?>

        </div>
        <div id="lightbox">
            <div class="lbcontent">
                <div class="loader"></div>
            </div>
        </div>
    </main>

</div>
<footer>
    <script src="includes/menu.js"></script>
    <div class="container">
        <a href="#"><span>CONTACT US</span></a>
        <span>Copyright © 2017 Gady Ezra & Eldad Corem</span>
    </div>
    <script>
        $('.exploreCarousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    </script>
</footer>
</body>
<?php
if ($result != null)
    mysqli_free_result($result);
mysqli_close($connection);
?>
</html>
