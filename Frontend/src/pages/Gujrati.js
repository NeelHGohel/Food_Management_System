import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Gujrati() {
    const [data, setData] = useState([]);

    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const Gujrati = data.map((guj) => {
        return (


            <div class="col-3 my-2">
                <div class="card">
                    <img src={guj.FacultyImage} style={{ "width": "305px" }} className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{guj.FacultyName}</h5>
                        <p class="card-text">{guj.FacultyID}</p>
                        <Link className="btn btn-primary" >Add to Cart</Link>
                    </div>
                </div>
            </div>


        );
    })

    return (<div className="container">
        <div className="row">
            {Gujrati}
        </div>
    </div>
    );
}

export default Gujrati;


//     <tr>
//     <td>{guj.id}</td>
//     <td>{guj.FacultyID}</td>
//     <td>{guj.FacultyName}</td>
//     <td><Link className="btn btn-primary" >Add to Cart</Link></td>
// </tr>