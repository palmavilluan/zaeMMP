var profilID;

holeProfildaten();

function holeProfildaten() {

    // get authentication variables from localstorage
    let benutzerID = localStorage.getItem('benutzerID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('benutzerID', benutzerID);

    fetch("https://450731-3.web.fhgr.ch/php/holeProfildaten.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(benutzerID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            console.log(data);

            // falls es noch keine WG zu diesem User gibt
            // falls es noch keine WG zu diesem User gibt
            // falls es noch keine WG zu diesem User gibt
            //if (data.length == 0) {

                // zeige Infotext an
            //    document.querySelector('#infoText').innerHTML = "Fülle dieses Formular aus, um dein Profil zu erstellen."

                // zeige den korrekten Button an
//                document.querySelector('#button-neue').classList.remove("hidden");

                // falls es bereits eine WG zu diesem User gibt
                // falls es bereits eine WG zu diesem User gibt
                // falls es bereits eine WG zu diesem User gibt
          //  } else {

                // speichere die wg ID in der globalen variable
                // diese brauchen wir später zum aktualisieren und löschen der WG
                profilID = data[0].ID;

                // zeige Infotext an
            //    document.querySelector('#infoText').innerHTML = "Hier kannst du dein Profil bearbeiten:";

                // zeige den korrekten Button an
               // document.querySelector('#button-aktualisieren').classList.remove("hidden");
                //document.querySelector('#button-loeschen').classList.remove("hidden");

                // fülle das Formular mit den Werten aus der DB aus
                document.querySelector('#name').value = data[0].name;
                document.querySelector('#email').value = data[0].email;
                document.querySelector('#handyNr').value = data[0].handyNr;
                console.log(data);

            })
        }


function aktualisiereProfil() {

    // get authentication variables from localstorage
    let benutzerID = localStorage.getItem('benutzerID');
    let token = localStorage.getItem('token');

    // Formulardaten in Body übertragen
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let handyNr = document.querySelector('#handyNr').value;


    let formData = new FormData();
    //formData.append('benutzerID', benutzerID);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('handyNr', handyNr);


    fetch("https://450731-3.web.fhgr.ch/php/aktualisiereProfil.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(benutzerID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            // zeige die Nachricht an
            document.querySelector('#nachricht').innerHTML = data;
            document.querySelector('#nachricht').innerHTML = "Aktualisierung erfolgreich!";


        })
}


function loescheProfil() {

    // get authentication variables from localstorage
    let benutzerID = localStorage.getItem('benutzerID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('benutzerID', benutzerID);
    formData.append('profilID', profilID);

    fetch("https://450731-3.web.fhgr.ch/php/loescheProfil.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(benutzerID + ':' + token),

            }
        })

        .then((res) => {

            // error handling if session is expired
            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {

                alert('Deine Daten sind gelöscht, registriere dich erneut, falls du alle Funktionen nutzen möchtest.');
                window.location = "/index.html"

            }

        })
        .then((data) => {

            console.log(data);
            document.querySelector('#nachricht').innerHTML = data;

            // button aktualisieren
          //  document.querySelector('#button-neue').classList.remove("hidden");
          //  document.querySelector('#button-aktualisieren').classList.add("hidden");
           // document.querySelector('#button-loeschen').classList.add("hidden");

            // Formularfelder leeren
            document.querySelector('#name').value = "";
            document.querySelector('#email').value = "";
            document.querySelector('#handyNr').value = "";   



            // Variablen leeren
            profilID = "";



        })
}

function logout(){

    localStorage.clear();
    window.location = "/index.html";
    

}