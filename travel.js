document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission for planning trips
    const planTripForm = document.getElementById('plan-trip-form');
    if (planTripForm) {
        planTripForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const destination = document.getElementById('trip-destination').value;
            const startDate = document.getElementById('trip-start-date').value;
            const endDate = document.getElementById('trip-end-date').value;
            const notes = document.getElementById('trip-notes').value;

            // Save trip to localStorage
            let trips = JSON.parse(localStorage.getItem('trips')) || [];
            trips.push({ destination, startDate, endDate, notes });
            localStorage.setItem('trips', JSON.stringify(trips));

            // Redirect to destinations page
            window.location.href = 'destinations.html';
        });
    }

    // Display trips on destinations.html
    const destinationList = document.getElementById('destination-list');
    if (destinationList) {
        let trips = JSON.parse(localStorage.getItem('trips')) || [];
        trips.forEach(trip => {
            let tripDiv = document.createElement('div');
            tripDiv.classList.add('trip');
            tripDiv.innerHTML = `<h3
