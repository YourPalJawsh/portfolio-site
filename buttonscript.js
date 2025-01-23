function setDefaultMode() {
    document.body.classList.remove('lightmode');
    document.body.classList.remove('darkmode');
    document.body.classList.add('root');
    document.getElementById("modeInfo").innerHTML = "Current Mode: Default";
}

function setDarkMode() {
    document.body.classList.remove('lightmode');
    document.body.classList.remove('root');
    document.body.classList.add('darkmode');
    document.getElementById("modeInfo").innerHTML = "Current Mode: Dark Mode";
}

function setLightMode() {
    document.body.classList.remove('darkmode');
    document.body.classList.remove('root');
    document.body.classList.add('lightmode');
    document.getElementById("modeInfo").innerHTML = "Current Mode: Light Mode";
}