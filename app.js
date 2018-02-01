'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [
  new CookieStore('First and Pike', 23, 65, 6.3),
  new CookieStore('Seatac Airport', 3, 24, 1.2),
  new CookieStore('Seattle Center', 11, 28, 3.7),
  new CookieStore('Capitol Hill', 20, 38, 2.3),
  new CookieStore('Alki', 2, 16, 4.6)
];

function CookieStore(store, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour){
// (minCustPerHour, maxCustomer, avgCookiesPer, store) {//constructing store blueprint
  this.store = store;
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

CookieStore.prototype.renderRow = function(parentTable) {//creating and rendering row and data for store
  var storeRow = document.createElement('tr');
  parentTable.appendChild(storeRow);
  var storeNameTH = document.createElement('th');
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
  var newTH = document.createElement('th');
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

  // var hourTotalTH = document.createElement('th');
  // hourTotalTH.textContent = 'Totals';
  // hourTotalTRow.appendChild(hourTotalTH);

  var hourTotalTD;
  var hourlyTotal = 0;
  // var dailyTotalFoot = 0;
  // ^^ HOURLY TOTALS AT THE BOTTOM - STRETCH GOAL

  for (var i = 0; i < hours.length; i++) {
    hourTotalTD = document.createElement ('td');
    hourlyTotal = 0;

    for(var j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j].cookiesSoldByHour[i];
    }
    // dailyTotalFoot += hourlyTotal;
    // hourTotalTD.textContent = hourlyTotal;
    // hourTotalTRow.appendChild(hourTotalTD);
  // ^^ HOURLY TOTALS AT THE BOTTOM - STRETCH GOAL
  }
  hourTotalTD = document.createElement ('td');
  // hourTotalTD.textContent = dailyTotalFoot;
  // ^^ HOURLY TOTALS AT THE BOTTOM - STRETCH GOAL
  hourTotalTRow.appendChild(hourTotalTD);
};

// generating form and assigning inputs to constructor properties
// var userForm = document.getElementById('store_form');

// userForm.addEventListener('submit', submitHandler);

// function submitHandler(event) {
//   event.preventDefault();
//   var storeName = event.target.store_title.value;
//   var minCustomer = parseInt(event.target.min_customers.value);
//   var maxCustPerHour = parseInt(event.target.max_customers.value);
//   var avgCookiesSoldPerHour = parseInt(event.target.avg_cookies_per.value);

//   event.target.store_title.value = '';
//   event.target.min_customers.value = '';
//   event.target.max_customers.value = '';
//   event.target.avg_cookies_per.value = '';

//   var newStore = new Store(minCustomer, maxCustPerHour, avgCookiesSoldPerHour, storeName);
//   stores.push(newStore);
//   renderTable();
// };

renderTable();










// ----------------------------------------------------------------------------------------------------------------------------------------------
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var allLocations = [];
// var cookiesSoldByHour = 0;
// // var hourlyTotals = 0;
// // var totalTotal = 0;

// function CookieStore(store, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour){
//   this.store = store;
//   this.minCustPerHour = minCustPerHour;
//   this.maxCustPerHour = maxCustPerHour;
//   this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
//   this.randCustByHour = [];
//   this.cookiesSoldByHour = [];
//   this.totalCookies = 0;
//   allLocations.push(this);
//   this.calcRandCustByHour = function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(Math.floor(Math.random() *
//       console.log(this.calcRandCustByHour[i]); (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

//     }
//   };
//   this.calcCookiesSoldByHour = function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
//       this.totalCookies += this.cookiesSoldByHour[j];
//       console.log(this.calcCookiesSoldByHour[j]);
//     }
//     console.log(this.totalCookies + ' cookies total');
//   };
//   // this.calcCookiesSoldByHour();
//   // this.calcRandCustByHour();
//   this.render = function() {
//     var makeTable = document.getElementById('cookiestands');
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var trEl = document.createElement('tr');
//     trEl.textContent = this.name;
//     makeTable.appendChild(trEl);
//     for (var k =0; k < hours.length; k++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       firstAndPike.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalCookies;
//   };
//   console.log(allLocations + 'all locations');

// }

// var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
// var seatacAirport = new CookieStore('Seatac Airport', 3, 24, 1.2);
// var seattleCenter = new CookieStore('Seattle Center', 11, 28, 3.7);
// var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
// var alki = new CookieStore('Alki', 2, 16, 4.6);

// console.log(firstAndPike.calcRandCustByHour());
// console.log(firstAndPike.calcCookiesSoldByHour());
// console.log(seatacAirport.calcRandCustByHour());
// console.log(seatacAirport.calcCookiesSoldByHour());
// console.log(seattleCenter.calcRandCustByHour());
// console.log(seattleCenter.calcCookiesSoldByHour());
// console.log(capitolHill.calcRandCustByHour());
// console.log(capitolHill.calcCookiesSoldByHour());
// console.log(alki.calcCookiesSoldByHour());
// console.log(alki.calcCookiesSoldByHour());

