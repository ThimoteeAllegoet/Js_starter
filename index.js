const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const play = (choix_user) => {
    choix_bot = getRandomInt(3);
    console.log('Moi : ' + choix_user);
    console.log('Bot : ' + choix_bot);
    
    if (choix_user == choix_bot) {
        return 'Egalité'
    } else if (choix_user < choix_bot){
        if (choix_bot == 2 && choix_user == 0) {
            return 'Perdu'
        }
        return 'Gagné'
    } else if (choix_user == 2 && choix_bot == 0) {
        return 'Gagné'
    } else {
        return 'Perdu'
    }
}

const result_style = (result) => {
    document.getElementById("result").innerHTML = result;
    document.getElementById("adversaire").innerHTML = "L'adversaire a choisit : " + monTableau[choix_bot][1];
    
    if (result == 'Gagné') {
        result_color.style.color = '#40C25F';
        result_color_border.style.borderTopColor = '#40C25F';
    } else if (result == 'Egalité') {
        result_color.style.color = '#FFA04A';
        result_color_border.style.borderTopColor = '#FFA04A';
    } else {
        result_color.style.color = '#FF4848';
        result_color_border.style.borderTopColor = '#FF4848';
    }
}

const feuille = document.getElementById('feuille');
const pierre = document.getElementById('pierre');
const ciseaux = document.getElementById('ciseaux');
const items = document.getElementsByClassName('item');
const menu = document.getElementById('nav-icon3');
const result_color = document.getElementById("result");
const result_color_border = document.getElementById("result-content");
const menu_toggle = document.getElementById('myDIV');
let choix_user = null;
let choix_bot = null;
const monTableau = [[0, 'Feuille'],[1, 'Pierre'],[2, 'Ciseaux'],];

feuille.addEventListener('click', () => {
    choix_user = 0;
    const result = play(choix_user);
    result_style(result);
})

pierre.addEventListener('click', () => {
    choix_user = 1;
    const result = play(choix_user);
    result_style(result);
})

ciseaux.addEventListener('click', () => {
    choix_user = 2;
    const result = play(choix_user);
    result_style(result);
})

menu.addEventListener('click', (event) => {
    let x = document.getElementById("myDIV");
    if (x.style.display == "none") {
      x.style.display = "flex";
      menu.style.backgroundColor = "#3ab256";
    } else {
        x.style.display = "none";
        menu.style.backgroundColor = "#40C25F";
    }
    event.stopPropagation();
})

document.addEventListener('click', () => {
    let x = document.getElementById("myDIV");
    x.style.display = "none";
    menu.style.backgroundColor = "#40C25F";
})

menu_toggle.addEventListener('click', (event) => {
    event.stopPropagation();
})
