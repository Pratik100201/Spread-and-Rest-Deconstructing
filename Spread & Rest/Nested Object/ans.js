const person = {
  name: "Carlos",
  age: 27,
  address: {
    street: "221 , Baker Street",
    city: "Sector 62, Oval",
    state: "London",
  },
};

function extractData(obj) {
  const {
    name,
    address: { street },
  } = obj;
  return { name, street };
}

console.log(extractData(person));