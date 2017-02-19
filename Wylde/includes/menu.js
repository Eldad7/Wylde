$(document).ready(function () {
    if (sessionStorage.getItem("email") == null)
        document.getElementsByTagName("header")[0].innerHTML += '<nav id="mySidenav" class="sidenav">' +
            '<a href="javascript:void(0)" class="closebtn">&times;</a>' +
            '<a href="index.html">Home</a>' +
            '<a href="analysis.php">Build a Guitar</a>' +
            '<a href="explore.php">Explore</a>' +
            '</nav>' +
            '<a href="#" id="menuicon"></a>';
    else {
        document.getElementsByTagName("header")[0].innerHTML += '<nav id="mySidenav" class="sidenav">' +
            '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
            '<a href="index.html">Home</a>' +
            '<a href="analysis.php">Build a Guitar</a>' +
            '<a href="explore.php">Explore</a>' +
            '<a href="myguitars.php">My Guitars</a>' +
            '<a id="logout" href="index.html">Logout</a>' +
            '</nav>' +
            '<a href="#" id="menuicon" onclick="openNav()"></a>';
        document.getElementById("logout").addEventListener('click', clearStorage, false);
    }
    document.getElementsByClassName("closebtn")[0].addEventListener('click', closeNav, false);
    document.getElementById("menuicon").addEventListener('click', openNav, false);
    document.getElementById("logo").addEventListener('clearStorage', openNav, false);
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function clearStorage() {
    sessionStorage.clear();
    window.location = "index.html";
}