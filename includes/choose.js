$(document).ready(function () {
    var link = document.getElementById("selection").childNodes[1].childNodes[1];
    link.addEventListener('click', hiddenForm, false);
    var link = document.getElementById("selection").childNodes[1].childNodes[3];
    link.addEventListener('click', hiddenForm, false);
    var link = document.getElementById("selection").childNodes[3].childNodes[1];
    link.addEventListener('click', hiddenForm, false);
    var link = document.getElementById("selection").childNodes[3].childNodes[3];
    link.addEventListener('click', hiddenForm, false);
});

function hiddenForm(e) {
    theForm = document.createElement('form');
    theForm.action = 'wizard.php';
    theForm.method = 'post';
    newInput = document.createElement('input');
    newInput.type = 'hidden';
    newInput.name = 'email';
    if (sessionStorage.getItem("email") != null)
        newInput.value = sessionStorage.getItem("email");
    else
        newInput.value = sessionStorage.setItem("email", "yossit@gmail.com");
    console.log(sessionStorage.getItem("email"));
    theForm.appendChild(newInput);
    if ((e.target == document.getElementById("selection").childNodes[1].childNodes[1]) || (e.target == document.getElementById("selection").childNodes[1].childNodes[3])) {
        sessionStorage.setItem("lucky", true);
        newInput = document.createElement('input');
        newInput.type = 'hidden';
        newInput.name = 'lucky';
        newInput.value = true;
        theForm.appendChild(newInput);
    }
    else
        sessionStorage.setItem("lucky", false);
    document.getElementById('selection').appendChild(theForm);
    theForm.submit();
}