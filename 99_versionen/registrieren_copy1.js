console.log('hallo');
function registrieren (){
    let benutzername = document.querySelector("#benutzername").value;
    let handyNr = document.querySelector("#handyNr").value;
    let email = document.querySelector("#email").value;
    let passwort = document.querySelector("#passwort").value;
    // console.log('Hallo ' + benutzername + email + passwort);
   

    //FormData = Box für unsere Formulardaten
    let formData = new FormData();
    formData.append('benutzername', benutzername);
    formData.append('handyNr', handyNr);
    formData.append('email', email);
    formData.append('passwort', passwort);
//Adresse eingeben, wo das Packet hinsoll
    fetch("https://450731-3.web.fhgr.ch/php/registrieren.php",
        {
            body: formData,
            //methode bestimmen, get auch möglich. So holen wir im php die Daten $_Post
            method: "post",
        })

        //Warten auf Response=res
        .then((res) => {
            //wir wollen einen Text erhalten, andere Daten manchmal JSON
            return res.text();


        })
        .then((data) => {
            // console.log(data);
        document.querySelector('#nachricht').innerHTML = data;

        })
    }
/*
        //Die Grundlage für einen Fetch. Fetch ist eine Funktion, die einen Request an einen Server sendet und das Ergebnis zurückgibt
        //In der ersten Zeile wird der Link zur API definiert. Dieser kann immer angepasst werden.
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
        //Hier startet der Fetch mit der definierten URL.
        fetch(url)
            //Wenn der Fetch erfolgreich war, wird die Antwort in ein Objekt gespeichert.
            .then(response => response.json())
            //Wenn das Objekt gespeichert wurde, wird es in eine Variable gespeichert. Diese Variable heisst "data".
            .then(data => {
                //Hier kann man mit der Variable arbeiten. Entweder das DOM mit Informationen erweitern, oder eine neue Funktion aufrufen.
                //Mit "Console.log(data);" sieht man den Inhalt des Objekts.
                console.log(data);
                //Ab hier kann man entweder mit der Variable data arbeiten, oder eine funktion aufrufen mit data als Parameter.
    
                //Beispiel eines Funktionsaufrufs
                //"showSomething(data);"
    
            })
            //Bei einem Fehler wird dieser gefangen "catch" und eine Fehlermeldung in der Konsole ausgegeben.
            .catch(error => console.log(error))
        */