// alert('ciao')

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// ****L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range: con difficoltà 1 => tra 1 e 100 con difficoltà 2 => tra 1 e 81 con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

document.getElementById('play').addEventListener('click', function(){
    play();
});



const bombsNumber = 16;
const arrayBombs = [];


// funzione per  generare le bombe in base alla difficoltà
function generateBombs(maxNumber){
    while(arrayBombs.length < bombsNumber){
        const numeroRandom = Math.floor(Math.random()* maxNumber)+1;
        if(!arrayBombs.includes(numeroRandom)){
            arrayBombs.push(numeroRandom)
        }
    }
    console.log(arrayBombs);
}

// al click sul pulsante play viene generata la griglia in base alla difficoltà scelta
function play() {

    const container = document.querySelector(".container");

    const levelSelected = parseInt(document.getElementById('level').value);
    console.log(levelSelected);

    // let items= '';

    // scelta difficoltà
    switch(levelSelected){
        case 1:
            // creazione griglia facile
            const levEasy = function () {
                const node = document.createElement('div');
                node.className = 'square easy';
            
                return node;
            }
            // generatore bombe
            generateBombs(100); 

            for(let i = 1; i <= 100; i++){            
                const clicked = levEasy();
                container.appendChild(clicked);
                clicked.innerHTML = i;
                clicked.addEventListener('click', function() {
                    console.log(this);
                    this.classList.add('blue');
                });
            }    
            break;

        case 2: 
            // ceazione griglia difficile
        const levHard = function () {
            const node = document.createElement('div');
            node.className = 'square hard';
        
            return node;
        }
        // generatore bombe
        generateBombs(81); 
        for(let i = 1; i <= 81; i++){        
            const clicked = levHard();
            container.appendChild(clicked);
            clicked.innerHTML = i;
            clicked.addEventListener('click', function() {
                console.log(this);
                this.classList.add('blue');
            });
        
        }
            break;

        case 3: 
            // creazione griglia impossibile
        const levCrazy = function () {
            const node = document.createElement('div');
            node.className = 'square crazy';
        
            return node;
        }
        // generatore bombe
        generateBombs(49); 

        for(let i = 1; i <= 49; i++){        
            const clicked = levCrazy();
            clicked.innerHTML = i;
            container.appendChild(clicked);
        
            clicked.addEventListener('click', function() {
                console.log(this);
                this.classList.add('blue');
            });

        
        
        }
    }
     
}

