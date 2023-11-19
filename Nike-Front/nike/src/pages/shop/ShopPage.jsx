import React, { useEffect, useState } from "react";
import "./ShopPage.css";
import { Text } from "@chakra-ui/react";
import NavBar from "../../component/navbar/NavBar";
import DropDown from "../../assets/icon/dropDown/DropDown";
import axios from 'axios';
import { useNavigate } from "react-router";

function ShopPage() {
const [ items , setItems] = useState([])
const navigate = useNavigate()
useEffect(()=>{

const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/products/', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
   setItems(response.data)
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

getProducts();


} , [])


 

  return (
    <>
      <NavBar></NavBar>
      <div className="shope-page-container">
        <div className="shoe-nav">
          <h1>Shoe products</h1>
         <div className="dropdown">
  <button className="dropbtn">Sort By</button>
  <div className="dropdown-content">
    <a href="#">Featured</a>
    <a href="#">Newest</a>
    <a href="#">Price: High-Low</a>
    <a href="#">Price: Low-High</a>
  </div>
</div>

        </div>
        <div className="shope-page-wrapper">
          {items.map((item, index) => {
            return (
              <div key={index} className="card-wrapper" onClick={()=>{navigate("/product/"+item.id)}} >
                {" "}
              <img src={item.img_url} ></img>   <p>{item.product_name}</p> <p className="category">Shoes</p>{" "}
                <p className="price">{item.price}$</p>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShopPage;
