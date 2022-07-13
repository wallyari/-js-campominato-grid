// Consegna
 // L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
 // Ogni cella ha un numero progressivo, da 1 a 100.
 // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
 // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console 
 // con il numero della cella cliccata.

 
 //associo il btn ad una variabile
let btnPlay = document.getElementById('play_btn');

//recupero la griglia dove andranno inseriti i nuovi elementi
let gridContainer = document.querySelector('.grid_container');

//creo addEventlister sul btn
btnPlay.addEventListener('click',function(){
   
   
   
   
   
 //creo un ciclo for 
    for(let i=1 ; i <= 100 ; i++){

        //creo elemento
        let newBox =document.createElement('div');

        //gli assegno la classe
        newBox.classList.add('box');

        // dichiaro l'elemento creato
        newBox.innerHTML = i;
        console.log(i);

         //importo l'elemento creato
        gridContainer.append(newBox);
        
        //associo la box del dom ad una variabile
        let box= document.querySelectorAll('.box');
        console.log (box[i]);

        newBox.addEventListener('click',function(){
            addToToggleClass (newBox, 'box_active');
        //stampo in console il numero dell'elemento selezionato
            console.log(`click su elemento ${i}`);
        })
    }
})


//funzione toggle per aggiungere o rimuovere una classe
function addToToggleClass(elemnt , className){
    elemnt.classList.toggle(className);
}

