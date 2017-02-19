<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="includes/style.css">
    <script src="includes/jquery-3.1.1.min.js"></script>
    <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet">
</head>
<body>
<?php
include('includes/dbConnection.php');
if (isset($_POST['email'])) {
    $firstName = "Mrs.";
    $lastName = "Jones";
    $img = "images/profile.png";
    $email = $_POST['email'];
    if ($email == "")
        $email = "yossit@gmail.com";
    $password = $_POST['password'];
    $query = "INSERT INTO tbl_users_208 VALUES ('$firstName','$lastName','$email', '$password', null,null,null,null,null,'$img')";
    mysqli_query($connection, $query);
}
?>
<div class="container">
    <header>
        <?php
        if (isset($_POST['email'])) {
            echo '<section id="headright">
                    <a href="#" id="profileName">' . $firstName . " " . $lastName, '</a>
                    <p id=hidden>' . $email . '</p>
                    <a href="#" id="profilePic"><img src="images/profile.png"></a>
                </section>';
        } else
            echo '<section id="headright">
                    <a href="#" id="profileName">Yossi Tsaraf</a>
                    <p id=hidden>yossit@gmail.com</p>
                    <a href="#" id="profilePic"><img src="images/users/yossit.png"></a>
                </section>';
        ?>
        <a href="index.html" id="logo"></a>
    </header>

    <main id="analysis">
        <article>
            <h1>LET'S ANALAYZE YOUR PLAYLIST</h1>
            <h3>Show us what you're made of</h3>
            <input id="addbands" type="text" placeholder="Manually add artists (15 max)">
            <span id="add">+</span>
        </article>
        <article id="artists">
            <p>You can leave this empty, but you won't get the best for <span id=sectitle>you</span>!</p>
        </article>
        <a href="choose.html">
            <button>LETS START CREATING</button>
        </a>
    </main>

</div>
<footer>
    <div class="container">
        <a href="#"><span>CONTACT US</span></a>
        <span>Copyright © 2017 Gady Ezra & Eldad Corem</span>
        <script src="includes/menu.js"></script>
        <script src="includes/manuallogin.js"></script>
    </div>
</footer>
<script>sessionStorage.setItem("email", document.getElementById("hidden").innerHTML);
    console.log(sessionStorage.getItem("email"));</script>
</body>
<?php
mysqli_close($connection);
?>
</html>
