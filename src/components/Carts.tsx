import { useMemo } from "react";
import { ICart, IProduct } from "../interfaces/product";
import CartItem from "./CartItem";

interface CartProps {
    carts: ICart[]
    products: IProduct[]
}

const Carts = ({carts, products}: CartProps) => {
    const findProductById = (id: number) => {
        return products.find(product => product.id === id);
      }
    
      const productPrice = (id: number) => {
        const product = findProductById(id);
        let price = 0;
        if(product) price = product.price;
        return price;
      }
    
      const totalPrice = useMemo(() => {
        let total = 0;
        let discount = 0;
    
        carts.forEach(cart => {
          const price = productPrice(cart.id);
          total += cart.count * price
        })
    
        if(total >= 1000) discount += 0.1;
        else if(total >= 500) discount += 0.05;
    
        const memberShipProduct = carts.find(cart => findProductById(cart.id) && findProductById(cart.id)?.name === 'Membership');
        if(memberShipProduct) discount += 0.1;
    
        return total * (1 - discount);
      }, [carts])
      
    return (
        <>
            <table className='cart-table'>
                <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Total</th>
                </thead>
                <tbody>
                {carts.map((cart, index) => 
                    <CartItem 
                        key={cart.id} 
                        index={index}
                        cart={cart}
                        product={findProductById(cart.id)}
                        price={productPrice(cart.id)}
                    />
                )}
                </tbody>
            </table>

            <div className='total-price'>
                <label>Total: </label> {totalPrice}
            </div>
        </>
    )
}

export default Carts;