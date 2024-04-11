document.addEventListener('DOMContentLoaded', function() {
    const jobForm = document.getElementById('job-form');
    const jobCardsContainer = document.getElementById('job-cards-container');

    jobForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form input values
        const title = document.getElementById('title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const type = document.getElementById('type').value;
        const salary = document.getElementById('salary').value;
        const posted = document.getElementById('posted').value;

        // Create a new job card
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <div class="job-title">${title}</div>
            <div class="job-details">
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Salary:</strong> ${salary}</p>
                <p><strong>Posted:</strong> ${posted}</p>
            </div>
        `;

        // Append the new job card to the container
        jobCardsContainer.appendChild(jobCard);

        // Reset the form
        jobForm.reset();
    });
});
