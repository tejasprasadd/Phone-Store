import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer.js";
import AddItem from "./components/Additem.js";

function App() {
  const initialProductList = [
    { price: 98999, name: "IPhone 17 Pro Max", quantity: 0 },
    { price: 11999, name: "Moto G71 5G", quantity: 0 },
    { price: 59999, name: "Samsung Galaxy S24", quantity: 0 },
    { price: 44999, name: "OnePlus 12", quantity: 0 },
    { price: 24999, name: "Xiaomi Mi 13", quantity: 0 },
    { price: 39999, name: "Google Pixel 8", quantity: 0 },
    { price: 34999, name: "Sony Xperia 1 IV", quantity: 0 },
    { price: 21999, name: "Realme GT 2 Pro", quantity: 0 },
    { price: 32999, name: "Oppo Find X6", quantity: 0 },
    { price: 99999, name: "IPhone 16 Pro", quantity: 0 },
    { price: 10999, name: "Samsung Galaxy A52", quantity: 0 },
    { price: 64999, name: "OnePlus 11", quantity: 0 },
    { price: 35999, name: "Google Pixel 7", quantity: 0 },
    { price: 28999, name: "Xiaomi Mi 12", quantity: 0 },
    { price: 19999, name: "Realme 9 Pro", quantity: 0 },
    { price: 45999, name: "Sony Xperia 1 III", quantity: 0 },
    { price: 33999, name: "Oppo Reno 8", quantity: 0 },
    { price: 109999, name: "IPhone 15 Pro Max", quantity: 0 },
    { price: 12999, name: "Moto G Power", quantity: 0 },
    { price: 56999, name: "Samsung Galaxy Note 20", quantity: 0 },
    { price: 42999, name: "OnePlus Nord 2", quantity: 0 },
    { price: 25999, name: "Xiaomi Redmi Note 11", quantity: 0 },
    { price: 38999, name: "Google Pixel 6", quantity: 0 },
    { price: 35999, name: "Sony Xperia 5", quantity: 0 },
    { price: 22999, name: "Realme X7 Max", quantity: 0 },
    { price: 31999, name: "Oppo F21 Pro", quantity: 0 },
    { price: 104999, name: "IPhone 14 Pro", quantity: 0 },
    { price: 11999, name: "Samsung Galaxy A32", quantity: 0 },
    { price: 64999, name: "OnePlus 10T", quantity: 0 },
    { price: 33999, name: "Google Pixel 5", quantity: 0 },
    { price: 28999, name: "Xiaomi Poco X4", quantity: 0 },
    { price: 19999, name: "Realme 8 Pro", quantity: 0 },
    { price: 44999, name: "Sony Xperia 10", quantity: 0 },
    { price: 33999, name: "Oppo A94", quantity: 0 },
    { price: 99999, name: "IPhone 13", quantity: 0 },
    { price: 12999, name: "Moto E", quantity: 0 },
    { price: 59999, name: "Samsung Galaxy S20", quantity: 0 },
    { price: 41999, name: "OnePlus 8T", quantity: 0 },
    { price: 25999, name: "Xiaomi Mi 11 Lite", quantity: 0 },
    { price: 37999, name: "Google Pixel 4a", quantity: 0 },
    { price: 34999, name: "Sony Xperia XZ2", quantity: 0 },
    { price: 22999, name: "Realme X3", quantity: 0 },
    { price: 31999, name: "Oppo Reno 7", quantity: 0 },
    { price: 97999, name: "IPhone 12 Pro", quantity: 0 },
    { price: 11499, name: "Moto G Stylus", quantity: 0 },
    { price: 57999, name: "Samsung Galaxy S21 FE", quantity: 0 },
    { price: 40999, name: "OnePlus 7T", quantity: 0 },
    { price: 24999, name: "Xiaomi Redmi K20", quantity: 0 },
    { price: 36999, name: "Google Pixel 3a", quantity: 0 },
    { price: 35999, name: "Sony Xperia XZ Premium", quantity: 0 },
    { price: 21999, name: "Realme C21", quantity: 0 },
    { price: 30999, name: "Oppo A74", quantity: 0 },
    { price: 99999, name: "IPhone 11 Pro Max", quantity: 0 },
    { price: 13999, name: "Moto G9 Power", quantity: 0 },
    { price: 59999, name: "Samsung Galaxy Note 10", quantity: 0 },
    { price: 41999, name: "OnePlus 8 Pro", quantity: 0 },
    { price: 26999, name: "Xiaomi Poco F3", quantity: 0 },
    { price: 38999, name: "Google Pixel 2", quantity: 0 },
    { price: 34999, name: "Sony Xperia XZ1", quantity: 0 },
    { price: 23999, name: "Realme 7i", quantity: 0 },
    { price: 32999, name: "Oppo A54", quantity: 0 },
    { price: 96999, name: "IPhone XS Max", quantity: 0 },
    { price: 12499, name: "Moto G7", quantity: 0 },
    { price: 57999, name: "Samsung Galaxy A72", quantity: 0 },
    { price: 42999, name: "OnePlus Nord CE", quantity: 0 },
    { price: 23999, name: "Xiaomi Mi Mix 4", quantity: 0 },
    { price: 37999, name: "Google Pixel 1", quantity: 0 },
    { price: 35999, name: "Sony Xperia X", quantity: 0 },
    { price: 21999, name: "Realme Narzo 30", quantity: 0 },
    { price: 31999, name: "Oppo A74 5G", quantity: 0 },
    { price: 94999, name: "IPhone X", quantity: 0 },
    { price: 11499, name: "Moto E6", quantity: 0 },
    { price: 56999, name: "Samsung Galaxy M52", quantity: 0 },
    { price: 40999, name: "OnePlus 7 Pro", quantity: 0 },
    { price: 24999, name: "Xiaomi Redmi Note 10", quantity: 0 },
    { price: 37999, name: "Google Pixel XL", quantity: 0 },
    { price: 34999, name: "Sony Xperia Z5", quantity: 0 },
    { price: 22999, name: "Realme 6i", quantity: 0 },
    { price: 31999, name: "Oppo F19 Pro", quantity: 0 },
    { price: 92999, name: "IPhone 8 Plus", quantity: 0 },
    { price: 12499, name: "Moto G6", quantity: 0 },
    { price: 58999, name: "Samsung Galaxy M51", quantity: 0 },
    { price: 41999, name: "OnePlus 6T", quantity: 0 },
    { price: 25999, name: "Xiaomi Mi A3", quantity: 0 },
    { price: 38999, name: "Google Pixel 5a", quantity: 0 },
    { price: 35999, name: "Sony Xperia Z4", quantity: 0 },
    { price: 21999, name: "Realme 5 Pro", quantity: 0 },
    { price: 30999, name: "Oppo Reno 3", quantity: 0 },
    { price: 91999, name: "IPhone 7 Plus", quantity: 0 },
    { price: 11499, name: "Moto G5", quantity: 0 },
    { price: 55999, name: "Samsung Galaxy A50", quantity: 0 },
    { price: 42999, name: "OnePlus 5T", quantity: 0 },
    { price: 24999, name: "Xiaomi Mi 9", quantity: 0 },
    { price: 37999, name: "Google Pixel 4 XL", quantity: 0 },
    { price: 34999, name: "Sony Xperia Z3", quantity: 0 },
    { price: 22999, name: "Realme 2 Pro", quantity: 0 },
    { price: 31999, name: "Oppo A5 2020", quantity: 0 },
    { price: 89999, name: "IPhone 6S Plus", quantity: 0 },
    { price: 11499, name: "Moto G4 Plus", quantity: 0 },
    { price: 54999, name: "Samsung Galaxy A40", quantity: 0 },
    { price: 41999, name: "OnePlus 3T", quantity: 0 },
    { price: 25999, name: "Xiaomi Mi Max 2", quantity: 0 },
    { price: 38999, name: "Google Pixel 3 XL", quantity: 0 },
    { price: 35999, name: "Sony Xperia Z2", quantity: 0 },
    { price: 22999, name: "Realme C15", quantity: 0 },
    { price: 30999, name: "Oppo F15", quantity: 0 },
    { price: 87999, name: "IPhone 6 Plus", quantity: 0 },
    { price: 10499, name: "Moto G4", quantity: 0 },
    { price: 53999, name: "Samsung Galaxy A30", quantity: 0 },
    { price: 40999, name: "OnePlus 2", quantity: 0 },
    { price: 24999, name: "Xiaomi Mi Mix 2", quantity: 0 },
    { price: 37999, name: "Google Pixel XL", quantity: 0 },
    { price: 34999, name: "Sony Xperia Z1", quantity: 0 },
    { price: 22999, name: "Realme 1", quantity: 0 },
    { price: 31999, name: "Oppo A83", quantity: 0 },
    { price: 85999, name: "IPhone 5S", quantity: 0 },
    { price: 10499, name: "Moto G3", quantity: 0 },
    { price: 52999, name: "Samsung Galaxy A20", quantity: 0 },
    { price: 39999, name: "OnePlus 1", quantity: 0 },
    { price: 23999, name: "Xiaomi Mi 5", quantity: 0 },
    { price: 36999, name: "Google Pixel", quantity: 0 },
    { price: 33999, name: "Sony Xperia Z", quantity: 0 },
    { price: 21999, name: "Realme 2", quantity: 0 },
    { price: 30999, name: "Oppo F3 Plus", quantity: 0 },
    { price: 15999, name: "Vivo Y73", quantity: 0 },
    { price: 12999, name: "Infinix Zero 5G", quantity: 0 },
  ];
  // Initialize state with the list of products and total amount
  const [products, setProducts] = useState(initialProductList);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to increment product quantity and update total amount
  const incrementQuantity = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProducts(newProductList);
    setTotalAmount(newTotalAmount);
  };

  // Function to decrement product quantity and update total amount
  const decrementQuantity = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProducts(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetData = () => {
    // Create a new list of products with quantities reset to 0
    let resetProductList = products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProducts(resetProductList);
    // Reset total amount to 0
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setProducts(newProductList);
  };
  const addItem = (name, price) => {
    let newProductList = [...products];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProducts(newProductList);
  };
  let newProductList = [...products];
  return (
    <>
      <Navbar />
      <main className="container mt-5"></main>
      <AddItem addItem={addItem} length={newProductList.length} />
      <ProductList
        productList={products}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
      />
      <div className="mb-5"></div>
      <Footer totalAmount={totalAmount} resetData={resetData} />
    </>
  );
}

export default App;
