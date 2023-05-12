import React from "react";
import '../styles/PoidProvande.css';

function Home() {
    var valeur = "";
    function onchangevalue(change) {
        let value = change.target.value;
        valeur = value
        return valeur;
    }


    function calcul() {
        let lanja = valeur;
        let poids = document.querySelector('.paragraphe');
        poids.textContent = lanja;

    }

    return (
        <>
            <div className="Home">
                <input type="text" name="nbPoid" id="nbPoid" onChange={onchangevalue} />
                <button onClick={calcul}>Moyenne</button>
                <p className="paragraphe"></p>
            </div>
        </>
    )
}

export default Home;