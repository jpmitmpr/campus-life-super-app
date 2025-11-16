// script.js - event-driven programming and placeholder API code

// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const loadBtn = document.getElementById("loadEventsBtn");
  const eventsList = document.getElementById("eventsList");
  const contactForm = document.getElementById("contactForm");

  // Event: click "Load Events" - demonstrates a basic fetch to a placeholder API
  if (loadBtn) {
    loadBtn.addEventListener("click", async function () {
      // Show loading state
      loadBtn.textContent = "Loading...";
      loadBtn.disabled = true;

      try {
        // Placeholder API (jsonplaceholder) - substitute with real API later
        // This is a beginning attempt at API integration (allowed as a placeholder)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
        const data = await response.json();

        // Clear previous results
        eventsList.innerHTML = "";

        // Create simple cards for each "event"
        data.forEach(item => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${escapeHtml(item.title)}</h5>
              <p class="card-text">${escapeHtml(item.body)}</p>
            </div>
          `;
          eventsList.appendChild(card);
        });
      } catch (err) {
        eventsList.innerHTML = `<div class="alert alert-danger">Failed to load events. (Placeholder API)</div>`;
        console.error(err);
      } finally {
        loadBtn.textContent = "Load Events";
        loadBtn.disabled = false;
      }
    });
  }

  // Event: contact form submit (demo of event-driven programming)
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Simple client-side validation and success message
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !message) {
        alert("Please fill in both name and message.");
        return;
      }
      // Placeholder: here you would send data to your server or an API
      alert(`Thanks, ${name}! Your message was sent (placeholder).`);
      contactForm.reset();
    });
  }
});

// Small helper to escape HTML for safety
function escapeHtml(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
