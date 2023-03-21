import React from "react";
import DataCar from "../../../data/DataCar";
import '../styles/voiture.css';


function Voiture() {
    const Data = DataCar();
    return (
        <>
            <div className="body-voiture">
                <div className="tableau">
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
                            {Data.map((e) => <tr className="table-contenue">
                                <td>{e.photo}</td>
                                <td>{e.categorie}</td>
                                <td>{e.nom}</td>
                                <td>{e.type}</td>
                                <td>{e.charge}</td>
                                <td>{e.consommation}</td>
                                <td>{e.vidange}</td>
                                <td>{e.location}</td>
                                <td>{e.chauffeur}</td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
                <div className="historique">
                    <fieldset>
                        <legend>Historique des voiture</legend>
                        <p className="historiqueP">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium repellendus ratione architecto consectetur unde earum porro quaerat, est aspernatur sequi natus debitis ullam laudantium magnam velit libero atque! Adipisci beatae maxime possimus repudiandae obcaecati sed nemo placeat, dolore itaque ducimus rem, molestiae laboriosam rerum at expedita eum architecto necessitatibus? </p>
                    </fieldset>
                </div>

            </div>
        </>
    )
}

export default Voiture;
