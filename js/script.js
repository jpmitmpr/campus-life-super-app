// script.js - Simplified event-driven programming for the Campus Life MVP
// This file handles loading sample events and basic form validation.

// Wait for the page to fully load before running any JS
document.addEventListener("DOMContentLoaded", () => {

  // Buttons and elements from the page
  const loadBtn = document.getElementById("loadEventsBtn");
  const eventsList = document.getElementById("eventsList");
  const contactForm = document.getElementById("contactForm");

  /* 
     EVENT 1: Load campus events 
     This demonstrates event-driven programming and a placeholder
     “API-style” feature without needing a real backend yet.
  */
  if (loadBtn) {
    loadBtn.addEventListener("click", () => {

      // Replace button text to show it's doing something
      loadBtn.textContent = "Loading...";
      loadBtn.disabled = true;

      // These are simple English sample events for the MVP
      const sampleEvents = [
        {
          title: "Welcome Week Kickoff",
          body: "Join us for games, free food, and music on the campus lawn."
        },
        {
          title: "Study Night at the Library",
          body: "Snacks and tutoring available. Bring homework or come to hang out."
        },
        {
          title: "Outdoor Fitness Challenge",
          body: "A fun beginner-friendly workout and class competition."
        }
      ];

      // Clear old results
      eventsList.innerHTML = "";

      // Create a card for each event
      sampleEvents.forEach(event => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">${event.body}</p>
          </div>
        `;
        eventsList.appendChild(card);
      });

      // Restore button
      loadBtn.textContent = "Load Events";
      loadBtn.disabled = false;
    });
  }

  /* 
     EVENT 2: Contact form submission
     This is our example of a basic form handler using event-driven JS.
  */
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload

      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !message) {
        alert("Please fill in both fields before submitting.");
        return;
      }

      // For now, this acts as a placeholder where a real API would go
      alert(`Thanks, ${name}! Your message has been sent (placeholder).`);

      contactForm.reset();
    });
  }

});
