function getinfo() {
  console.log("Person Info");
  const nameInput = document.getElementById("username") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement
  const ageInput = document.getElementById("age") as HTMLInputElement
  const addressInput = document.getElementById("age") as HTMLInputElement



  const name: string = nameInput.value;
  const email : string = emailInput.value;
  const age : Number = Number(ageInput.value);
  const address : string = addressInput.value;
  console.log(name);
  console.log(email)
  console.log(age)
  console.log(address)
}

getinfo();
