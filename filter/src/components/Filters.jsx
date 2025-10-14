const Filters = ({ filters, onFilterChange, onReset }) => {
    return (
        <aside className="filters-container">
            <h2>Filtros</h2>

            <div className="filter-group">
                <label htmlFor="category">Categoria:</label>
                <select id="category" value={filters.category} onChange={onFilterChange}>
                    <option value="all">Todas</option>
                    <option value="Smartphone">Smartphones</option>
                    <option value="Notebook">Notebooks</option>
                    <option value="Headphone">Fones de Ouvido</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="brand">Marca:</label>
                <select id="brand" value={filters.brand} onChange={onFilterChange}>
                    <option value="all">Todas</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Dell">Dell</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Preço:</label>
                <div className="price-range">
                    <span>R$</span>
                    <input type="number" id="min-price" placeholder="Mín." value={filters.minPrice} onChange={onFilterChange} />
                    <span>-</span>
                    <span>R$</span>
                    <input type="number" id="max-price" placeholder="Máx." value={filters.maxPrice} onChange={onFilterChange} />
                </div>
            </div>

            <button onClick={() => {}} id="apply-filters">Aplicar Filtros</button>
            <button onClick={onReset} id="reset-filters">Limpar Filtros</button>
        </aside>
    );
};

export default Filters;