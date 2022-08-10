function hideLoadingScreen() {
    let loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.style.right = "100%";
}

window.addEventListener("load", hideLoadingScreen());
