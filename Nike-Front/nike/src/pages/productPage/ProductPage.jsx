import React, { useEffect, useState } from "react";
import "./productPage.css";
import NavBar from "../../component/navbar/NavBar";
import Button from "../../component/button/Button";
import Footer from '../../component/footer/Footer'
import axios from "axios";
import { useParams } from "react-router";
function ProductPage() {
  const { id } = useParams()
const [ items , setItems] = useState()
  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log("Fetching product data...");
        const response = await axios.get('http://localhost:8080/api/v1/products/' + id, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log("Response:", response);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    getProducts();
  }, [id]); // Add id as a dependency

  if (!items) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }

const addToCart = async () => {
  const userId = 2; // Replace with actual user ID
  const productId = id; // Assuming 'id' is already defined
  const quantity = 1; // Or any quantity you choose

  try {
    await axios.post(`http://localhost:8080/api/v1/cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`);
    alert('Item added to cart');
  } catch (error) {
    console.error('Error adding item to cart: ', error);
    alert('Failed to add item to cart');
  }
};


  return (
    <>
      <NavBar></NavBar>
      <div className="product-page-container">
        <div className="product-page-wrapper">
          <div className="product-page-img-wrapper">
            <img src={items.img_url}></img>
          </div>

          <div className="product-page-info">
            <div className="product-page-info-title">
              <h1>{items.product_name}</h1>
              <p>Men's Shoes</p>

              <p>$180</p>
            </div>
            <div className="sizes-selector-wrapper">
              <h1>Select Size</h1>
              <div className="size-selector">
                <div className="size-option">M 3.5 / W 5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 18 / W 19.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
                <div className="size-option">M 4 / W 5.5</div>
              </div>
            </div>
            <div className="buttons-wrapper">
              <Button
                color="black"
                onClick={addToCart}
                text="Add to bag"
                textColor="white"
              ></Button>

              <Button
                color="white"
                text="Add to Favourites"
                textColor="black"
              ></Button>
            </div>
            <div className="dec-wrapper">
              <p>
                The AJ1 forever changed the footwear game. Building on its
                legacy, this regal edition pairs premium Royal Blue suede with
                rich Black leather. Classic Nike Air branding on the tongue and
                insole is complemented by the Wings logo on the padded, high-cut
                collar. The signature star-studded outsole gets the Royal Blue
                treatment, letting you walk the dynasty forward with each step.
              </p>
            </div>
          </div>

        </div>

      </div>
<br></br>
<br></br>
<Footer></Footer>
    </>
  );
}

export default ProductPage;
