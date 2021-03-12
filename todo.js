const menu = document.getElementById('nav-icon3');
const menu_toggle = document.getElementById('myDIV');

menu.addEventListener('click', (event) => {
    let x = document.getElementById("myDIV");
    if (x.style.display == "none") {
      x.style.display = "flex";
      menu.style.backgroundColor = "#ac3361";
    } else {
        x.style.display = "none";
        menu.style.backgroundColor = "#c13f71";
    }
    event.stopPropagation();
})

document.addEventListener('click', () => {
    let x = document.getElementById("myDIV");
    x.style.display = "none";
    menu.style.backgroundColor = "#c13f71";
})

menu_toggle.addEventListener('click', (event) => {
    event.stopPropagation();
})