// Pozivanje funkcija i pravljenje animacija u jQuery-ju

$(document).ready(function() {

    navigation();

    ispisPrve4Igre();

    $('.loadMore').click(ispis2Igre);
    
});






// Pravljenje dinamicke navigacije

function navigation() {
    
    var navigacija = [['Home','index.html'],['Games','games.html'],['About Us','about.html'], ['Contact Us','#kontakt'],['Documentation', 'mojaDokumentacija.pdf']];

    var nav = '<ul>';

    var slika = '<a href="index.html"><img src="images/logo.png" alt="Darken Games Logo" class="logo"/></a>';

    for(let i = 0 ; i < navigacija.length ; i++) {

        if(navigacija[i][0] != 'Documentation'){
            nav += `<li><a class="closeNavSide" href="${navigacija[i][1]}">${navigacija[i][0]}</a></li>`;
        }

        if(navigacija[i][0] == 'Documentation'){
            nav += `<li><a class="closeNavSide" download href="${navigacija[i][1]}">${navigacija[i][0]}</a></li>`;
        }

    }

    nav += '</ul>';

    var ponavljanjeNavigacije = document.getElementsByClassName('right');

    var ponavljanjeLogo = document.getElementsByClassName('left');

    for(var i = 0 ; i < ponavljanjeNavigacije.length ; i++) {

        ponavljanjeNavigacije[i].innerHTML += nav;
        
    }

    for(var i = 0 ; i < ponavljanjeLogo.length ; i++) {

        ponavljanjeLogo[i].innerHTML += slika;
        
    }

    // console.log(document.URL.includes('index.html'))

    // $(".slidingDiv").toggle("slide");
    


}

function ispisPrve4Igre() {

    var prve4Igre = [['cod.jpg','Call Of Duty : Black Ops 3'], ['fortnite.png','Fortnite'], ['minecraft.jpg','Minecraft'], ['pubg.jpg','PUBG']];

    for(var i = 0 ; i < prve4Igre.length ; i++) {

    document.querySelector('.gamesSpecial').innerHTML += `<div class='bestGames gamesBestGames'>
    <div class="topGame"><div class="topGameImgHolder"><img src="images/${prve4Igre[i][0]}" class="topGamePicture img-fluid" alt="${prve4Igre[i][1]}"/></div><h3>${prve4Igre[i][1]}</h3><a href="#!">Check it out !</a></div>
    </div>`;

    }


}

var izbaciIgreBrojac = 0;

function ispis2Igre() {

    if(izbaciIgreBrojac == 2) {
        
        document.querySelector('.loadMore').style.display = 'none';

    }

    var raspoloziveIgre = [['swb2.jpg', 'Star Wars Battlefront 2', 'residentEvil2.jpg', 'Resident Evil 2'], ['borderlands.jpg', 'Borderlands 3', 'portal2.jpg', 'Portal'], ['farcry4.jpg', 'Far Cry 4', 'needForSpeed.png', 'Need For Speed']];

    document.querySelector('.gamesSpecial').innerHTML += `<div class='bestGames gamesBestGames'>
    <div class="topGame">
    <div class="topGameImgHolder">
    <img src="images/${raspoloziveIgre[izbaciIgreBrojac][0]}" class="topGamePicture img-fluid" alt="${raspoloziveIgre[izbaciIgreBrojac][1]}"/>
    </div>
    <h3>${raspoloziveIgre[izbaciIgreBrojac][1]}</h3>
    <a href="#!">Check it out !</a>
    </div>
    </div>
    <div class='bestGames gamesBestGames'>
    <div class="topGame"><div class="topGameImgHolder">
    <img src="images/${raspoloziveIgre[izbaciIgreBrojac][2]}" class="topGamePicture img-fluid" alt="${raspoloziveIgre[izbaciIgreBrojac][3]}"/>
    </div>
    <h3>${raspoloziveIgre[izbaciIgreBrojac][3]}</h3>
    <a href="#!">Check it out !</a>
    </div>
    </div>`;

    izbaciIgreBrojac++;

    console.log(izbaciIgreBrojac);

}




