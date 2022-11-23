const faviconTag = document.getElementById("favicon-tag");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

if(isDarkMode.matches) faviconTag.href = "lj-lojo-only-white.svg";
else faviconTag.href = "lj-lojo.svg";

