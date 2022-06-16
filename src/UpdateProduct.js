import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[])


    const getProductDetails = async () => {
        // Giving id
        console.log(params); 
        let result = await fetch(`http://localhost:9800/product/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCompany(result.company);
        setCategory(result.category);

    }

    const updateProduct = async () => {
        
        console.warn(name,price,category,company);
    
    }

    return(

    <div className="product">

        <h1>Update Product</h1>
        <input type="text" placeholder="Enter product name" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input className="inputBox" placeholder="Enter product price"  value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        <input type="text" placeholder="Enter product category" className="inputBox" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        <input type="text" placeholder="Enter product company" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        

        <button className="appButton" onClick={updateProduct}>Update</button>
        
    </div>
    )


}

export default UpdateProduct;