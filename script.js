// Add event listener to form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!');
});