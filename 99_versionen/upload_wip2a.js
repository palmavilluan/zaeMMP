//ERSTELLEN von Drag&Drop 

        //FUNKTION Dag&Drop
        //kopiert von https://dcode.domenade.com/tutorials/simple-drag-and-drop-file-upload-html-css-javascript
        document.querySelectorAll(".ablageBereich_input").forEach((inputElement) => {
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





//FUNKTION hochladen()

function hochladen(){

    // ABSPEICHERN Variabeln Inputs
//let dokumentInput = document.querySelector("#ablageBereich_input");

let kursInput = document.querySelector("#kurs_input").value;
let standortInput = document.querySelector("#standort_input").value;

//console.log(dokumentInput);
console.log(kursInput);
console.log(standortInput);

//ERSTELLEN new FormData
let formData = new FormData();


//HINZUFÜGEN inputELEMENT zu FormData object
//formData.append("dokument", dokumentInput.files[0]);

//HINZUFÜGEN inputELEMENT zu FormData object
formData.append("kurs", kursInput);

//HINZUFÜGEN inputELEMENT zu FormData object
formData.append("standort", standortInput);



// ABSENDEN FormData object an den Server
fetch("https://450731-3.web.fhgr.ch/php/upload.php", {
  method: "POST",
  body: formData
})

.then((response) => {

    return response.text(); //Form angeben in der Antwort erhalten wollen
    
})

.then((data) => {
   console.log(data)
   
    document.querySelector('#nachricht').innerHTML = data;

})

}; //ENDE FUNKTION hochladen()