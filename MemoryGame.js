const cards = document.querySelectorAll('.memoryCard');
let FlippedCard = false;
let lockBoard = false ;
let FirstCard, SecondCard;
let ScoreP = 0;
//shuffling
(function shuffling (){
    cards.forEach(function(card){
        let random = Math.floor(Math.random()*cards.length);
        card.style.order = random;
    });
})();

// addFunction to flip
// cards.forEach(card => card.addEventListener('click' , flipCard));
cards.forEach(function(card){
    card.addEventListener('click',flipCard);
})

function flipCard(){
    
    //lockBoard
    if (lockBoard ===true) return 0;
    if (this === FirstCard) return 0;

    this.classList.toggle('flip');
    if (FlippedCard=== false){
        FlippedCard = true;
        FirstCard =this;
    }   else {
        FlippedCard = false;
        SecondCard =this;
    
    //card Math
            if (FirstCard.dataset.name ===SecondCard.dataset.name){
                FirstCard.removeEventListener('click', flipCard);
                SecondCard.removeEventListener('click', flipCard);
                ScoreP++;
            }   else { 
                lockBoard =true;
                setTimeout(() => {
                FirstCard.classList.remove('flip');
                SecondCard.classList.remove('flip');
                lockBoard= false;
                },800);
                }
        }
    Victory();
};
// Score
function Victory(){    
    if (ScoreP === cards.length/2){
        alert('You win');
    }
}







