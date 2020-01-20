const moment = require('moment');// a bliblioteca moment doi importada

moment.locale('pt-br');// troca a biblioteca para a versão em portugues br

let dia = moment().format('dddd');

console.log('O dia atual é '+dia);