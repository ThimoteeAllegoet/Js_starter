const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const play = (choix_user) => {
    choix_bot = getRandomInt(3);
    console.log('Moi : ' + choix_user);
    console.log('Bot : ' + choix_bot);
    if (choix_user == choix_bot) {
        return result = ('Egalité')
    } else if (choix_user < choix_bot){
        if (choix_bot == 2 && choix_user == 0) {
            return result = ('Perdu')
        }
        return result = ('Gagné')
    } else if (choix_user == 2 && choix_bot == 0) {
        return result = ('Gagné')
    } else {
        return result = ('Perdu')
    }
}

const result_style = (result) => {
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
const result_color = document.getElementById("result");
const result_color_border = document.getElementById("result-content");
let choix_user = null;
let choix_bot = null;
let result = null;
const monTableau = [[0, 'Feuille'],[1, 'Pierre'],[2, 'Ciseaux'],];

feuille.addEventListener('click', () => {
    choix_user = 0;
    play(choix_user);
    document.getElementById("result").innerHTML = result;
    document.getElementById("adversaire").innerHTML = "L'adversaire à choisit : " + monTableau[choix_bot][1];
    result_style(result);
})

pierre.addEventListener('click', () => {
    choix_user = 1;
    play(choix_user);
    document.getElementById("result").innerHTML = result;
    document.getElementById("adversaire").innerHTML = "L'adversaire à choisit : " + monTableau[choix_bot][1];
    result_style(result);
})

ciseaux.addEventListener('click', () => {
    choix_user = 2;
    play(choix_user);
    document.getElementById("result").innerHTML = result;
    document.getElementById("adversaire").innerHTML = "L'adversaire à choisit : " + monTableau[choix_bot][1];
    result_style(result);
})