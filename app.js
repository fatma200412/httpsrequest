let tbody = document.querySelector("tbody");

let url = "https://northwind.vercel.app/api/suppliers/";

let postForms = document.querySelector(".postForms");
let company = document.querySelector("#company");
let city = document.querySelector("#city");
let country = document.querySelector("#country");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    //     console.log(data);

    data.forEach((element, i) => {
      // elementleri yaratmaq

      tbody.innerHTML += `
      <tr class="table-active">
          <td> ${element.id} </td>
          <td>${element.companyName}</td>
          <td>${element.address?.city}</td>
          <td>${element.address?.country}</td>
          <td>
            <button class="btn btn-warning">Info</button>
          </td>
          <td>
            <button name=${element.id} class="btn btn-danger deleteBtns">Delete</button>
          </td>
        </tr>
      `;

      //elementler yarandi

      // elementleri silmek
      let deleteBtns = document.querySelectorAll(".deleteBtns");
      for (let btn of deleteBtns) {
        //   console.log(btn);

        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());

          console.log(this.name);

          fetch(url + this.name, {
            method: "DELETE",
          });
        });
      }

      // elementler silindi
    });
  });

//   post =>gondermek

postForms.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    address: {},
  };

  obj.companyName = company.value;
  obj.address.city = city.value;
  obj.address.country = country.value;

  console.log(obj);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);

      // elementleri yaratmaq

      tbody.innerHTML += `
            <tr class="table-active">
                <td> ${data.id} </td>
                <td>${company.value}</td>
                <td>${city.value}</td>
                <td>${country.value}</td>
                <td>
                  <button class="btn btn-warning">Info</button>
                </td>
                <td>
                  <button name=${data.id} class="btn btn-danger deleteBtns">Delete</button>
                </td>
              </tr>
            `;

      //   //elementler yarandi

      // elementleri silmek
      let deleteBtns = document.querySelectorAll(".deleteBtns");
      for (let btn of deleteBtns) {
        //   console.log(btn);

        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());

          console.log(this.name);

          fetch(url + this.name, {
            method: "DELETE",
          });
        });
      }

      //   // elementler silindi
    });
});

// get by id

// fetch(url + "4")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// put

// let obj = {
//   companyName: "sdfghjk",
// };

// fetch(url + "4", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(obj),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// patch

let obj = {
  companyName: "salam",
};

fetch(url + "6", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(obj),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
