import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Chinese(){
    const [data, setData] = useState([]);

    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const Gujrati = data.map((guj)=>{
        return(
            <tr>
                <td>{guj.id}</td>
                <td>{guj.FacultyID}</td>
                <td>{guj.FacultyName}</td>
                <td><Link className="btn btn-primary">Add to Cart</Link></td>
            </tr>
        );
    })

    return(<table className="table">{Gujrati}</table>);
}

export default Chinese;