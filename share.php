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
            <a href="#" id="profileName">Shlomi Ezra</a>
            <a href="#" id="profilePic"><img src="images/users/yossit.png"></a>
        </section>
        <a href="index.html" id="logo"></a>
    </header>
    <main id="share">
        <?php
        echo '<article class="thirdCol">
                <h1 class="user">YOSSI HAS SHARED "<span>' . $_GET['guitarName'] . '</span>"</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adip scingelit.
                    Etiam sed dignissim odio.</p>
                <button class="edit">EDIT</button>&nbsp;&nbsp;&nbsp;<a href="mailto:' . $_GET['creator'] . '@toshare.com&subject=Wylde - ITS ALL GOOD!&body=Hey i just reviewd your guitar and its all good!">
                <button class="reply">HI-FIVE!</Button></a>
                <h6>' . $email . '</h6>
            </article>';
        ?>
        <article class="twothirdCol">
            <?php
            $name = $_GET['guitarName'];
            $creator = $_GET['creator'];
            $query = "SELECT * FROM tbl_guitars_208 WHERE creator = '$creator' AND guitarName = '$name'";
            $result = mysqli_query($connection, $query);
            $row = $result->fetch_object();
            echo '<div class="twothirdCol" id="builder">';
            echo '<h2>' . $row->guitarName . '</h2><br>';
            echo '<div class="item"><div class="item_thumb"></div><div class="item_title">' . $row->pickup . '</div><div class="item_price"></div></div>';
            echo '<div class="item"><div class="item_thumb"></div><div class="item_title">' . $row->body . '</div><div class="item_price"></div></div>';
            echo '<div class="item"><div class="item_thumb"></div><div class="item_title">' . $row->neck . '</div><div class="item_price"></div></div>';
            echo '<div class="item"><div class="item_thumb"></div><div class="item_title">' . $row->bridge . '</div><div class="item_price"></div></div>';
            echo '<br><p>CREATED BY: ' . $row->creator . '</p>';
            echo '<p>PRICE: ' . $row->price . '$</p>';
            echo '</div>';
            echo '<div class="thirdCol">';
            echo '<img src=' . $row->img . '>';
            echo '</div>';
            ?>

</div>
</article>
</main>

</div>
<footer>
    <script src="includes/menu.js"></script>
    <div class="container">
        <a href="#"><span>CONTACT US</span></a>
        <span>Copyright © 2017 Gady Ezra & Eldad Corem</span>
    </div>
    <script>
        $(document).ready(function () {

            $('.exploreCarousel').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
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
