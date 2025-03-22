function generateTable() {
  let num = document.getElementById("numberInput").value;
  let tableOutput = document.getElementById("tableOutput");
  let errorMessage = document.getElementById("errorMessage");

  tableOutput.innerHTML = "";
  errorMessage.innerText = "";

  if (!num || isNaN(num)) {
    errorMessage.innerText = "Please enter a valid number!";
    return;
  }

  num = parseInt(num);
  if (num <= 0) {
    errorMessage.innerText = "Please enter a number greater than 0!";
    return;
  }

  let tableHTML = "<tr><th>Multiplication</th><th>Result</th></tr>";
  for (let i = 1; i <= 10; i++) {
    tableHTML += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
  }
  tableOutput.innerHTML = tableHTML;
}
