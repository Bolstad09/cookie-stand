'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var allLocations: [];
var stores = [
  new CookieStore('First and Pike', 23, 65, 6.3),
  new CookieStore('Seatac Airport', 3, 24, 1.2),
  new CookieStore('Seattle Center', 11, 28, 3.7),
  new CookieStore('Capitol Hill', 20, 38, 2.3),
  new CookieStore('Alki', 2, 16, 4.6)
];
// console.log(allLocations);
var cookieTable = document.getElementById('cookieStore');

function CookieStore(store, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour){
// (minCustPerHour, maxCustomer, avgCookiesPer, store) {//constructing store blueprint
  this.storeName = store;
  this.minCustPerHour = minCustPerHour,
  this.maxCustPerHour = maxCustPerHour,
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour,
  this.cookiesSoldByHour = [];
  // this.storeCookiesPerHour = [];
  this.totalCookies = 0;
  // this.totalDailyCookies = 0;
}

CookieStore.prototype.randomCustomerCount = function() {//generating random # of cookies per customer/hr.
  return (Math.floor((Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour) * this.avgCookiesSoldPerHour));
};

CookieStore.prototype.cookiesPerHour = function() {//generating total number of cookies per hour
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  for (var i = 0; i < hours.length; i++) {
    var numCookiesPerHour = this.randomCustomerCount();
    this.totalCookies += numCookiesPerHour;
    this.cookiesSoldByHour.push(numCookiesPerHour);
  }
};
// allLocations.push(this);

CookieStore.prototype.renderRow = function(parentTable) {//creating and rendering row and data for store
  var storeRow = document.createElement('tr');
  parentTable.appendChild(storeRow);
  var storeNameTH = document.createElement('td');
  storeNameTH.textContent = this.storeName;
  storeRow.appendChild(storeNameTH);
  this.cookiesPerHour();

  for(var i = 0; i < this.cookiesSoldByHour.length; i++) {
    var cookieTD = document.createElement('td');
    cookieTD.textContent = this.cookiesSoldByHour[i];
    storeRow.appendChild(cookieTD);
  }
  var totalTD = document.createElement('td');
  totalTD.textContent = this.totalCookies;
  storeRow.appendChild(totalTD);
};


function renderTable() {//function to create table structure
  //making thead
  var tableData = document.getElementById('cookieStore');
  tableData.textContent = '';

  var newTHead = document.createElement('thead');
  tableData.appendChild(newTHead);
  //making tr
  var newTR = document.createElement('tr');
  newTHead.appendChild(newTR);
  //making th
  var newTH = document.createElement('td');
  newTR.appendChild(newTH);
  //adding hours to th's

  for(var i = 0; i < hours.length; i++) {//retrieving/rendering hours from storeHours array.
    var newTh = document.createElement('th');
    newTh.textContent = hours[i];
    newTR.appendChild(newTh);
  }

  //creating th element for daily totals.
  var totalTH = document.createElement('th');
  totalTH.textContent = 'Daily Total';
  newTR.appendChild(totalTH);

  //rendering and populating each store row
  for(var j = 0; j < stores.length; j++) {
    stores[j].renderRow(tableData);
  }
  renderTableFoot();
}

var renderTableFoot = function() {
  var tableData = document.getElementById ('cookieStore');
  var hourTotalTFoot = document.createElement('tfoot');
  tableData.appendChild(hourTotalTFoot);

  var hourTotalTRow = document.createElement('tr');
  hourTotalTFoot.appendChild(hourTotalTRow);

  var hourTotalTH = document.createElement('th');
  hourTotalTH.textContent = 'Totals';
  hourTotalTRow.appendChild(hourTotalTH);

  var hourTotalTD;
  var hourlyTotal = 0;
  var dailyTotalFoot = 0;
  // ^^ HOURLY TOTALS AT THE BOTTOM - STRETCH GOAL

  for (var i = 0; i < hours.length; i++) {
    hourTotalTD = document.createElement ('td');
    hourlyTotal = 0;

    for(var j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j].cookiesSoldByHour[i];
    }
    dailyTotalFoot += hourlyTotal;
    hourTotalTD.textContent = hourlyTotal;
    hourTotalTRow.appendChild(hourTotalTD);
  // ^^ HOURLY TOTALS AT THE BOTTOM - STRETCH GOAL
  }
  hourTotalTD = document.createElement ('td');
  hourTotalTD.textContent = dailyTotalFoot;
  // ^^ HOURLY TOTALS AT THE BOTTOM - STRETCH GOAL
  hourTotalTRow.appendChild(hourTotalTD);
};
// // --------------------Event--------------------------------
var formEle = document.getElementById('store-form');

function handleAddLocation(event){
  console.log(event.target);
  event.preventDefault();

  var storeName = event.target.storename.value;
  var minCustPerHour = parseInt(event.target.mincust.value);
  var maxCustPerHour = parseInt(event.target.maxcust.value);
  var avgCookiesSoldPerHour = parseFloat(event.target.avgcookies.value);
  //console.log(event.target.mincust);
  var newRow = storeName;
  var newStore = new CookieStore(storeName, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour, newRow);
  newStore.cookiesPerHour();
  stores.push(newStore);


  // addNewStore.calccookiesSoldByHour();
  console.log(newStore);


  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcookies.value = null;
  console.log(newStore);
}
// console.log(event.target.storename.value);

formEle.addEventListener('submit', (handleAddLocation));

renderTable();













































  // if (!event.target.newLocation.value || !event.target.minimum.value || !event.target.maximum.value || !event.target.average.value){
  //   return alert('Must fill in all values');
  // }




// console.log(cookieTable);  // console.log(cookieTable.rows);
// console.log(cookieTable.rows.length);

//   cookieTable.deleteRow(cookieTable.rows.length - 1);
//   newLocation.calcTotalCookies();
//   newLocation.render();
//   hourlyTotals = Array(hours.length).fill(0);
//   totalTotal = 0;
//   makeTotalRow();
// }


// makeHeaderRow(cookieTable);
// for (var i = 0; i < allLocations.length; i++){
//   allLocations[i].calculateTotalCookies();
//   allLocations[i].render(); }
// makeTotalRow();