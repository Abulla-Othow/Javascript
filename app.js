// from data.js
var tableData = data;


// YOUR CODE HERE!
//define the following variable and let them  refer to tbe tbody elements, input fileds,
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $searchButton = document.querySelector("#search");

//Add EventListener to the search_button.
$searchButton.addEventListener("click", handleSearchButtonClick);
//set up the data filter from the address data set.
var filterData = addressdataSet;
//Render the filterdata to the tbody
function rendertable() {
  $tbody.innerHTML ='';
  for (var i = 0; i < filterData.length; i++) {
      //get the current address
      var address = filterData[i];
      var fields = object.keys(address);
    //Get the current Sighting object and its fields
    var Sighting = filterData[i];
    var fileds = object.keys(Sighting);
    //create a new row in side the tbody
    var $row = $tbody.insertRow(i);
    for (var j=0; j< fileds.length; j++) {
      //create a new cell
      var filed = fields[j];
      var $cell = $row.insertCell[j];
      $cell.innerText = sighting[filed];
    }
  }
}

function handleSearchButtonClick() {
  //formatting the cells
  var fomatedDate = $dateInput.value.trim();
  var formatedState = $stateInput.value.trim().toLowerCase();
  if (formatedDate.length !=0) {
    var filterData = dataSet.filter(function(sighting) {
      var sightingDate = sighting.datetime();
      return sightingDate === filterData;
    });

  }
  else {
    filterData = dataSet
  }
  if (formatedState.length !=0) {
    filterData = filterData.filter(function(sighting) {
      var sightingState = sighting.state;
      return sightingState === formatedState;
    });
  }
  else {
    filterData = filterData
  }
  rendertable();
};
function handleResetButtonClick() {
    filteredAddresses = addressData;
    $cityInput.value = '';
    $stateInput.value = '';
    renderTable();
  };


rendertable();