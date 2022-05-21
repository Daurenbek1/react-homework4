import React, { useState } from "react";

import "antd/dist/antd.css";
import { Button, Input, Table, Typography} from 'antd';

function App() {

  const { Title } = Typography;
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Bottle of water',
      price: 100,
    },
    {
      id: 2,
      name: 'Milk',
      price: 400,
    },
    {
      id: 3,
      name: 'Bread',
      price: 90,
    },
    {
      id: 4,
      name: 'Dinner at cafe',
      price: 2000,
    },
  ])



  const [product, setProduct] = useState({name:'', price: null})


  const addNewProduct = () => {
    setProducts([...products, {...product, id: Date.now()}])
    setProduct({name:'', price: null})
  }

  
  const deleteProduct = (product) => {
    setProducts(products.filter(p => p.id !== product.id))
  }
  

  return (
    <div className="App">
      <header className="header">
        <form className="form">
          <Input placeholder="Item name" 
                  type="text" 
                  value={product.name}
                  onChange={e => setProduct({...product, name:e.target.value})}
                  />
          <Input placeholder="Cost"
                  type="number" 
                  value={product.price}
                  onChange={e => setProduct({...product, price:e.target.value})}
                  />
          <Title level={4} style={{color: '#fff'}}>KZT</Title>
          <Button type="primary" onClick={addNewProduct}>Add</Button>
        </form>
      </header>
      <ul className="inner">
        {products.map(product => 
                    <li className="productItem">
                      <h4 className="name">{product.name}</h4>
                      <span>{product.price} KZT</span>
                      <Button onClick={() => deleteProduct(product)}>delete</Button>
                    </li>
                    )}
      </ul>
    </div>
  );
}

export default App;
