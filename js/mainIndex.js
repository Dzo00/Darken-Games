// Pozivanje funkcija i pravljenje animacija u jQuery-ju

$(document).ready(function() {

    navigation();

    menjanjeNaslovaITeksta();

    bestGamesIspisivanje();

    papirKamenMakazeBlokovi();

    papirKamenMakaze();
    

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

// Dinamicko menjanje background image-a i h2 taga u main sekciji

function menjanjeNaslovaITeksta() {

    var nizH2Tekstova = ['Feel the game.', 'Ready to play ?', 'Explore our world.', 'Buy. Play. Win.'];

    var nizSlika = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg'];

    var randH2 = Math.floor(Math.random() * nizH2Tekstova.length);

    var randSlika = Math.floor(Math.random() * nizSlika.length);

    document.getElementById('fillmeH2').innerHTML = nizH2Tekstova[randH2];

    document.querySelector('.main').style.backgroundImage = `url(./images/${nizSlika[randSlika]})`;


}


// Dinamicko ispisivanje top 3 igara


function bestGamesIspisivanje() {

    var top3Games = [['skyrim.jpg','The Elder Scrolls V : Skyrim','skyrim.html'],['mortalKombat.png','Mortal Kombat X','mortalKombat.html'],['mario.jpg','Super Mario Run','mario.html']];

    
    for(var i = 0 ; i < top3Games.length ; i++) {

        document.querySelector('.bestGames').innerHTML += `<div class="topGame col-lg-4 col-md-12"><div class="topGameImgHolder"><img src="images/${top3Games[i][0]}" class="topGamePicture img-fluid" alt="Top game this month"/></div><h3>${top3Games[i][1]}</h3><a href="#!">Check it out !</a></div>`;

    }


}


// Pravljenje blokova za iks oks

function papirKamenMakazeBlokovi() {

    var iksOksNiz = [['<i class="fas fa-hand-rock rock"></i>', 'kamen'], ['<i class="fas fa-hand-paper paper"></i>','papir'], ['<i class="fas fa-hand-scissors scissors"></i>','makaze']];

    for(var i = 0 ; i < iksOksNiz.length ; i++) {

        document.querySelector('.signs').innerHTML += `<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 holdSign'><a href="#!" class="${iksOksNiz[i][1]}">${iksOksNiz[i][0]}</a></div>`;

    }

}


// Funkcija za iks oks

function papirKamenMakaze(){

    var nizZnakova = ['p','k','m'];

    var status = document.querySelector('.status');

    var kamen = document.querySelector('.kamen');

    var papir = document.querySelector('.papir');

    var makaze = document.querySelector('.makaze');

    var mojZnak = document.getElementById('youSign');

    var aiZnak = document.getElementById('aiSign');

    let mojScore = document.getElementById('player');

    let aiScore = document.getElementById('ai');

    let scoreMe = 0;

    let scoreAi = 0;

    mojScore.innerHTML = 0;

    aiScore.innerHTML = 0;

    function provera() {

        if(scoreMe == 10) {

            status.classList.add('winnerYou');

            status.classList.remove('winnerAI');

            status.innerHTML = 'You win !';

            scoreMe = 0;

            scoreAi = 0;

            mojScore.innerHTML = '0';

            aiScore.innerHTML = '0';

        }

        if(scoreAi == 10) {

            status.classList.add('winnerAI');

            status.classList.remove('winnerYou');

            status.innerHTML = 'Computer wins !';

            scoreMe = 0;

            scoreAi = 0;

            mojScore.innerHTML = '0';

            aiScore.innerHTML = '0';

        }

    }

    // Kamen

    kamen.addEventListener('click', function() {

        var randZnak = Math.floor(Math.random() * nizZnakova.length);
        
        mojZnak.innerHTML = 'Rock';

        if(nizZnakova[randZnak] == 'p') {

            scoreAi++;

            aiScore.innerHTML = scoreAi;

            aiZnak.innerHTML = 'Paper';

            status.innerHTML = ``;

        }

        if(nizZnakova[randZnak] == 'k') {

            status.innerHTML = `It's a draw !`

            aiZnak.innerHTML = 'Rock';

        }

        if(nizZnakova[randZnak] == 'm') {

            scoreMe++;

            mojScore.innerHTML = scoreMe;

            aiZnak.innerHTML = 'Scissors'

            status.innerHTML = ``;

        }

        provera();

    });

    // Papir

    papir.addEventListener('click', function() {

        var randZnak = Math.floor(Math.random() * nizZnakova.length);
        
        mojZnak.innerHTML = 'Paper';

        if(nizZnakova[randZnak] == 'p') {

            status.innerHTML = `It's a draw !`

            aiZnak.innerHTML = 'Paper';

        }

        if(nizZnakova[randZnak] == 'k') {

            scoreMe++;

            mojScore.innerHTML = scoreMe;

            aiZnak.innerHTML = 'Rock'

            status.innerHTML = ``;

        }

        if(nizZnakova[randZnak] == 'm') {

            scoreAi++;

            aiScore.innerHTML = scoreAi;

            aiZnak.innerHTML = 'Scissors';

            status.innerHTML = ``;

        }

        provera();

    });

    // Makaze

    makaze.addEventListener('click', function() {

        var randZnak = Math.floor(Math.random() * nizZnakova.length);

        console.log(randZnak);

        console.log(scoreMe)
        
        mojZnak.innerHTML = 'Scissors';

        if(nizZnakova[randZnak] == 'p') {

            scoreMe++;

            mojScore.innerHTML = scoreMe;

            aiZnak.innerHTML = 'Paper'

            status.innerHTML = ``;

        }

        if(nizZnakova[randZnak] == 'k') {

            scoreAi++;

            aiScore.innerHTML = scoreAi;

            aiZnak.innerHTML = 'Rock';

            status.innerHTML = ``;

        }

        if(nizZnakova[randZnak] == 'm') {

            status.innerHTML = `It's a draw !`

            aiZnak.innerHTML = 'Scissors';

        }

        provera();

    });


}


