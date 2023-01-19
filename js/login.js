



console.log('Hello Login');

function login(){
    let email = document.querySelector("#email").value;
    let passwort = document.querySelector("#passwort").value;
    console.log('Hallo ' + email + passwort);
   

    //FormData = Box für unsere Formulardaten
    let formData = new FormData();
    formData.append('email', email);
    formData.append('passwort', passwort);


//Adresse eingeben, wo das Packet hinsoll
fetch("https://450731-3.web.fhgr.ch/php/login.php",
        {
            body: formData,
            //methode bestimmen, get auch möglich. So holen wir im php die Daten $_Post
            method: "post",
        })

        //Warten auf Response=res
        .then((res) => {
            //wir wollen einen Text erhalten, andere Daten manchmal JSON
         
            return res.json();

        })
        .then((data) => {
        console.log(data);
        document.querySelector('#nachricht').innerHTML = data[0];

        //Platziere benutzerID an 1. Stelle und Token an 2. Stelle im localstorage
        localStorage.setItem("benutzerID", data[1]);
        localStorage.setItem("token", data[2]);

        //Wenn ID und Token nicht 0 ist, also der benutzer eingeloggt ist, öffne die neue Seite(Startseite)
        if (data[1] != 0 && data[2] != 0){

            window.location.href = "https://450731-3.web.fhgr.ch/upload.html";


        }

        })
    }
