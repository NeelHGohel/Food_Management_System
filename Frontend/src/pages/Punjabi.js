import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; // Import SweetAlert
import './combine.css';

function Punjabi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);

    const apiUrl = "https://6672c8fa6ca902ae11b1c68c.mockapi.io/Faculty";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (dish) => {
        setCart([...cart, dish]);
        Swal.fire({
            title: `${dish.FacultyName} added to cart!`,
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-danger text-center">Error: {error}</div>;
    }

    return (
        <div className="container">
            <h1 className="text-center my-4">Delicious Punjabi Dishes</h1>
            <div className="row">
                {data.length > 0 ? (
                    data.map((dish) => (
                        <div className="col-md-4 col-sm-6 my-2" key={dish.FacultyID}>
                            <div className="card shadow-lg border-light transition">
                                <img
                                    src={dish.FacultyImage}
                                    alt={dish.FacultyName}
                                    className="card-img-top dish-image"
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title font-weight-bold">{dish.FacultyName}</h5>
                                    <p className="card-text text-muted">ID: {dish.FacultyID}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleAddToCart(dish)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col text-center">
                        <p>No dishes available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Punjabi;
