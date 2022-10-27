// funktion til at definere indhold efter abonnement
document.querySelector("#abonnement-1").addEventListener("click", abonnement);
document.querySelector("#abonnement-2").addEventListener("click", abonnement);
document.querySelector("#abonnement-3").addEventListener("click", abonnement);
document.querySelector("#abonnement-4").addEventListener("click", abonnement);

function abonnement() {
    if (this.getAttribute("ID") === "abonnement-1") {
      localStorage.setItem("overskrift", "Digital");
      localStorage.setItem("tekst", "Abonnementet giver ubegrænset adgang til den digitale avis og adgang til abonnementsfordele. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
      localStorage.setItem("pris", 210);
    }
    if (this.getAttribute("ID") === "abonnement-2") {
      localStorage.setItem("overskrift", "Digital og weekend ");
      localStorage.setItem("tekst", "Abonnementet giver ubegrænset adgang til den digitale avis og adgang til abonnementsfordele. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
      localStorage.setItem("pris", 315);
    }
    if (this.getAttribute("ID") === "abonnement-3") {
      localStorage.setItem("overskrift", " Fuldt abonnement ");
      localStorage.setItem("tekst", "Abonnementet giver ubegrænset adgang til den digitale avis og adgang til abonnementsfordele. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
      localStorage.setItem("pris", 440);
    }
    if (this.getAttribute("ID") === "abonnement-4") {
      localStorage.setItem("overskrift", "Er du studerende? Så har vi også et godt tilbud til dig.");
      localStorage.setItem("tekst", "Abonnementet giver ubegrænset adgang til den digitale avis og adgang til abonnementsfordele. Abonnementet er fortløbende og fortsætter efter de første 3 måneder til normalpris.");
      localStorage.setItem("pris", 150);
    }




  }