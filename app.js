import stickyMenu from "./js/navbar.js";
import moveUp from "./js/scrollUp.js";
import showInfo from "./js/show-content.js";

const d = document;
d.addEventListener("DOMContentLoaded", ()=>{
stickyMenu(".nav-menu", "sticky-menu", "#open-menu", "active");
showInfo();
moveUp("btn-up", "active");
})