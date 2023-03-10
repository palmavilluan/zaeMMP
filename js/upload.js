let dokumentName;
let token = localStorage.getItem('token');

//ERSTELLEN von Drag&Drop auf ablageBereich_input
dragDrop();


//FUNKTION dragDrop
        function dragDrop(){
          

        //kopiert von https://dcode.domenade.com/tutorials/simple-drag-and-drop-file-upload-html-css-javascript
        document.querySelectorAll("#ablageBereich_input").forEach((inputElement) => {
            const ablageBereichElement = inputElement.closest(".ablageBereich");

            ablageBereichElement.addEventListener("click", (e) => {
                inputElement.click();
            });

            inputElement.addEventListener("change", (e) => {
                if (inputElement.files.length) {
                    updateVorschau(ablageBereichElement, inputElement.files[0]);
                }
            });

            ablageBereichElement.addEventListener("dragover", (e) => {
                e.preventDefault();
                ablageBereichElement.classList.add("ablageBereich--over");
            });

            ["dragleave", "dragend"].forEach((type) => {
                ablageBereichElement.addEventListener(type, (e) => {
                    ablageBereichElement.classList.remove("ablageBereich--over");
                });
            });

            ablageBereichElement.addEventListener("drop", (e) => {
                e.preventDefault();

                if (e.dataTransfer.files.length) {
                    inputElement.files = e.dataTransfer.files;
                    updateVorschau(ablageBereichElement, e.dataTransfer.files[0]);
                }

                ablageBereichElement.classList.remove("ablageBereich--over");
            });
        });

        /**
        * Update der Vorschau auf ein ablageBereichElement.
        *
        * @param {HTMLElement} ablageBereichElement
        * @param {File} file
        */

        // FUNKTION updateVorschau
        function updateVorschau(ablageBereichElement, file) {
            let vorschauElement = ablageBereichElement.querySelector(".ablageBereich_vorschau");

            //Erstes Mal-> info entfernen
            if (ablageBereichElement.querySelector(".ablageBereich_info")) {
                ablageBereichElement.querySelector(".ablageBereich_info").remove();
            }

            // Erstes Mal-> vorschauElement kreiren, wenn nicht vorhanden
            if (!vorschauElement) {
                vorschauElement = document.createElement("div");
                vorschauElement.classList.add("ablageBereich_vorschau");
                ablageBereichElement.appendChild(vorschauElement);
            }

            vorschauElement.dataset.label = file.name;

            dokumentName = file.name;

            

            /*
            //ANZEIGEN Vorschau wenn Bild Dokumente
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = () => {
                    vorschauElement.style.backgroundImage = `url('${reader.result}')`;
                };
            } else {
                vorschauElement.style.backgroundImage = null;
            }
            */

        }// ENDE FUNKTION updateVorschau


    };//ENDE FUNKTION dragDrop


//holeStandorte();
holeKurse();


/*
//FUNKTION holeStandorte
function holeStandorte(){

//ERSTELLEN formData Objekt
let formData = new FormData();

fetch("https://450731-3.web.fhgr.ch/php/holeStandorte.php",
            {
                body: formData,
                method: "post",
    
            })
    
            .then((res) => {
    
                return res.json();
    
            })
            .then((data) => {
    
                console.log(data);

                standorteAnzeigen(data);
    
    
            })


} //ENDE FUNKTION holeStandorte()



//FUNKTION standorteAnzeigen()
function standorteAnzeigen(data){
    console.log("standorteAnzeigen")

   
    let standortInput = document.querySelector("#standort_input");
    
    //LOESCHEN Standorte
    standortInput.innerHTML = ""; 

    //forEach-Loop
    data.forEach(standort => {

        let standortInputOption = document.createElement('option');

        console.log(standortInputOption);

        standortInputOption.innerHTML = standort.standort;


        standortInput.appendChild(standortInputOption);

    });//ENDE forEach-Loop 

};//ENDE FUNKTION standorteAnzeigen()

*/

//FUNKTION holeKurse()
function holeKurse(){

//ERSTELLEN formData Objekt
let formData = new FormData();

fetch("https://450731-3.web.fhgr.ch/php/holeKurse.php",
            {
                body: formData,
                method: "post",
    
            })
    
            .then((res) => {
    
                return res.json();
    
            })
            .then((data) => {
    
                console.log(data);

                kurseAnzeigen(data);
    
    
            })


} //ENDE FUNKTION holeKurse()


//FUNKTION kurseAnzeigen()
function kurseAnzeigen(data){

    console.log("kurseAnzeigen")

 
    let kursInput = document.querySelector("#kurs_input");
   
    //LOESCHEN Kurse
    kursInput.innerHTML = "";

    //forEach-Loop
    data.forEach(kurs => {

        let kursInputOption = document.createElement('option');

        console.log(kursInputOption);

        kursInputOption.innerHTML = kurs.name;


        kursInput.appendChild(kursInputOption);

    });//ENDE forEach-Loop

};//ENDE FUNKTION kurseAnzeigen()




//FUNKTION hochladen()
function dokumentHochladen(){

  
// ABSPEICHERN Variabeln Inputs
//let dokumentInput = document.querySelector("#ablageBereich_input");
let kursInput = document.querySelector("#kurs_input").value;
let standortInputWert = document.querySelector("#standort_input").value;
let benutzerID = localStorage.getItem("benutzerID");




//console.log(dokumentInput);
console.log(benutzerID);
console.log(dokumentName);
console.log(kursInput);
console.log(standortInputWert);

//ERSTELLEN new FormData
let formData = new FormData();


//HINZUF??GEN inputELEMENT zu FormData object
//formData.append("dokument", dokumentInput.files[0]);

//HINZUF??GEN inputELEMENT zu FormData object
formData.append("kursName", kursInput);

//HINZUF??GEN inputELEMENT zu FormData object
formData.append("standort", standortInputWert);

//HINZUF??GEN inputELEMENT zu FormData object
formData.append("benutzer_ID", benutzerID);

//HINZUF??GEN inputELEMENT zu FormData object
formData.append("dokumentName", dokumentName);



// ABSENDEN FormData object an den Server
fetch("https://450731-3.web.fhgr.ch/php/upload.php", {
  method: "POST",
  body: formData,
  headers: {

    'Authorization': 'Basic ' + btoa(benutzerID + ':' + token),

} 
})

.then((response) => {

    //console.log(formData);

    return response.text(); //Form angeben in der Antwort erhalten wollen
    
})

.then((data) => {
   //console.log(data)
   
    document.querySelector('#nachricht').innerHTML = data;

})

}; //ENDE FUNKTION dokumentHochladen()

//FUNKTOIN logout
function logout(){

    localStorage.clear();
    window.location = "/index.html";
    

}