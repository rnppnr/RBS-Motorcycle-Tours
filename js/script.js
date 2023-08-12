( () => {
    // Get the current year for the footer
    let date = new Date();
    document.getElementById('current-year').textContent = date.getFullYear().toString();
})();