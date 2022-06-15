import React from "react";
import { useState } from "react";
import './App.css'


const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const addProduct = async () =>{
        console.log(name,price,category,company);
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