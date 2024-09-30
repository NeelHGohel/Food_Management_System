import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import './combine.css';

function Punjabi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);

    const apiUrl = "http://localhost:5000/punjabi";

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
            title: `${dish.FoodName} added to cart!`,
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    };

    const handleDelete = (dish) => {
        Swal.fire({
            title: `Are you sure you want to delete ${dish.FoodName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                setData(data.filter(item => item.FoodID !== dish.FoodID));
                Swal.fire(
                    'Deleted!',
                    `${dish.FoodName} has been deleted.`,
                    'success'
                );
            }
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
            <h1 className="text-center my-3">Delicious Punjabi Dishes</h1>
            <div className="row">
                {data.length > 0 ? (
                    data.map((dish) => (
                        <div className="col-md-4 col-sm-6 my-2" key={dish.FoodID}>
                            <div className="card shadow-lg border-light transition">
                                <img
                                    src={dish.FoodIMG}
                                    alt={dish.FoodName}
                                    className="card-img-top dish-image"
                                />
                                <div className="card-body text-center">
                                    <h2 className="card-title font-weight-bold">{dish.FoodName}</h2>
                                    <h5 className="card font-weight-bold">{dish.FoodPrice}</h5>
                                    <p className="card-text text-muted">{dish.FoodDescryption}</p>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            className="btn btn-success mr-2"
                                            onClick={() => handleAddToCart(dish)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(dish)}
                                        >
                                            Delete
                                        </button>
                                    </div>
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
