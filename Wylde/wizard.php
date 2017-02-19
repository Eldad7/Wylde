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
</head>
<body>
<?php
include('includes/dbConnection.php');
if (isset($_POST['email']))
    $email = $_POST['email'];
else
    $email = "yossit@gmail.com";
if (isset($_POST['edit'])) {
    $pickup = $_POST['pickup'];
    $body = $_POST['body'];
    $neck = $_POST['neck'];
    $bridge = $_POST['bridge'];
    $email = $_POST['creator'];
}
$query = "SELECT firstGenre from tbl_users_208 WHERE email = '$email'";
$result = mysqli_query($connection, $query);
$row = $result->fetch_object();
$topGenre = $row->firstGenre;
?>
<div class="container">
    <header>
        <section id="headright">
            <a href="#" id="profileName">Yossi Tsaraf</a>
            <a href="#" id="profilePic"><img src="images/users/yossit.png"></a>
        </section>
        <a href="index.html" id="logo"></a>
    </header>
    <main id="wizard">
        <article class="twothirdCol">
            <section>
                <h1>Start with choosing a body...</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adip scingelit.
                    Etiam sed dignissim odio.</h4>
                <div class="carouselA">
                    <?php
                    if (isset($_POST['lucky']))
                        $query = "SELECT * from tbl_guitarParts_208 where type = 1 AND topGenre='$topGenre'";
                    else if (isset($_POST['edit'])) {
                        $query = "SELECT * from tbl_guitarParts_208 where type = 1 order by name='$pickup' DESC";
                    } else
                        $query = "SELECT * from tbl_guitarParts_208 where type = 1 order by topGenre='$topGenre' DESC";
                    $result = mysqli_query($connection, $query);
                    while ($row = $result->fetch_object()) {
                        echo '<div>';
                        echo '<img src=' . $row->img . '>';
                        echo '<H2>' . $row->name . '</H2>';
                        echo '<p>' . $row->description . '</p>';
                        echo '<article>' . $row->price . '</article>';
                        echo '</div>';
                    }
                    ?>
                </div>
                <div class="desc">
                    <h2>Loading...</h2>
                    <h5>Recomended For You!</h5>
                    <p>Please wait while the item is loading...</p>
                    <button class="next">SELECT THE PICKUP</button>
                </div>
            </section>
            <section>
                <h1>Start with choosing a body...</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adip scingelit.
                    Etiam sed dignissim odio.</h4>
                <div class="carouselB">
                    <?php
                    if (isset($_POST['lucky']))
                        $query = "SELECT * from tbl_guitarParts_208 where type = 2 AND topGenre='$topGenre'";
                    else if (isset($_POST['edit'])) {
                        $query = "SELECT * from tbl_guitarParts_208 where type = 2 order by name='$body' DESC";
                    } else
                        $query = "SELECT * from tbl_guitarParts_208 where type = 2 order by topGenre='$topGenre' DESC";
                    $result = mysqli_query($connection, $query);
                    while ($row = $result->fetch_object()) {
                        echo '<div>';
                        echo '<img src=' . $row->img . '>';
                        echo '<H2>' . $row->name . '</H2>';
                        echo '<p>' . $row->description . '</p>';
                        echo '<article>' . $row->price . '</article>';
                        echo '</div>';
                    }
                    ?>
                </div>
                <div class="desc">
                    <h2>Loading...</h2>
                    <h5>Recomended For You!</h5>
                    <p>Please wait while the item is loading...</p>
                    <button class="next">SELECT THE BODY</button>
                </div>
            </section>
            <section>
                <h1>Start with choosing a body...</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adip scingelit.
                    Etiam sed dignissim odio.</h4>
                <div class="carouselC">
                    <?php
                    if (isset($_POST['lucky']))
                        $query = "SELECT * from tbl_guitarParts_208 where type = 3 AND topGenre='$topGenre'";
                    else if (isset($_POST['edit'])) {
                        $query = "SELECT * from tbl_guitarParts_208 where type = 3 order by name='$neck' DESC";
                    } else
                        $query = "SELECT * from tbl_guitarParts_208 where type = 3 order by topGenre='$topGenre' DESC";
                    $result = mysqli_query($connection, $query);
                    while ($row = $result->fetch_object()) {
                        echo '<div>';
                        echo '<img src=' . $row->img . '>';
                        echo '<H2>' . $row->name . '</H2>';
                        echo '<p>' . $row->description . '</p>';
                        echo '<article>' . $row->price . '</article>';
                        echo '</div>';
                    }
                    ?>
                </div>
                <div class="desc">
                    <h2>Loading...</h2>
                    <h5>Recomended For You!</h5>
                    <p>Please wait while the item is loading...</p>
                    <button class="next">SELECT THE NECK</button>
                </div>
            </section>
            <section>
                <h1>Start with choosing a body...</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adip scingelit.
                    Etiam sed dignissim odio.</h4>
                <div class="carouselD">
                    <?php
                    if (isset($_POST['lucky']))
                        $query = "SELECT * from tbl_guitarParts_208 where type = 4 AND topGenre='$topGenre'";
                    else if (isset($_POST['edit'])) {
                        $query = "SELECT * from tbl_guitarParts_208 where type = 4 order by name='$bridge' DESC";
                    } else
                        $query = "SELECT * from tbl_guitarParts_208 where type = 4 order by topGenre='$topGenre' DESC";
                    $result = mysqli_query($connection, $query);
                    while ($row = $result->fetch_object()) {
                        echo '<div>';
                        echo '<img src=' . $row->img . '>';
                        echo '<H2>' . $row->name . '</H2>';
                        echo '<p>' . $row->description . '</p>';
                        echo '<article>' . $row->price . '</article>';
                        echo '</div>';
                    }
                    ?>
                </div>
                <div class="desc">
                    <h2>Loading...</h2>
                    <h5>Recomended For You!</h5>
                    <p>Please wait while the item is loading...</p>
                    <button class="next">SELECT THE BRIDGE</button>
                </div>
            </section>
            <section>
                <?php
                if (isset($_POST['edit']))
                    echo '<h1>NOW THATS <span id="sectitle">' . $_POST["guitarName"] . '</span></h1>
                            <h3>Looks Awesome!</h3>';
                else
                    echo '<h1>NOW THATS <span id="sectitle">YOUR</span> GUITAR!</h1>
                            <h3>Looks Awesome!<br>
                            But you can review it, and change parts if necessary by the creation menu</h3>';
                ?>
                <section id="guitar_pic">
                </section>
                <?php
                if (isset($_POST['edit']))
                    echo '<div class="desc">
                        <button class="edit">Submit your changes!</button>
                            <h5>*Picture for demonstration only</h5>
                        </div>';
                else
                    echo '<div class="desc">
                        <button class="finish">FINISH GUITAR!</button>
                            <h5>*Picture for demonstration only</h5>
                        </div>';
                ?>
                <div id="overlay" class="overlay"></div>
            </section>

        </article>
        <article class="thirdCol" id="builder">
            <ul id="progressbar">
                <li class="active">Pickup</li>
                <li>Body</li>
                <li>Neck</li>
                <li>Bridge</li>
                <li>FINISH</li>
                <?php
                if (isset($_POST['edit']))
                    echo '<h6>' . $_POST['creator'] . '</h6>';
                ?>
            </ul>
            <section>
                <h3>Your Guitar:</h3>
                <div class="item">
                    <div class="item_thumb"></div>
                    <div class="item_title"></div>
                    <div class="item_price"></div>
                </div>
                <div class="item_total">
                    <p>Total: 0$</p>
                </div>
            </section>
            <a href="analysis.php">
                <button class="backmobile">BACK</button>
            </a>
            <button class="finish" id="finishmobile">FINISH</button>
        </article>
        <div id="popup" class="popup">
            <span class="closePopup">X</span>
            <label>Name your guitar: &nbsp;<input class="guitarName" type="text" name="guitarName"
                                                  placeholder="Guitar name"></label>
            <label>I Want to share my Guitar: <input class="public" type="checkbox" name="public"></label>
            <button class="submit">FINISH</button>
        </div>
    </main>

</div>
<footer>
    <script src="includes/wizard.js"></script>
    <script src="includes/menu.js"></script>
    <script type="text/javascript" src="includes/slick/slick.min.js"></script>
    <script src="includes/jquery.easing.min.js"></script>
    <div class="container">
        <a href="#"><span>CONTACT US</span></a>
        <span>Copyright © 2017 Gady Ezra & Eldad Corem</span>
    </div>
</footer>
</body>
<?php
if ($result != null)
    mysqli_free_result($result);
mysqli_close($connection);
?>
</html>
