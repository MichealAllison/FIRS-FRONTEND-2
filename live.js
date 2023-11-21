document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch intruder data from the server
    function fetchIntruderData() {
        // Placeholder data - replace with actual data when the backend is ready
        const intruderData = [
            {
                id: 1,
                alert: "Intruder Alert",
                time: "12:30 PM"
            },
            {
                id: 2,
                alert: "Intruder Alert",
                time: "12:25 PM"
            },
            {
                id: 3,
                alert: "Intruder Alert",
                time: "12:20 PM"
            }
            // Add more intruder data as needed
        ];

        // Assuming the 'live-container' div is available
        const liveContainer = document.querySelector('.live-container');

        // Display intruder alerts as wider cards with options
        intruderData.forEach(intruder => {
            const intruderCard = document.createElement('div');
            intruderCard.classList.add('wider-notification-card');

            const alertText = document.createElement('p');
            alertText.innerText = intruder.alert;

            const timeText = document.createElement('p');
            timeText.innerText = intruder.time;

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');

            // 'View' option with an icon
            const viewOption = document.createElement('div');
            viewOption.classList.add('option', 'view-option');
            viewOption.innerHTML = '<i class="fas fa-eye"></i>';
            viewOption.onclick = () => showIntruderDetails(intruder.id);

            // 'Delete' option with an icon
            const deleteOption = document.createElement('div');
            deleteOption.classList.add('option', 'delete-option');
            deleteOption.innerHTML = '<i class="fas fa-trash"></i>';
            deleteOption.onclick = () => deleteIntruder(intruder.id);

            optionsContainer.appendChild(viewOption);
            optionsContainer.appendChild(deleteOption);

            intruderCard.appendChild(alertText);
            intruderCard.appendChild(timeText);
            intruderCard.appendChild(optionsContainer);

            liveContainer.prepend(intruderCard);
        });
    }

    // Call fetchIntruderData when the page loads
    fetchIntruderData();

    // Optionally, you can set up a timer to periodically update the data
    // setInterval(fetchIntruderData, 5000); // Update every 5 seconds

    // Function to show details when 'View' option is clicked
    function showIntruderDetails(intruderId) {
        // Navigate to the detailed view page with intruder id
        window.location.href = 'detailed.html?id=' + intruderId;
    }

    // Function to handle 'Delete' option
    function deleteIntruder(intruderId) {
        // Implement your logic to delete the intruder with the given id
        console.log('Deleting intruder with id:', intruderId);
    }
});


