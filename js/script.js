holeBenutzer();
//holeWGs();

function holeBenutzer() {
    //Benutzer ID und Token werden aus dem localstorage geholt.
    let benutzerID = localStorage.getItem('benutzerID');
    let token = localStorage.getItem('token');

    //BenutzerID wird in die Form gefügt
    let formData = new FormData();
    formData.append('benutzerID', benutzerID);

    //fetchen php file
    fetch("https://450731-3.web.fhgr.ch/php/holeBenutzer.php",
        { 
            body: formData,
            method: "post",
            headers: {
                //Verschlüsset Id und Token
                'Authorization': 'Basic ' + btoa(benutzerID + ':' + token),

            }
        })

        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort, Fehlermeldung abgeklärt. zb 404 Error. 200 OK
            if (res.status >= 200 && res.status < 300) {

                return res.text();

            } else {
                //Rückleitung zu login.html
                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {
       //console.log(data);


        //     // mache etwas
        
       console.log(data[0].name);

            document.querySelector('#name').innerHTML = data[0].name;

    

        })
}


/*function holeWGs(){


    let benutzerID = localStorage.getItem('benutzerID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('benutzerID', benutzerID);

    fetch("https://450731-3.web.fhgr.ch/php/holeWGs.php",
        {
            body: formData,
            method: "post",
            headers: {

                'Authorization': 'Basic ' + btoa(benutzerID + ':' + token),

            }
        })

        .then((res) => {

            // falls die Sitzung nicht abgelaufen ist, verarbeite die JSON antwort
            if (res.status >= 200 && res.status < 300) {

                return res.json();

            } else {

                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"

            }

        })
        .then((data) => {

            // mache etwas
            console.log(data);

            //WGsAnzeigen(data);

            // console.log(data[0].name);


        })

    }*/
