

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p><strong>Categoria:</strong> {product.category}</p>
            <p><strong>Marca:</strong> {product.brand}</p>
            <p className="price">R$ {product.price.toFixed(.2)}</p>
        </div>
    );
};

export default ProductCard;