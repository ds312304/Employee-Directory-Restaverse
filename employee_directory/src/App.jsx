import { useState } from "react";
import { useEmployees } from "./hooks/useEmployees";
import SearchBar from "./Components/searchBar";
import EmployeeList from "./Components/EmployeeList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { employees, loading, error } = useEmployees(searchTerm);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow max-h-[80vh] overflow-y-auto">
    <h2 className="text-2xl font-semibold mb-4 text-center">
      Employee Directory
    </h2>

    <SearchBar value={searchTerm} onChange={setSearchTerm} />

    <EmployeeList
      employees={employees}
      loading={loading}
      error={error}
    />
  </div>
</div>

  );
};

export default App;
