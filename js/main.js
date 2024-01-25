function rodizioplacas(){
let numSign;
let wDay;
let typeAuto;
let hora;
let typeStreet;
document.getElementById("button").onclick = function () {
    numSign = document.getElementById("placa").value;
    wDay = document.getElementById("semana").value;
   typeAuto = document.getElementById("automovel").value;
    hora = document.getElementById("horario").value;
    typeStreet = document.getElementById("circulacao").value;

    if ((numSign == 1 || numSign == 2) && (wDay == "Segunda-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora <= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else if ((numSign == 3 || numSign == 4) && (wDay == "Terça-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora<= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else if ((numSign == 5 || numSign == 6) && (wDay == "Quarta-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora <= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else if ((numSign == 7 || numSign == 8) && (wDay == "Quinta-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora<= 10) || (hora>= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }
    
    else if ((numSign == 9 || numSign == 0) && (wDay == "Sexta-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora <= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }
    else if ((typeAuto == "Caminhão") &&  (typeStreet == "Vias limítrofes")) {
        document.getElementById("carros").textContent = ` Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else{
        document.getElementById("carros").textContent = ` Seu automóvel poderá passar nessa via com essas informações:)`
    }
}
}