const box = document.querySelector("#box");
const card = document.querySelector("#card");

const endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint, {
  method: "GET",
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((element) => {
      const { name, email, phone } = element;
      console.log(name, email, phone);
    });
  });
