const box = document.querySelector("#box");

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

      box.innerHTML += `
      <div class="card">
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
      </div>
    `;
    });
  });
