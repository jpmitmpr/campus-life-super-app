document.addEventListener("DOMContentLoaded", () => {

  const loadBtn = document.getElementById("loadEventsBtn");
  const eventsList = document.getElementById("eventsList");
  const contactForm = document.getElementById("contactForm");

  if (loadBtn) {
    loadBtn.addEventListener("click", () => {

      loadBtn.textContent = "Loading...";
      loadBtn.disabled = true;

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

      eventsList.innerHTML = "";

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

      loadBtn.textContent = "Load Events";
      loadBtn.disabled = false;
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !message) {
        alert("Please fill in both fields before submitting.");
        return;
      }

      alert(`Thanks, ${name}! Your message has been sent (placeholder).`);

      contactForm.reset();
    });
  }

});
