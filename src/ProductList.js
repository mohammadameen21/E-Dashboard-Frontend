import React,{ useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:9800/products');
        result = await result.json();
        setProducts(result);
    }


    console.log(products);


    return (
        <div className="product-list">
            <h1>Product List</h1>
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>

            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>
            
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>
        </div>
    )

}



export default ProductList