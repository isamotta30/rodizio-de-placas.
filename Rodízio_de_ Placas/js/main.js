function rodizioplacas(){
let numSign;
let wDay;
let typeAuto;
let hora;
let typeStreet;
document.getElementById("button").onclick = function () {
    numSign = document.getElementById("myInput").value;
    wDay = document.getElementById("myInput2").value;
   typeAuto = document.getElementById("myInput3").value;
    hora = document.getElementById("myInput4").value;
    typeStreet = document.getElementById("myInput5").value;

    if ((numSign == 1 || numSign == 2) && (wDay == "Segunda-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora <= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else if ((numSign == 3 || numSign == 4) && (wDay == "Segunda-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora<= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else if ((numSign == 5 || numSign == 6) && (wDay == "Segunda-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora <= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else if ((numSign == 7 || numSign == 8) && (wDay == "Segunda-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora<= 10) || (hora>= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }
    
    else if ((numSign == 9 || numSign == 0) && (wDay == "Segunda-feira") && (typeAuto == "Carro") && ((hora >= 7 && hora <= 10) || (hora >= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = `Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else if ((typeAuto == "Caminhão") && ((hour >= 7 && hour <= 10) || (hora>= 17 && hora <= 20)) && (typeStreet == "Áreas vermelhas")) {
        document.getElementById("carros").textContent = ` Seu automóvel não poderá passar nessa via com essas informações :(`
    }

    else{
        document.getElementById("carros").textContent = ` Seu automóvel poderá passar nessa via com essas informações:)`
    }
}
}