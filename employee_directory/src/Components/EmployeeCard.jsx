const EmployeeCard = ({ employee }) => (
  <div className="border rounded-lg p-4 mb-3 bg-gray-50 hover:shadow transition">
    <h3 className="text-lg font-semibold">{employee.name}</h3>
    <p className="text-sm text-gray-600">{employee.designation}</p>

    <div className="mt-2 text-sm">
      <p><span className="font-medium">Email:</span> {employee.email}</p>
      <p><span className="font-medium">Department:</span> {employee.department}</p>
      <p><span className="font-medium">Joined:</span> {employee.date_of_joining}</p>
    </div>
  </div>
);

export default EmployeeCard;
