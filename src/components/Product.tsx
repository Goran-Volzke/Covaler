import { useState } from "react"
import { IProduct } from "../interfaces/product"

interface ProductProps {
    product: IProduct
    index: number
    addToCart: (count: number) => void
}

const Product = ({product, index, addToCart}: ProductProps) => {
    const [count, setCount] = useState(1)

    return (
        <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>{product.price}</td>
            <td>
            <input type='number' value={count} onChange={(e) => setCount(Number(e.target.value))} />
            </td>
            <td>
            <button onClick={() => addToCart(count)} className='cart-btn'>Add to Cart</button>
            </td>
        </tr>
    )
}

export default Product;