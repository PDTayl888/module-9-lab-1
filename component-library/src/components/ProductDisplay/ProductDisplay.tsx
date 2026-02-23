import type { ProductDisplayProps } from '../../types';

function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
    return(
        <>
        <img src={product.imageUrl} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        {showDescription && (<p>{product.description}</p>)}
        <p>{showStockStatus ? 'In StocK' : "Out of Stock"}</p>
        {onAddToCart && (
            <button
                onClick={() => onAddToCart(product.id)}></button>
        )}

        <div>{children}</div>
        </>
    )
}

export default ProductDisplay;