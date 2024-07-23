import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";

function ParentComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch the items from the API and set the state
        async function fetchItems() {
            try {
                const response = await axios.get("http://localhost:3000/api/products");
                setItems(response.data);
            } catch (error) {
                console.log("Error fetching items", error);
            }
        }
        fetchItems();
    }, []);

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/products/${id}`);
            setItems((prevItems) => prevItems.filter(item => item._id !== id));
        } catch (error) {
            console.log("Error while deleting the item", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <SingleCard key={item._id} data={item} onDelete={handleDeleteItem} />
                ))}
            </div>
        </div>
    );
}

export default ParentComponent;
