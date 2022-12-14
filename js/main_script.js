'use strict';

// Buttons
let editBut = document.getElementById("edit");
let printBut = document.getElementById("print");
let save = document.getElementById("save");
let controal = document.querySelector(".controal");

// Inputs
// let issuDateInput = document.getElementById("issuDate");
// let refInput = document.getElementById("ref");
let clientNameInputAR = document.getElementById("clientNameAR");
let clientNameInputEN = document.getElementById("clientNameEN");
let addressInputEN = document.getElementById("addressEN");
let addressInputAR = document.getElementById("addressAR");
let clientSinceDateInputEN = document.getElementById("clientSinceDateEN");
let clientSinceDateInputAR = document.getElementById("clientSinceDateAR");
// let accountInputNum = document.getElementById("accountNum");
let recordsDateInputEN = document.getElementById("recordsDateEN");
let recordsDateInputAR = document.getElementById("recordsDateAR");
let monyInputBefor = document.getElementById("monyBefor");
let monyInputAfter = document.getElementById("monyAfter");
let equalInput = document.getElementById("equal");


// Felds
let issuDateFeld = document.querySelector("section .head .right-feld .serial");
let refFeld = document.querySelector("section .head .left-feld .serial");
let addressFeldAR = document.querySelector("section .address .med").childNodes[0];
let addressFeldEN = document.querySelector("section .address .med").childNodes[2];
let clientNameFeldAR = document.querySelector("section .header .name .med").childNodes[0];
let clientNameFeldEN = document.querySelector("section .header .name .med").childNodes[2];
let clientSinceDateFeldAR = document.querySelectorAll("section .header .dates .med span")[1];
let clientSinceDateFeldEN = document.querySelectorAll("section .header .dates .med span")[0];
let accountFeldNum = document.querySelector("section .header .account .med");
let recordsDateFeldEN = document.querySelectorAll("section .header .record .med span")[0];
let recordsDateFeldAR = document.querySelectorAll("section .header .record .med span")[1];
let monyFeldBefor = document.querySelector("section .body .mony-in .med").childNodes[0];
let monyFeldAfter = document.querySelector("section .body .mony-out .med").childNodes[0];
let equalFeld = document.querySelector("section .body .mony .med").childNodes[0];

printBut.onclick = function(e) {
    e.preventDefault();
    window.print();
}
editBut.onclick = function(e) {
    e.preventDefault();
    controal.style.display = "flex";
    addressInputAR.value = addressFeldAR.textContent.trim();
    addressInputEN.value = addressFeldEN.textContent.trim();
    clientNameInputAR.value = clientNameFeldAR.textContent.trim();
    clientNameInputEN.value = clientNameFeldEN.textContent.trim();
    clientSinceDateInputEN.value = clientSinceDateFeldEN.textContent.trim();
    clientSinceDateInputAR.value = clientSinceDateFeldAR.textContent.trim();
    recordsDateInputEN.value = recordsDateFeldEN.textContent.trim();
    recordsDateInputAR.value = recordsDateFeldAR.textContent.trim();
    // monyInputBefor.value = monyFeldBefor.textContent.trim();
    monyInputAfter.value = monyFeldAfter.textContent.trim();
    equalInput.value = equalFeld.textContent.trim();
    
}
let day = rundomNum(1, 1, 30);
let monthe = rundomNum(1, 1, 12);
clientSinceDateFeldEN.textContent = `${day > 9? day : "0"+day}/${monthe > 9? monthe : "0"+monthe}/20${rundomNum(1, 16, 21)}`;

recordsDateFeldEN.textContent = `${new Date().getDate()}/${(new Date().getMonth() + 1)}/${new Date().getFullYear()}`;

issuDateFeld.textContent = `${new Date().getDate()}/${(new Date().getMonth() + 1)}/${new Date().getFullYear()}`;
refFeld.textContent = `090030${rundomNum(4, 0, 9)}${rundomChar()}${rundomChar()}` ;
accountFeldNum.textContent = `6820168${rundomNum(4, 0, 9)}000`;

let equals = `${rundomNum(1, 80, 120)},${rundomNum(1, 1, 9)}${rundomNum(2, 0, 9)}.${rundomNum(2, 0, 9)}`;
monyFeldBefor.textContent = equals;
equalFeld.textContent = equals;


function rundomNum(ittrate, from, to) {
    let newnum = [];
    

    for (let index = 0; index < ittrate; index++) {
        newnum.push((Math.floor(Math.random() * (to - from + 1)) + from))
    }
    return +newnum.join("");
}

function rundomChar() {
    let char = "";
    switch (Math.floor(Math.random()*6)) {
        case 0:
            char = "a" +""+ Math.floor(Math.random()*10);
            break;
        case 1:
            char = "b" +""+ Math.floor(Math.random()*10);
            break;
        case 2:
            char = "c" +""+ Math.floor(Math.random()*10);
            break;
        case 3:
            char = "d" +""+ Math.floor(Math.random()*10);
            break;
        case 4:
            char = "e" +""+ Math.floor(Math.random()*10);
            break;
        case 5:
            char = "f" +""+ Math.floor(Math.random()*10);
            break;
        case 6:
            char = "g" +""+ Math.floor(Math.random()*10);
            break;
    }
    return char;
}

 save.onclick = function(e) {
    e.preventDefault();
    controal.style.display = "none";
    addressFeldAR.textContent = addressInputAR.value.trim();
    addressFeldEN.textContent = addressInputEN.value.trim();
    clientNameFeldAR.textContent = clientNameInputAR.value.trim();
    clientNameFeldEN.textContent= clientNameInputEN.value.trim().toUpperCase();
    clientSinceDateFeldEN.textContent = clientSinceDateInputEN.value.trim();
    clientSinceDateFeldAR.textContent = clientSinceDateInputAR.value.trim();
    recordsDateFeldEN.textContent = recordsDateInputEN.value.trim();
    recordsDateFeldAR.textContent = recordsDateInputAR.value.trim();
    monyFeldBefor.textContent = equalInput.value.trim();
    monyFeldAfter.textContent = monyInputAfter.value.trim();
    equalFeld.textContent = equalInput.value.trim();

 }