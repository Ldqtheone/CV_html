var slideIndex = 1;
showClients(slideIndex);

function plusClients(n) {
    showClients(slideIndex += n);
}

function showClients(n) {
    var i;
    var x = document.getElementsByClassName("clientSlide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "flex";
}