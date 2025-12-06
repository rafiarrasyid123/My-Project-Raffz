const menuIcon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");
const menuIconInner = menuIcon.querySelector("i");


menuIcon.addEventListener("click", () => {
    menulist.classList.toggle("open");
    
    if (menulist.classList.contains("open")) {
        menuIconInner.classList.remove("ri-menu-line");
        menuIconInner.classList.add("ri-close-line");
    } else {
        menuIconInner.classList.remove("ri-close-line");
        menuIconInner.classList.add("ri-menu-line");
    }
});