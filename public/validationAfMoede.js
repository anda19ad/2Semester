//Validerer info
function validereInfo() {
    //Tilknytter JS variablerne til værdierne indtastet i HTML-filen
    var kundenavn = document.getElementById("kundenavn").value;
    var tlfnr = document.getElementById("tlfnr").value;
    var mail = document.getElementById("mail").value;
    var kommentar = document.getElementById("kommentar").value;

    var revisor = document.getElementById("revisorOption").value;

    console.log(revisor);

    validereInput();

    function validereInput() {
        console.log(k.generateID());
        console.log('validere input');
        korrektInput = true;

        //Validerer navnet
        if (kundenavn == null || kundenavn == "") {
            // Tilføjer en besked
            document.getElementById("fejlKundenavn").innerHTML = "Venligst indtast dit navn <br/>"
            // sætter formen til false
            korrektInput = false;
        }

        //Validerer tlf.
        if (tlfnr == null || tlfnr <= 10000000 || tlfnr >= 1000000000) {
            document.getElementById("fejlTlfnr").innerHTML = "Venligst indtast et gyldigt tlf nr <br/>";
            korrektInput = false;
        }

        //Validerer mail
        var snabelA = mail.indexOf("@");
        var punktum = mail.indexOf(".");

        if (mail == null || mail == "" || snabelA < 1 || punktum < 2) {
            document.getElementById("fejlEmail").innerHTML = "Venligst indtast en gyldig e-mail <br/>";
            korrektInput = false;
        }


        if(korrektInput) {
            gemtilLS();
            alert("Mødet er oprettet.");
            k.refresh()
        }

/*
        //Gem til local storage
        function gemtilLS() {
            //Sikrer igen at inputtet er korrekt
            if (korrektInput) {
                //Vi formaterer daten som er stringified. Inspiration: https://stackoverflow.com/a/11491993
                //nuværendeStarttidspunkt og sluttidspunkt fås fra main.js, hvor den viser tidsplanen
                var start = new Date(JSON.parse(JSON.stringify(nuværendeStarttidspunkt)));
                var slut = new Date(JSON.parse(JSON.stringify(nuværendeSluttidspunkt)));

                //instansierer det nye møde
                var nytMøde = new Møde(start, slut, k.generateID(), kommentar, kundenavn, tlfnr, mail);

                //Tilføj mødet til den nye revisor og push den op på localstorage
                rh.getRevisorer()[revisor].tilføjMøder(nytMøde);
                localStorage.setItem('gemtRevisorhus', JSON.stringify(rh));
            }
        }

*/
    }
}
