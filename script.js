var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

if (menuIcon && sidebar && container) {
    menuIcon.onclick = function() {
        sidebar.classList.toggle("small-sidebar");
        // Adjust container padding when sidebar is small
        if (sidebar.classList.contains("small-sidebar")) {
            container.style.paddingLeft = "7%";
        } else {
            container.style.paddingLeft = "17%";
        }
    };
} else {
    console.error("Required elements not found in the DOM.");
}