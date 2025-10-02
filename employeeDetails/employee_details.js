const employee = [
    { id: 1, name: 'John Doe', salary: 50000, department: 'IT' , age: 30, expertise: 'React'},
    { id: 2, name: 'Jane Smith', salary: 60000, department: 'HR' , age: 25, expertise: 'Node'},
    { id: 3, name: 'Jim Beam', salary: 55000, department: 'Finance' , age: 35, expertise: 'MongoDB'},
    { id: 4, name: 'Jill Johnson', salary: 52000, department: 'Marketing' , age: 28, expertise: 'Python'},
    { id: 5, name: 'Jackie Chan', salary: 52000, department: 'HR' , age: 28, expertise: 'React'},
]

const displayEmployee = () => {
    const totalEmployees = employee.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.age} of age - ${employee.expertise}</p>`).join("");
    document.getElementById('employeeDetails').innerHTML = totalEmployees
}

const calculateTotalSalaries = () => {
    const toalSalaries = employee.reduce((prevTotal, employee) => prevTotal + employee.salary, 0);
    alert(`Total Salaries is: $${toalSalaries}.`);
}

const displayHREmployeed = () => {
    const hrEmployees = employee.filter (employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.age} of age - ${employee.expertise}</p>`).join("");
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay
}

const findEmployeeById = () => {
    const employeeId = document.getElementById('employeeId').value;
    const foundEmployee = employee.find(employee => employee.id === parseInt(employeeId));
    if (foundEmployee) {
        document.getElementById('employeeDetails').innerHTML = `${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.age} of age - ${foundEmployee.expertise}`
    }
    else {
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID'
    }
}

document.getElementById('employeeId').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        findEmployeeById();
    }
})

const findByExpertise = () => {
    const expertiseSelected = document.getElementById('expertise').value;

    const foundExpertise = employee.filter(employee => employee.expertise === expertiseSelected);

    const foundExpertiseDisplay = foundExpertise.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.age} of age - ${employee.expertise}</p>`).join("");

    document.getElementById('employeeDetails').innerHTML = foundExpertiseDisplay
}