import React, { useEffect, useState } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import "./index.css";

function App() {

    const [name, setName] = useState("");
    const [result, setResult] = useState([]);

    function thename(event) {

        setName(event.target.value);

    }

    async function find() {
        let res = await fetch("https://api.nationalize.io/?name=" + name);
        let res2 = await res.json();
        setResult(res2.country);
        if (res2.country.length == 0) {
            setResult([{ country_id: "There is no country with this name" }])
        }
    }

    return (<>
        <h1>Name Nationality</h1>
        <h3>Find which country your name is derived from!</h3><br /><br />
        <div class="middle"><h2>Please enter your name:</h2></div><br />
        <input type="text" onChange={thename} value={name} /><br /><br />
        <button id="find" onClick={find}>Find</button><br /><br />

        <div>
            {
                result.length > 0 && (
                    <div>
                        <h1>Country:</h1>
                        <ul>
                            {
                                result.map(function (country) {
                                    return <li>{country.country_id}</li>
                                })
                            }
                        </ul>
                    </div>
                )

            }
        </div>

    </>)

}

export default App;