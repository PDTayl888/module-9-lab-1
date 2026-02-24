import type { ProductDisplayProps } from '../../types';

function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
    return(
        <div style={{border: '1px solid #fffffff',
            borderRadius: '8px', margin: '29px', backgroundColor: '#70a385',}}>
        <img src={product.imageUrl} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        {showDescription && (<p>{product.description}</p>)}
        <p>{showStockStatus ? 'In StocK' : "Out of Stock"}</p>
        {onAddToCart && (
            <button
                onClick={() => onAddToCart(product.id)}>ADD TO CART</button>
        )}

        <div>{children}</div>
        </div>
    )
}

export default ProductDisplay;