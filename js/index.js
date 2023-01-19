holePDF();


//FUNKTION holePDF()
function holePDF(){

//ERSTELLEN formData Objekt
let formData = new FormData();

fetch("https://450731-3.web.fhgr.ch/php/index.php",
            {
                body: formData,
                method: "post",
    
            })
    
            .then((res) => {
    
                return res.json();
    
            })
            .then((data) => {
    
                console.log(data);

                pdfAnzeigen(data);
    
    
            })


} //ENDE FUNKTION holePDF()
console.log ('test');

function pdfAnzeigen(data){

let tabelle = document.getElementById("tabelle");

// The array you have in the console

// Get a reference to the container element where you want to append the table
//let tabelle = document.getElementById("tabelle");

/*// Create a new table element
let tabelle = document.createElement("table");

//tabelleKopf
let tabelleKopf = document.createElement("thead");
let tabelleKopfReihe = document.createElement("tr");


tabelleKopf.appendChild(tabelleKopfReihe);

//let tabelleKopfZelle= document.createElement("td");

//tabelleKopfReihe.appendChild(tabelleKopfZelle);

for (let i = 0; i < 6; i++) {

    let tabelleKopfZelle= document.createElement("td");
    tabelleKopfReihe.appendChild(tabelleKopfZelle);

    } 

tabelle.appendChild(tabelleKopf);
*/
//tabelleBody

let tabelleBody = document.createElement("tbody");
row = tabelleBody.insertRow();



// (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
let perrow = 5; // 5 CELLS PER ROW
data.forEach((dataRow, i) => {

    for (let i = 0; i < 6; i++) {

        let cell = row.insertCell();
        cell.innerHTML = dataRow[i];

        
        }


    let cellSpende = row.insertCell();
    let spendeButton = document.createElement("button");
    spendeButton.classList.add("spendeButton");
    spendeButton.innerHTML = "Download";
    cellSpende.appendChild(spendeButton);

    spendeButton.addEventListener("click", () => {
    spendeText(dataRow);
    });

    function spendeText(dataRow){
        
        let infoText = document.querySelector("#infoText");
        infoText.innerHTML = "";
        let p = document.createElement("p");
        let span1 = document.createElement("span");
        span1.innerHTML = dataRow[4];
        let span2 = document.createElement("span");
        span2.innerHTML = dataRow[5];
        p.innerHTML = `Bedanke dich bei <span>${dataRow[4]}</span> mit einem Kaffe per Twint an die Nummer <span>${dataRow[5]}</span>`;
        infoText.appendChild(p);
        
        //infoText.innerHTML = "Bedanke dich bei " + dataRow[4] + " mit einem Kaffe per Twint an die Nummer " + dataRow[5];
    }

   


    
        

        
       

        /*let cellSpende = row.insertCell();
        cellSpende.innerHTML = "<button id='spendeButton'>Download</button>";

        function spende(dataRow){
            console.log("hat funktioniert");

            let spendeButton = document.querySelector("#spendeButton");
            console.log(spendeButton);
            
            /*spendeButton.addEventListener("click", spendeText)

            function spendeText(){

                let infoText = document.querySelector("#infoText");
        
                infoText.innerHTML = "";
            
                infoText.innerHTML = "Bedanke dich bei " + dataRow[4] + " mit einem Kaffe per Twint an die Nummer " + dataRow[5];
    
                };


        } */


        

     
       
     



    //let cellSpende = row.insertCell();
   // cellSpende.innerHTML = "<button onclick='spende())'>Download</button>"

  // ADD CELL
  
  // CLICK ON CELL TO DO SOMETHING
  // cell.onclick = FUNCTION;
 
  // TO PASS IN A RUNNING NUMBER OR PARAMETER
  // cell.onclick = () => { console.log(i); };
 
  // BREAK INTO NEXT ROW

  
  row = tabelleBody.insertRow();


  /* let next = i + 1;
  if (next%perrow==0 && next!=data.length) { row = tabelle.insertRow(); } */

});

// (D) ATTACH TABLE TO CONTAINER
tabelle.appendChild(tabelleBody);

tabelleBereich.appendChild(tabelle);


}
    

