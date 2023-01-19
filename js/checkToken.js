

console.log("Hallo")





//FUNKTION checkToken()
function checkToken(){
    console.log("checkToken");

    let token = localStorage.getItem('token');
    if(token !== null){
        window.location = "https://450731-3.web.fhgr.ch/upload.html"
    } else {
        window.location = "https://450731-3.web.fhgr.ch/login.html"
    }
}
