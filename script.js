/*============= SIDEBAR ==========*/
function openNav() {
    if (screen.width > 680) {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("mainPage").style.marginLeft = "250px";
    document.getElementById("menuBtn").style.display = "none";
    } else {
        document.getElementById("sideNav").style.width = "150px";
        document.getElementById("mainPage").style.marginLeft = "150px";
        document.getElementById("menuBtn").style.display = "none";
    }
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("mainPage").style.marginLeft = "0";
    document.getElementById("menuBtn").style.display = "inline";
}