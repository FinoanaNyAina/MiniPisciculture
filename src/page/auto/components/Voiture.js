import React from "react";
import { useState, useEffect } from "react";
import DataCar from "../../../data/DataCar";
import '../styles/voiture.css';


function Voiture() {
    const donner = DataCar();
    const [data, setData] = useState([]);



    useEffect(() => {
        setData(DataCar);
    }, []);


    function onChangeload(change) {
        let lower_text = change.toLowerCase()
        return (
            setData(donner.filter((e) => e.nom.toLowerCase().includes(lower_text)))
        )
    }

    return (
        <>
            <div className="body-voiture">
                <div className="tableau">
                    <div className="recherche">
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

                            {data.map((e) => <tr className="table-contenue" >
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

            <div>
                {4 === 8 ? <h1>pourquoi</h1> : <h1>fa naninona</h1>}
            </div>
        </>
    )
}

export default Voiture;
