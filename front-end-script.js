fetch("api")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });

function displayData(data) {
  const outputArea = document.getElementById("rootContainer");

  const output = data.reduce((accumulator, stockEntry) => {
    return `${accumulator} 
                    <h3>Entry:</h3>
                    <div>Date: ${stockEntry.date}</div>
                    <div>Open: ${stockEntry.open}</div>
                    <div>High: ${stockEntry.high}</div>
                    <div>Low: ${stockEntry.low}</div>
                    <div>Close: ${stockEntry.close}</div>
                    <div>Volume: ${stockEntry.volume}</div>
                `;
  }, "");

  outputArea.innerHTML = output;
}
