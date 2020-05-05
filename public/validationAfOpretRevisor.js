/*Lavet af AD
Formålet med denne JS fil er at få korrekt data på de revisorer som opretter sig og så
disse data bliver brugt på henholdsvis revisor siden og i kalenderen*/
console.log('Forbindelse til validationAfOpretRevisor.js');
function kontrolInfo() {
    // alle indtast muligheder hentes via en getElementById. Værdierne hentes ved at bruge .value
    var fornavn = document.getElementById("Fornavn").value;
    var efternavn = document.getElementById("Efternavn").value;
    var email = document.getElementById("Email").value;
    var tlf = document.getElementById("Tlf").value;
    var brugernavn = document.getElementById("Brugernavn").value;
    var kodeord = document.getElementById("Kodeord").value;


    //Test af at det virker
    console.log(fornavn+efternavn+email+tlf+brugernavn+kodeord);

    //For at funktionen kan køre, skal den køres. Det gør den her
    kontrolInput();

    /*For at kontrollere input tilføjes denne function. Som udgangspunkt er de
    indtastede værdier korrekte, det defineres i den første variabel, derfor sættes den som true. Efterfølgende sker
    kontrollen med if statements, som så kan forkaste at første antagelse var korrekt */
   function kontrolInput() {
        var inputCorrect = true;

       /*Her kontrolleres indholdet med If statements. Else statementet går igen hele vejen og er lavet på samme måde.
       Den gør at hvis input udfyldes korrekt, så fjernes fejlbeskeden, hvis den er kommet frem */

       if (fornavn==null || fornavn=="") {
           //Hvis dette gør sig gældende, påkaldes det id som er givet i HTML dokumentet
           document.getElementById("fejlFornavn").innerHTML = "Indtast fornavn";
           inputCorrect = false;
       } else {
           document.getElementById("fejlFornavn").innerHTML = "";
       }

       if (efternavn==null || efternavn=="") {
           document.getElementById("fejlEfternavn").innerHTML = "Indtast efternavn";
           inputCorrect = false;
       } else {
           document.getElementById("fejlEfternavn").innerHTML = "";
       }

       /*Ved kontrol af korrekt email skal @ og . eksistere.
       Ved at bruge .indexof metoden, kan man tælle hvor et givent tegn befinder sig.
       Derfor skal @>1 og punktum >2. Der kan ikke skrives snabelA<punktum da nogle mails indeholder punktum før og efter @
       For at bruge den her indexof metode, skal der laves to variabler */

       var snabelA = email.indexOf("@");
       var punktum = email.indexOf(".");

       if (email==null || email=="" || snabelA<1 || punktum<2) {
           document.getElementById("fejlEmail").innerHTML = "Indtast korrekt email";
           inputCorrect = false;
       } else {
           document.getElementById("fejlEmail").innerHTML = "";
       }

       /*Da HTML siden er lavet sådan at der kun kan indtastes tal, er det ikke nødvendigt at definere her.
       Et tlf nr skal være på minimum 8 tal og under 10 tal (i tilfælde af at de skriver +45)
       Derfor skal nr ligge mellem 10 mio og 1 mia */
       if (tlf==null || tlf<=10000000 || tlf>=1000000000) {
           document.getElementById("fejlTlf").innerHTML = "Indtast korrekt tlf nr.";
           inputCorrect = false;
       } else {
           document.getElementById("fejlTlf").innerHTML = "";
       }


       if (brugernavn==null || brugernavn=="") {
           document.getElementById("fejlBrugernavn").innerHTML = "Indtast brugernavn";
           inputCorrect = false;
           console.log(brugernavn);
       } else{
                  document.getElementById("fejlBrugernavn").innerHTML = "";
              }


       //Kontrol af kodeord
       if (kodeord==null || kodeord=="") {
           document.getElementById("fejlKodeord").innerHTML = "Indtast kodeord";
           inputCorrect = false;
       } else {
           document.getElementById("fejlKodeord").innerHTML = "";
       }

       /* Her påkaldes den besked som skal dukke op, ved korrekt udfyldelse
       saveToDB er en reference til den lokale database som er oprettet i funktionen nedenunder */
        if(inputCorrect) {
            alert("Revisor oprettet");
        }

    }

}
