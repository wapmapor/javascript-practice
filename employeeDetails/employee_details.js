const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000,specialization: 'Javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,specialization: 'Python'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization: 'Java' },
      //... ここにさらに従業員のレコードを追加できます
    ];
     // すべての従業員を表示する関数
function displayEmployees() {
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
  function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }
function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'このIDの従業員は見つかりませんでした';
       }
   }
   function findSpecJavascript(employeespec) {
      const foundEmployee = employees.find(employee => employee.specialization === employeespec);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'この技能を持つ従業員は見つかりませんでした';
       }
   }