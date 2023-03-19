import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" > Home </Link>
                        </li>
                        <li>
                            <Link to="/voiture" > Voiture ID </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Home;