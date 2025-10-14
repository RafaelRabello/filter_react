import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    if (products.length === 0) {
        return <section className="products-container"><p>Nenhum produto encontrado com os filtros selecionados.</p></section>;
    }
    
    return (
        <section id="products-container" className="products-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList;