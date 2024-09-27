import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Punjabi() {
    const [data, setData] = useState([]);

    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const Punjabi = data.map((P) => {
        return (


            <div class="col-3 my-2">
                <div class="card">
                    <img src={P.FacultyImage} style={{ "width": "305" }} className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{P.FacultyName}</h5>
                        <p class="card-text">{P.FacultyID}</p>
                        <Link className="btn btn-primary" >Add to Cart</Link>
                    </div>
                </div>
            </div>


        );
    })

    return (<div className="container">
        <div className="row">
            {Punjabi}
        </div>
    </div>
    );
}


export default Punjabi;