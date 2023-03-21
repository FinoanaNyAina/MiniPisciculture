import React from "react";
import DataCollaborateur from "../../../data/DataCollaborateur";
import '../styles/collaborateur.css';
import { useState } from "react";


function Collaborateur() {
    const data = DataCollaborateur();
    const [date, setDate] = useState(`${new Date()}`);
    function onCkickbutton() {
        setDate(`${new Date()}`);
    }


    return (
        <>
            <div className="page-collabo">
                <div className="title_collabo">
                    <div>
                        <p>Collaborateur</p>
                    </div>
                    <div>
                        <p>Date : {date}</p>
                    </div>

                </div>
                <div className="liste-collabo">
                    <table>
                        <tbody>
                            {
                                data.map((e) =>
                                    <tr className="tr-collabo">
                                        <td>{e.nom}</td>
                                        <td>{e.mail}</td>
                                        <td>{e.service}</td>
                                        <td>{e.fonction}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <button onClick={onCkickbutton}>Finoana</button>
                </div>
            </div>
        </>
    )
}

export default Collaborateur;