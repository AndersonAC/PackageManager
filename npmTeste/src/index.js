const moment = require('moment');// a bliblioteca moment doi importada

moment.locale('pt-br');// troca a biblioteca para a versão em portugues br

let dia = moment().format('dddd');

document.getElementById("dia").innerHTML = "O dia é: " + dia;