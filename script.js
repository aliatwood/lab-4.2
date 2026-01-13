// returresa js
const returCheckbox = document.getElementById('retur');
const returInfo = document.getElementById('returinfo');

if (returCheckbox && returInfo) {

    returCheckbox.addEventListener('change', () => {
        if (returCheckbox.checked) {
            returInfo.classList.remove('hidden');
        } else {
            returInfo.classList.add('hidden');
        }
    });    
}


// Ändra knapp
const andraButton = document.querySelectorAll(".buttonkommanderesa1edit");
andraButton.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "boka.html"
    });
});

const andraButtonAterkommande = document.querySelectorAll(".buttonaterkommanderesa1edit");
andraButtonAterkommande.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "återkommande.html";
    });
});


// Avbryta knapp
const avbryt = document.querySelector(".buttonkommanderesa2cancel");
avbryt.addEventListener("click", () => {
    const confirmed = confirm("Är du säker på att du vill avboka?");
    if (confirmed) {
        avbryt.closest(".Minaresor").remove(); // now it actually finds the container
        alert("Du har avbokat din resa");
    }
});

// Pausa knapp
const pausa = document.querySelector(".buttonkommanderesa2pause");

if (pausa) {
    pausa.addEventListener("click", () => {
        // Använd trim() för att hantera extra spaces
        const currentText = pausa.textContent.trim();
        
        if (currentText.includes("Pausa")) {
            const ok = confirm("Vill du pausa resan?");
            if (ok) {
                pausa.innerHTML = '<span aria-hidden="true">▶️</span> Återuppta';
                pausa.style.backgroundColor = "green";
                alert("Resan är nu pausad!");
            }
        } else if (currentText.includes("Återuppta")) {
            const nej = confirm("Vill du återuppta resan?");
            if (nej) {
                pausa.innerHTML = '<span aria-hidden="true">⏸️</span> Pausa';
                pausa.style.backgroundColor = "#f0ad4e";
                alert("Resan har återupptagits!");
            }
        }
    });
}


