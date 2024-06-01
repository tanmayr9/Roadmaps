const buttons = document.querySelectorAll('.cssbuttons-io-button');

buttons.forEach(button => {
    // Get the custom link attribute value
    const link = button.getAttribute('data-link');

    button.addEventListener('click', () => {
        window.location.href = link; 
    });
});