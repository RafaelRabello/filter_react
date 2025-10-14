const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar-container">
            <input 
                type="text" 
                placeholder="Pesquisar produtos..." 
                value={searchTerm}
                onChange={onSearchChange}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;