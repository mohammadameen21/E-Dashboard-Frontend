import React from "react";
import { useState } from "react";



const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const addProduct = async () => {
        console.log(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result = await fetch("http://localhost:9800/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);

    }

    return(

    <div className="product">

        <h1>Add Product</h1>
        <input type="text" placeholder="Enter product name" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input className="inputBox" placeholder="Enter product price"  value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        <input type="text" placeholder="Enter product category" className="inputBox" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
        <input type="text" placeholder="Enter product company" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        

        <button className="appButton" onClick={addProduct}>Add</button>
        
    </div>
    )

}

export default AddProduct;