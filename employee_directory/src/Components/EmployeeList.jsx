import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, loading, error }) => {
  if (loading) {
    return <p className="text-center text-gray-500">Loading employees...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (employees.length === 0) {
    return <p className="text-center text-gray-500">No employees found.</p>;
  }

  return (
    <div className="mt-4 max-h-[400px] overflow-y-auto pr-2">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
