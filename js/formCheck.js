$(document).ready(function() {

    $('#dugme').click(proveri);

    $('.painted').blur(oboji);

    $('#selectGames').addClass('crveniBorder');

    $('#selectGames').change(ispisiCheckove);

});

// Provera za formu


function proveri(e) {

    var provera = true;

    e.preventDefault();

    // Hvatanje vrednosti tekstualnih polja i svih polja za greske

    var punoIme = document.getElementById('punoIme').value;

    var mail = document.getElementById('imeMejla').value;

    var area = document.getElementById('area').value;

    var punoImeError = document.getElementById('fullNameError');

    var mailError = document.getElementById('mailError');

    var selectError = document.getElementById('selectError');

    var checkGamesError = document.getElementById('checkedError');

    var areaError = document.getElementById('areaError');

    var agreeError = document.getElementById('agreeError');

    // Regularni izrazi

    // Opciono je da se doda jos jedno ime i jos jedno prezime ako ih neko ima vise
    
    var regPunoIme = /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}(\s[A-Z][a-z]{1,20}){0,2}$/

    // Stavio sam [a-z] {2,11} jer sam na Internetu nasao da postoji domen .investments, pa da budem maksimalno precizan

    var regMail = /^[a-z][a-z\-\d-\.\_]+\@[a-z]+(\.[a-z]{2,11}){1,2}$/

    var regArea = /^([A-z\d\.\-\_\,\/\@\"\'\s\n\!\?])+$/

    // Funkcija za proveru izraza

    function ispisi(reg, tester, errorName, errorText) {

        if(!reg.test(tester)) {

            errorName.innerHTML = String(errorText);

            provera = false;

        }

        else {

            errorName.innerHTML = '';

        }

    };

    ispisi(regPunoIme, punoIme, punoImeError, `You didn't enter your full name correctly !`);

    ispisi(regMail, mail, mailError, `You didn't enter your email correctly !`);

    ispisi(regArea, area, areaError, `You didn't enter anything !`);


    // Selection provera

    var selection = document.getElementById('selectGames').selectedIndex;

    if(selection != 0) {

        selectError.innerHTML = ``;

    }

    else {

        selectError.innerHTML = `You didn't choose type of the game !`;

        provera = false;

    }


    // Agree check

    var checkAgree = document.getElementById('agree');

    if(!checkAgree.checked) {

        agreeError.innerHTML = `You didn't agree with our terms and conditions !`;

        provera = false;

    } 

    else {

        agreeError.innerHTML = '';

    }

    // Checkiranje 3 igara

    var checkIgra = false;
    
    var namesAction = document.getElementsByName('actions');

    var namesFight = document.getElementsByName('fight');

    var namesStrategy = document.getElementsByName('strategy');

    for(var i = 0 ; i < namesAction.length ; i++) {

        console.log(namesAction[i])

        if(namesAction[i].checked) {

            checkIgra = true;
            
        }

    }

    for(var i = 0 ; i < namesFight.length ; i++) {

        console.log(namesFight[i])

        if(namesFight[i].checked) {

            checkIgra = true;
            
        }

    }

    for(var i = 0 ; i < namesStrategy.length ; i++) {

        console.log(namesStrategy[i])

        if(namesStrategy[i].checked) {

            checkIgra = true;
            
        }

    }

    if(!checkIgra) {

        checkGamesError.innerHTML = `You didn't check any of the offered games !`;

        provera = false;

    } else {

        checkGamesError.innerHTML = '';

    }

    if(selection == 0) {

        checkGamesError.innerHTML = ``;
        
    }

    
    // Provera da li je sve uneto dobro 

    if(provera) {

        document.getElementById('uspeh').innerHTML = `You did it ! Message has been sent.`

    } else document.getElementById('uspeh').innerHTML = ``;

}


// Bojenje bordura polja

function oboji() {

    var punoIme = document.getElementById('punoIme').value;

    var punoImeBorder = document.getElementById('punoIme');

    var mail = document.getElementById('imeMejla').value;

    var mailBorder = document.getElementById('imeMejla');

    var area = document.getElementById('area').value;

    var areaBorder = document.getElementById('area');

    var punoImeError = document.getElementById('fullNameError');

    var mailError = document.getElementById('mailError');

    var selectError = document.getElementById('selectError');

    var checkGamesError = document.getElementById('checkedError');

    var areaError = document.getElementById('areaError');

    var agreeError = document.getElementById('agreeError');

    // Regularni izrazi

    var regPunoIme = /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}(\s[A-Z][a-z]{1,20}){0,2}$/

    var regMail = /^[a-z][a-z\-\d-\.\_]+\@[a-z]+(\.[a-z]{2,11}){1,2}$/

    var regArea = /^([A-z\d\.\-\_\,\/\@\"\'\s\n\!\?])+$/


    function zelenoCrveno(reg, tester, field, greska, tekstGreske) {

        if(!reg.test(tester)) {

            field.classList.add('crveniBorder');

            field.classList.remove('zeleniBorder');

            greska.innerHTML = tekstGreske;

        }

        else {

            field.classList.add('zeleniBorder');

            field.classList.remove('crveniBorder');

            greska.innerHTML = '';

        }

    }

    zelenoCrveno(regPunoIme, punoIme, punoImeBorder, punoImeError, `You didn't enter your full name correctly !`);

    zelenoCrveno(regMail, mail, mailBorder, mailError, `You didn't enter your email correctly !`);

    zelenoCrveno(regArea, area, areaBorder, areaError, `You didn't enter anything !`);

}

function ispisiCheckove() {

    var nizAction = [['Tomb Raider', 'tr', 'actions'], ['GTA', 'gta', 'actions'], ['Minecraft','mc', 'actions']];

    var nizFighting = [['Tekken','tekken','fight'], ['Mortal Kombat','mk', 'fight'], ['Street Fighter','sf', 'fight']];

    var nizStrategy = [['Age Of Empires','aoe','strategy'], ['Age Of Mythology','aom', 'strategy'], ['Civilization VI','civilization', 'strategy']];

    var gameChoiceBorder = document.getElementById('selectGames');

    var gameChoice = document.getElementById('selectGames').selectedIndex;

    var divZaChecks = document.querySelector('.checks');

    var selectError = document.getElementById('selectError');

    var checkGamesError = document.getElementById('checkedError');
    

    if(gameChoice == 0) {

        checkGamesError.innerHTML = '';

        selectError.innerHTML = `You didn't choose type of the game !`;

        divZaChecks.innerHTML = '';

        gameChoiceBorder.classList.add('crveniBorder');

        gameChoiceBorder.classList.remove('zeleniBorder');

    }

    if(gameChoice == 1) {

        selectError.innerHTML = '';

        divZaChecks.innerHTML = '';

        gameChoiceBorder.classList.remove('crveniBorder');

        gameChoiceBorder.classList.add('zeleniBorder');

        for(var i = 0 ; i < nizAction.length ; i++) {

            divZaChecks.innerHTML += `<input type="checkbox" name="${nizAction[i][2]}" value="${nizAction[i][0]}" id="${nizAction[i][1]}"/><label class="labelCheck" for="${nizAction[i][1]}">${nizAction[i][0]}</label>`;

        }
        

    }

    if(gameChoice == 2) {

        selectError.innerHTML = '';

        divZaChecks.innerHTML = '';

        gameChoiceBorder.classList.remove('crveniBorder');

        gameChoiceBorder.classList.add('zeleniBorder');

        for(var i = 0 ; i < nizFighting.length ; i++) {

            divZaChecks.innerHTML += `<input type="checkbox" name="${nizFighting[i][2]}" value="${nizFighting[i][0]}" id="${nizFighting[i][1]}"/><label class="labelCheck" for="${nizFighting[i][1]}">${nizFighting[i][0]}</label>`;

        }
        

    }

    if(gameChoice == 3) {

        selectError.innerHTML = '';

        divZaChecks.innerHTML = '';

        gameChoiceBorder.classList.remove('crveniBorder');

        gameChoiceBorder.classList.add('zeleniBorder');

        for(var i = 0 ; i < nizStrategy.length ; i++) {

            divZaChecks.innerHTML += `<input type="checkbox" name="${nizStrategy[i][2]}" value="${nizStrategy[i][0]}" id="${nizStrategy[i][1]}"/><label class="labelCheck" for="${nizStrategy[i][1]}">${nizStrategy[i][0]}</label>`;

        }
        

    }

}