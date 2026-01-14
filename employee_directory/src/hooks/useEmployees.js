import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/employeeService";

export const useEmployees = (searchTerm) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      setEmployees([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchEmployees(searchTerm);
        setEmployees(data);
      } catch (err) {
        setError("Failed to fetch employees. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 400); // debounce delay

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return { employees, loading, error };
};
