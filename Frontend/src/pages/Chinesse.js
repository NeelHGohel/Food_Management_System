import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Chinese() {
    const [data, setData] = useState([]);

    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const Chinese = data.map((south) => {
        return (

            <div class="col-3 my-2">
                <div class="card">
                    <img src={south.FacultyImage} style={{ "width": "305px" }} className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{south.FacultyName}</h5>
                        <p class="card-text">{south.FacultyID}</p>
                        <Link className="btn btn-primary" >Add to Cart</Link>
                    </div>
                </div>
            </div>


        );
    })

    return (<div className="container">
        <div className="row">
            {Chinese}
        </div>
    </div>
    );
}


export default Chinese;