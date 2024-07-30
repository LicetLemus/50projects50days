
// 1. the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // 2. get all the cards
    const cards = document.querySelectorAll('.cards__images');
    // 3. loop through the cards
    cards.forEach(card => {
        // 4. add an event listener to each card
        card.addEventListener('click', () => {
            // 5. remove the active class from all the cards
            removeActiveClasses();
            // 6. add the active class to the clicked card
            card.classList.add('active');
        });
    });

    function removeActiveClasses() {
        // 7. loop through the cards
        cards.forEach(card => {
            // 8. remove the active class from all the cards
            card.classList.remove('active');
        });
    }
});