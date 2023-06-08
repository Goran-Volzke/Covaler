import { ICart, IProduct } from "../interfaces/product";

interface CartItemProps {
    cart: ICart
    price: number
    product?: IProduct
    index: number
}

const CartItem = ({cart, price, product, index}: CartItemProps) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product?.name}</td>
            <td>{cart.count}</td>
            <td>{cart.count * price}</td>
        </tr>  
    )
}

export default CartItem;