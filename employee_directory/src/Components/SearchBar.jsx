const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search by name or department..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
  />
);

export default SearchBar;
