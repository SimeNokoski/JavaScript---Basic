
let div = document.getElementById("div");
let btn = document.getElementById("btn");

function myFun() {
  fetch("https://swapi.dev/api/planets/?page=1")
    .then(response => {
      response.json()
        .then(serverDate => {
          let rez = "<table>";
          rez += "<tr><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>";
          for (let i = 0; i < serverDate.results.length; i++) {
            const data = serverDate.results[i];
            rez += `<tr><td>${data.name}</td>`;
            rez += `<td>${data.population}</td>`;
            rez += `<td>${data.climate}</td>`;
            rez += `<td>${data.gravity}</td></tr>`;
          }
          rez += "</table>";
          div.innerHTML += rez;
        })
    })
}

btn.addEventListener("click", function () {
  myFun();
})

