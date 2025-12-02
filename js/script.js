// Function to load events from a fake API (local JSON)
function loadEvents() {
  const eventsList = document.getElementById('eventsList');
  if (!eventsList) return; // safety check

  eventsList.innerHTML = ''; // Clear placeholder

  fetch('events.json') // local JSON file as fake API
    .then(response => {
      if (!response.ok) throw new Error('Failed to load events');
      return response.json();
    })
    .then(events => {
      if (!events || events.length === 0) {
        eventsList.innerHTML = '<p class="text-muted">No upcoming events.</p>';
        return;
      }

      const row = document.createElement('div');
      row.className = 'row g-4';

      events.forEach(event => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card h-100 p-3';
        card.innerHTML = `
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text"><em>${event.date}</em></p>
          ${event.description ? `<p class="card-text">${event.description}</p>` : ''}
        `;

        col.appendChild(card);
        row.appendChild(col);
      });

      eventsList.appendChild(row);
    })
    .catch(error => {
      eventsList.innerHTML = `<p class="text-danger">Error loading events: ${error.message}</p>`;
      console.error('Error fetching events:', error);
    });
}

// Attach event listener safely
const loadBtn = document.getElementById('loadEventsBtn');
if (loadBtn) {
  loadBtn.addEventListener('click', loadEvents);
}
