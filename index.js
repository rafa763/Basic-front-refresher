async function readText(event) {
  const file = event.target.files.item(0);
  console.log(file);
  const text = await file.text();
  for (let line of text.split("\n")) {
    console.log(line);
  }

  clearTable();
  populate(text);
}

async function updateOnClick() {
  fetch("./data.csv")
    .then((res) => res.text())
    .then((text) => {
      // do something with "text"
      clearTable();
      populate(text);
    })
    .catch((e) => console.error(e));
}

function clearTable() {
  let table = document.getElementById("table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

function populate(text) {
  for (let line of text.split("\n")) {
    let row = table.insertRow(-1);
    for (let cell of line.split(",")) {
      let cell1 = row.insertCell(-1);
      cell1.innerHTML = cell;
    }
  }
}
