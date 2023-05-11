import React from "react";
import { useState, useEffect } from "react";
import DataCar from "../../../data/DataCar";
import '../styles/voiture.css';


function Voiture() {
    const donner = DataCar();
    const [data, setData] = useState([]);
    const [affiche, setAffiche] = useState([]);



    useEffect(() => {
        setData(DataCar);
    }, []);
    useEffect(() => {
        setAffiche(affiche)
    }, [affiche]);


    const onChangeload = (change) => {
        setData(donner.filter((e) => e.nom.toLowerCase().includes(change.toLowerCase())))
    }

    function onClickChange(click) {
        setAffiche(donner.filter((f) => f.id.toString().includes(click)));

    }

    return (
        <>
            <div className="body-voiture">
                <div className="tableau">
                    <div>

                    </div>
                    <div className="recherche">
                        <select name="recherche" id="">
                            <option value="categorie">Catégorie</option>
                            <option value="nom">Nom</option>
                            <option value="type">Type</option>
                        </select>
                        <input type="text" name="txt" id="txt" className="txt" placeholder="Recherche ... " onChange={(e) => onChangeload(e.target.value)} />
                    </div>

                    <table>

                        <thead>
                            <tr className="tr-head">
                                <th>Photo</th>
                                <th>Catégorie</th>
                                <th>Nom</th>
                                <th>Type</th>
                                <th>Chargement</th>
                                <th>Consommation</th>
                                <th>Vidange</th>
                                <th>location</th>
                                <th>Chauffeure</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((e) => <tr className="table-contenue" onClick={() => onClickChange(e.id)} >
                                <td>{e.photo}</td>
                                <td>{e.categorie}</td>
                                <td>{e.nom}</td>
                                <td>{e.type}</td>
                                <td>{e.charge}</td>
                                <td>{e.consommation}</td>
                                <td>{e.vidange}</td>
                                <td>{e.location}</td>
                                <td>{e.chauffeur}</td>
                                <td>poisson</td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
                <div className="historique">
                    <fieldset>
                        <legend>Historique des voiture</legend>
                        {affiche.map((m) => <p className="historiqueP"> {m.nom} </p>)}
                        {affiche.map((m) => <p className="historiqueP"> {m.categorie} </p>)}
                        {affiche.map((m) => <p className="historiqueP"> {m.type} </p>)}
                        {affiche.map((m) => <p className="historiqueP"> {m.charge} </p>)}
                        {affiche.map((m) => <p className="historiqueP"> {m.consommation} </p>)}
                    </fieldset>
                </div>

            </div>

        </>
    )
}

export default Voiture;
