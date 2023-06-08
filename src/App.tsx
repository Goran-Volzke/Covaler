import { useEffect, useState } from 'react';
import './App.css';
import { Products } from './products';
import { ICart, IProduct } from './interfaces/product';
import Product from './components/Product';
import Carts from './components/Carts';

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [carts, setCarts] = useState<ICart[]>([]);

  useEffect(() => {
    setProducts(Products)
  }, [])

  const addToCart = (id: number, count: number) => {
    const productCarts = carts.filter(cart => cart.id === id);
    if(productCarts.length > 0) {
      const cartList = [...carts];
      cartList.forEach(cart => {
        if(cart.id === id) cart.count += count;
      })
      setCarts(cartList);
    } else {
      setCarts([...carts, {id, count}])
    }
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
            <Product 
              key={product.id}
              index={index}
              product={product}
              addToCart={(count) => addToCart(product.id, count)}
            />
          )}
        </tbody>
      </table>

      <Carts 
        carts={carts}
        products={products}
      />
    </div>
  );
}

export default App;
