function verificaRistorante(){
    var nomeRistoranteTxt = document.getElementById("nomeRist");
    var descrizioneTxt = document.getElementById("desc");
    var ubicazioneRistoranteTxt = document.getElementById("ubc");

    var nomeRist = nomeRistoranteTxt.value;
    var desc = descrizioneTxt.value;
    var ubc = ubicazioneRistoranteTxt.value;
    var ok = validateRistorante(nomeRistoranteTxt, descrizioneTxt, ubicazioneRistoranteTxt);

    if(!ok)
        alert("Mancano i campi.")
    else
        alert("Campi validati.")

    if(validateRistorante(nomeRist, desc, ubc)){
        let newTr= document.createElement("tr");

        let newTdnome= document.createElement("td");
        let newTdDesc= document.createElement("td");
        let newTdUbicazione= document.createElement("td");

        let contentNome = document.createTextNode(nomeRist);
        let contentDesc = document.createTextNode(desc);
        let contentUbc = document.createTextNode(ubc);

        newTr.appendChild(newTdnome);
        newTr.appendChild(newTdDesc);
        newTr.appendChild(newTdUbicazione);

        newTdnome.appendChild(contentNome);
        newTdDesc.appendChild(contentDesc);
        newTdUbc.appendChild(contentUbc);
    }

}

function validateRistorante(nomeRistorante, descrizioneRistorante, ubicazioneRistorante){
    var validateok = true;
    if(nomeRistorante == "")
        validateok = false;
    if(descrizioneRistorante == "")
        validateok = false;
    else{
        if(descrizioneRistorante.length <10){
            alert("Descrizione corta.");
        }
    }
    if(ubicazioneRistorante == "---")
        validateok = false;
    return validateok;
}

function rimuoviRistorante(){
    var ristorantiSelezionati = document.querySelectorAll(".ristoranteSelezionato:checked")/*#per id,. per classe, pippo>pluto -> pluto è figlio di pippo*/
    /*querySelector da un elemento
    querySelectorAll da un array
     */
    ristorantiSelezionati.forEach(function (elementSelected){

    })//fa il for each dei ristoranti
}
