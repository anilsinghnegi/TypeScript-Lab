interface user {
  name: string;
  fullName: string;
}

interface employee {
  employeeID: Number;
}

type staffmember = user & employee;

// const users: staffmember = [
//   { name: "Anil Singh", fullName: "hello", employeeID: 1232 },
//   { name: "Anil Singh 1", fullName: "hello", employeeID: 1232 },
//   { name: "Anil Singh 2", fullName: "hello", employeeID: 1232 },


// ];

// console.log(users);
