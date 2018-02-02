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


function submitHandler(event){
  console.log(event);
  event.preventDefault();
  if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
}

var storeName = event.target.newstorename.value;
var minCustomers = event.target.minCustPerHour.value;
var maxCustomers = event.target.maxCustPerHour.value;
var avgCookiesSold = event.target.avgCookiesSoldPerHour.value;



var newStore = new StoreName(storeName);
console.log(event.target.newstorename.value);

event.target.newstorename.value = null;

renderTable();




// generating form and assigning inputs to constructor properties
// var userForm = document.getElementById('store-form');

// userForm.addEventListener('submit', submitHandler);

// function submitHandler(event) {
//   event.preventDefault();
//   var storeName = parseInt(event.target.store_title.value);
//   var minCustPerHour = parseInt(event.target.min_customers.value);
//   var maxCustPerHour = parseInt(event.target.max_customers.value);
//   var avgCookiesSoldPerHour = parseInt(event.target.avg_cookies_per.value);


  // event.target.store_title.value = '';
  // event.target.min_customers.value = '';
  // event.target.max_customers.value = '';
  // event.target.avg_cookies_per.value = '';
  // event.target.store_title.value = null;
  // event.target.min_customers.value = null;
  // event.target.max_customers.value = null;
  // event.target.avg_cookies_per.value = null;

//   var newStore = new CookieStore(storeName, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour);
//   stores.push(newStore);
//   renderTable();
// }


