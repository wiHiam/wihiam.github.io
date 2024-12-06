document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModal");
    const infoForm = document.getElementById("infoForm");

    // Funktion, um das Modal zu öffnen
    const openModal = () => {
        modal.classList.remove("hidden");
    };

    // Funktion, um das Modal zu schließen
    const closeModal = () => {
        modal.classList.add("hidden");
    };

    // Event Listener für die Karten
    cards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            cards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.classList.add("dim");
                }
            });
        });

        card.addEventListener("mouseout", () => {
            cards.forEach((otherCard) => {
                otherCard.classList.remove("dim");
            });
        });

        card.addEventListener("click", () => {
            openModal();
        });
    });

    // Event Listener für das Schließen des Modals
    closeModalButton.addEventListener("click", closeModal);

    // Event Listener für das Formular
    infoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;

        console.log(`Vorname: ${firstName}, Nachname: ${lastName}, E-Mail: ${email}`);

        // Formular zurücksetzen und Modal schließen
        infoForm.reset();
        closeModal();
    });

    // Modal schließen, wenn man außerhalb klickt
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