// var tableEl = document.getElementById('cookiestands');

// function makeTableRow() {
//   var trEl = document.createElement('tr');
//   for (var m = 0; m < allLocations.length; m++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = allLocations[m];
//     trEl.appendChild(tdEl);
//   }
//   // tableEl.appendChild(trEl);
// }
// makeTableRow(firstAndPike);
// makeTableRow(seatacAirport);
// makeTableRow(seattleCenter);
// makeTableRow(capitolHill);
// makeTableRow(alki);

// ----------------------------------------------------------------------------------------------------------------------------------------------

// this.render = function() {
//   var makeTable = document.getElementById('cookiestands');
//   this.calcRandCustByHour();
//   this.calcCookiesSoldByHour();
//   var trEl = document.createElement('tr');
//   trEl.textContent = this.name;
//   makeTable.appendChild(trEl);
//   for (var k =0; k < hours.length; k++){
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//     console.log(liEl);
//     firstAndPike.appendChild(liEl);
//   }
//   liEl.textContent = 'Total: ' + this.totalCookies;
// };
// console.log(allLocations + 'all locations');



//   this.calculateTotalCookies();
//   var rowElement = document.createElement('tr');
//   var dataElement = document.createElement('td');
//   dataElement.textContent = this.name;
//   rowElement.appendChild(dataElement);
//   for(var i = 0; i < hours.length; i++){
//     dataElement = document.createElement('td');
//     dataElement.textContent = this.cookiesSoldByHour[i];
//     rowElement.appendChild(dataElement);
//   }
//   dataElement = document.createElement('td');
//   dataElement.textContent = this.totalCookies;
//   rowElement.appendChild(dataElement);
//   cookieTable.appendChild(rowElement);
// };
// CookieStore();
// console.log(nameOfStores);
// console.log(CookieStore);
// console.log(store);
// new CookieStore('First and Pike', 23, 65, 6.3);
// new CookieStore('Seatac Airport', 3, 24, 1.2);
// new CookieStore('Seattle Center', 11, 28, 3.7);
// new CookieStore('Capitol Hill', 20, 38, 2.3);
// new CookieStore('Alki', 2, 16, 4.6);
// // console.log(store);

// this.render = function() {
//   this.calculateTotalCookies();
//   var rowElement = document.createElement('tr');
//   var dataElement = document.createElement('td');
//   dataElement.textContent = this.name;
//   rowElement.appendChild(dataElement);
//   for(var i = 0; i < hours.length; i++){
//     dataElement = document.createElement('td');
//     dataElement.textContent = this.cookiesSoldByHour[i];
//     rowElement.appendChild(dataElement);
//   }
//   dataElement = document.createElement('td');
//   dataElement.textContent = this.totalCookies;
//   rowElement.appendChild(dataElement);
//   cookieTable.appendChild(rowElement);
// };





// store.push(this);
// ----------------------------------------------------------------------------------------------------
// function cookiestand() {
//   var cookiestand = document.getElementById('cookiestand');
//   console.log(cookiestand);
//   function makeRows(){
//     var rowElement = document.createElement('tr');
//     var headElement = document.createElement('th');
//     headElement.textContent = 'Store';
//     rowElement.appendChild(headElement);
//     for (var i = 0; i < hours.length; i++){
//       headElement = document.createElement('th');
//       headElement.textContent = hours[i];
//       rowElement.appendChild(headElement);
//     }
//     headElement = document.createElement('th');
//     headElement.textContent = 'Total';
//     rowElement.appendChild(headElement);
//     cookiestand.appendChild(rowElement);
//   }
//   makeRows();
//   for (var i = 0; i < store.length; i++){
//     store[i].render(cookiestand);
//   }
// }
// function cookieStore() {
//   var cookieTable = document.getElementById('cookieStore');
//   console.log(cookieTable);
//   function makeHeaderRow() {
//     var rowElement = document.createElement('tr');
//     var headElement = document.createElement('th');
//     headElement.textContent = 'Store';
//     rowElement.appendChild(headElement);
//     for (var i = 0; i < hours.length; i++){
//       headElement = document.createElement('th');
//       headElement.textContent = hours[i];
//       rowElement.appendChild(headElement);
//     }
//     headElement = document.createElement('th');
//     headElement.textContent = 'Total';
//     rowElement.appendChild(headElement);
//     cookieTable.appendChild(rowElement);
//   }
//   makeHeaderRow();
//   for (var i = 0; i < store.length; i++){
//     store[i].render(cookieTable);
//   }
//   ----------------------------------------------------------------------------------------------------

// }
// console.log(this.totalCookes + ' cookies total.');
// // console.log(makeHeaderRow);
// console.log(cookiesSoldByHour);
// // console.log(hourlyTotals);
// // console.log(totalTotal);
// console.log(cookieStore);
// // console.log(makeRows);
// console.log(CookieStore);
// console.log(calcCookiesSoldByHour);
// console.log(calcRandCustByHour);