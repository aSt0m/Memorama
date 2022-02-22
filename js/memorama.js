let containerCard = document.querySelectorAll('.container-cards');
let cardBack = document.querySelector('.card-back');
let cardFront = document.querySelector('.card-front');
let gridCards = document.querySelector('.grid-cards')
let bodyMain = document.getElementsByTagName('body');

element.addEventListener('click', (e)=>{
        containerCard.forEach( ( element, index )=>{
 
        const id = e.target.getAttribute("id");
        console.log( element, index ); 
        bodyMain.style.backgroundColor = "#392733"
        element.style.backgroundColor = "#000"
        cardBack.style.transform = "rotateY( 180deg )";
        cardBack.style.transform = "rotateY( 0deg )";
       
        
    })
        
        // cardFront.addEventListener('click', ()=>{
            //     console.log( element )
            //     element.style.transform = "rotateY( 0deg )";
            //     element.style.transform = "rotateY( 180deg )";
    
    // })
})



console.log( cardBack );
console.table( containerCard );