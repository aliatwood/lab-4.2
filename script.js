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

pausa.addEventListener("click", () => {
    if (pausa.textContent === " ⏸️ Pausa") {
        let ok = confirm("Vill du pausa resan?");
        if (ok) {
            pausa.textContent = " ▶️ Återuppta";
            pausa.style.backgroundColor = "green";
            alert("Resan är nu pausad!");
        }
    } else if (pausa.textContent === " ▶️ Återuppta") {
        let nej = confirm("Vill du återuppta resan?");
        if (nej) {
            pausa.textContent = " ⏸️ Pausa";
            pausa.style.backgroundColor = "#f0ad4e";
            alert("Resan har återupptagits!");
        }
    }
});


