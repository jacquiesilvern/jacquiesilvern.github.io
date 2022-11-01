//Problem #1:

let S = {
        "FirstName": "Sam",
        "Department": "Tech",
        "Salary": 40000,
        "RaiseEligible": "True"
      };

let M = {
        "FirstName": "Mary",
        "Department": "Finance",
        "Salary": 18500,
        "RaiseEligible": "True"
      };

let B = {
        "FirstName": "Bill",
        "Department": "HR",
        "Salary": 21200,
        "RaiseEligible": "False"
      };

console.log("Problem 1:", S, M, B);

/* Problem 2 */

let tCompany = {
    "companyName": " Tech Stars",
    "website": " www.techstars.site",
    "Employees": [S, M, B]
  };
  

  console.log("Problem 2:", tCompany);

   /* Problem 3 */   
 let A = {
  "FirstName": "Anna",
  "Department": "Tech",
  "Salary": 25600,
  "RaiseEligible": "False"
};

  console.log("Problem 3:");
  tCompany.Employees.push(A);
  console.log(tCompany)

/* Problem 4 */

  let totalSalary = 0;
  for (let i = 0; i < tCompany.Employees.length; i++) {
    totalSalary += tCompany.Employees[i].Salary
  }

  console.log(totalSalary);

/* Problem 5 */

for (let i = 0; i < tCompany.Employees.length; i++){
  if(tCompany.Employees[i].RaiseEligible === "True"){
    let pSalary = tCompany.Employees[i].Salary;
    tCompany.Employees[i].Salary = tCompany.Employees[i].Salary * 1.1;
    tCompany.Employees[i].RaiseEligible = "False"
  }
}

console.log("Problem 5", tCompany);

/* Problem 6 */

let wfh = ["Anna", "Sam"]

for (let i = 0; i <tCompany.Employees.length; i++){
  if (wfh.includes(S.FirstName)){
    S.wfh = "true"
  }
  else if (wfh.includes(A.FirstName)){
    A.wfh = "true"
  }
  else {
    wfh = "false"
  }
}

console.log("problem 6", tCompany);


