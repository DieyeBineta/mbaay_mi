
const annonces = [
  {
    titre: "Aubergines",
    description: "Aubergines fraîches issues de l'agriculture locale.",
    prix: "12000 FCFA / Sac",
    lieu: "Dakar",
    image: "./image/eggplant healthy food vegetable vegetarian eggplant png.jfif"
  },
  {
    titre: "Pommes de Terre",
    description: "Pommes de terre de qualité supérieure.",
    prix: "8000 FCFA / Sac",
    lieu: "Thiès",
    image: "./image/téléchargement (10).jfif"
  },
  {
    titre: "Concombre",
    description: "Concombres fraîches issues de l'agriculture locale.",
    prix: "5000 FCFA / Kg",
    lieu: "Saint-Louis",
    image: "./image/téléchargement (11).jfif"
  }
 
  
];


const cards = document.getElementById("cards");


function afficherAnnonces() {
  annonces.forEach((annonce) => {
    const card = document.createElement("div");
    card.className = "cards";

    card.innerHTML = `
      <img src="${annonce.image}" alt="${annonce.titre}">
      <div class="annoce-content">
        <h3>${annonce.titre}</h3>
        <p>${annonce.description}</p>

        <div class="infos">
          <span class="prix">${annonce.prix}</span>
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83334 15C4.30924 15.3431 3.33334 15.8702 3.33334 16.4614C3.33334 17.4952 6.31811 18.3333 10 18.3333C13.6819 18.3333 16.6667 17.4952 16.6667 16.4614C16.6667 15.8702 15.6908 15.3431 14.1667 15"
                stroke="#AEAEAE" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M12.0833 7.49996C12.0833 8.65055 11.1506 9.58329 9.99999 9.58329C8.8494 9.58329 7.91666 8.65055 7.91666 7.49996C7.91666 6.34937 8.8494 5.41663 9.99999 5.41663C11.1506 5.41663 12.0833 6.34937 12.0833 7.49996Z"
                stroke="#AEAEAE" stroke-width="1.5"/>
              <path d="M11.0478 14.5779C10.7668 14.8486 10.3911 15 10.0001 15C9.60915 15 9.23348 14.8486 8.95241 14.5779C6.37857 12.0839 2.92931 9.29791 4.61141 5.25307C5.52091 3.06606 7.70411 1.66663 10.0001 1.66663C12.2961 1.66663 14.4793 3.06606 15.3888 5.25307C17.0688 9.2928 13.628 12.0925 11.0478 14.5779Z"
                stroke="#AEAEAE" stroke-width="1.5"/>
            </svg>
            <span>${annonce.lieu}</span>
          </a>
        </div>

        <button class="button-abonner">S'abonner</button>
      </div>
    `;

    cards.appendChild(card);
  });
}


afficherAnnonces();


document.addEventListener("DOMContentLoaded", () => {
  
  let abonnements = Number(localStorage.getItem("abonnements")) || 0;
  const totalAbonnements = document.getElementById("totalAbonnements");

  if(totalAbonnements) totalAbonnements.textContent = abonnements;

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-abonner")) {
      const ok = confirm("Voulez-vous vous abonner ?");
      if(ok){
        abonnements++;
        localStorage.setItem("abonnements", abonnements);
        if(totalAbonnements) totalAbonnements.textContent = abonnements;
        alert("Abonnement réussi !");
      }
    }
  });

});

