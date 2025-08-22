fetch("../components/nav-bar.html")
    .then(response => response.text())
    .then(navbar => {
        document.getElementById("nav-bar").innerHTML = navbar;
});