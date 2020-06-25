var tableData = data;
var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

d3.event.preventDefault();  
var inputValue = d3.select("#datetime").property("value");
var filteredData = tableData.filter(selectedDate => selectedDate.datetime === inputValue);
 
var tbody = d3.select("tbody");
tbody.html(""); 
filteredData.forEach(function(filteredData) {
var row = tbody.append("tr");
Object.entries(filteredData).forEach(function([key, value]) {
var cell = row.append("td");
cell.text(value);
});
});
  
}

