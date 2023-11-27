

const faviconTag = document.getElementById("favicon-tag");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

if (isDarkMode.matches) {
    faviconTag.href = "assets/images/logos/lj-lojo-only-white.svg";
}
else {
    faviconTag.href = "assets/images/logos/lj-lojo.svg";
}

