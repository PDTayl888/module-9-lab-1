import { ProductDisplayProps } from '../../types';

function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
    return(
        <>
        <img src={product.imageUrl} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <p>{product.inStock ? 'In Stocl' : "OUt of Stock"}</p>
        </>
    )
}