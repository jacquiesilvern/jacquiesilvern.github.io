/* Problem #1: */
const Employees = {
    
let Sam : {
        "FirstName": "Sam",
        "Department": "Tech",
        "Salary": 40000,
        "RaiseEligible": "True"
      };

let Mary : {
        "FirstName": "Mary",
        "Department": "Finance",
        "Salary": 18500,
        "RaiseEligible": "True"
      };

let Bill : {
        "FirstName": "Bill",
        "Department": "HR",
        "Salary": 21200,
        "RaiseEligible": "False"
      };

console.log("Problem 1:", Sam, Mary, Bill)
 /* Problem 3 */     
let Anna : {
  "FirstName": "Anna",
  "Department": "Tech",
  "Salary": 25600,
  "RaiseEligible": "False"

}
  }

  console.log("Problem 3:", Sam, Mary, Bill, Anna)

/* Problem 2 */

const Company = {
let, tCompany =  {
        "companyName": " Tech Stars",
        "website": " www.techstars.site",
        "Employees": [Sam, Mary, Bill, Anna]
    }

  }

  console.log("Problem 2:", tCompany)

/* Problem 4 */

  let total = 0;
  for (let i = 0; i < tCompany.Employees.length; i++){
    totalSalary += tCompany.Employees[i].Salary
  }

  console.log(totalSalary)

/* Problem 5 */

for (let i = 0; i < tCompany.Employees.length; i++){
  if(tCompany.Employees[i].RaiseEligible === "True"){
    let pSalary = tCompany.Employees[i].Salary;
    tCompany.Employees[i].Salary = tCompany.Employees[i].Salary * 1.1;
    tCompany.Employees[i].RaiseEligible = "False"
  }
}

console.log("Problem 5", company)

/* Problem 6 */

let wfh = ["Anna", "Sam"]

for (let i = 0; i <tCompany.Employees.length; i++){
  if (wfh.includes(Sam.FirstName)){
    Sam.wfh = "true"
  }
  else if (wfh.includes(Anna.FirstName)){
    Anna.wfh = "true"
  }
  else {
    wfh = "false"
  }
}


