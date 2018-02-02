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
  this.storeName = store;
  this.minCustPerHour = minCustPerHour,
  this.maxCustPerHour = maxCustPerHour,
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour,
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
}

CookieStore.prototype.randomCustomerCount = function() {
  return (Math.floor((Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour) * this.avgCookiesSoldPerHour));
};

CookieStore.prototype.cookiesPerHour = function() {
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  for (var i = 0; i < hours.length; i++) {
    var numCookiesPerHour = this.randomCustomerCount();
    this.totalCookies += numCookiesPerHour;
    this.cookiesSoldByHour.push(numCookiesPerHour);
  }
};

CookieStore.prototype.renderRow = function(parentTable) {
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


function renderTable() {
  var tableData = document.getElementById('cookieStore');
  tableData.textContent = '';
  var newTHead = document.createElement('thead');
  tableData.appendChild(newTHead);
  var newTR = document.createElement('tr');
  newTHead.appendChild(newTR);
  var newTH = document.createElement('td');
  newTR.appendChild(newTH);

  for(var i = 0; i < hours.length; i++) {
    var newTh = document.createElement('th');
    newTh.textContent = hours[i];
    newTR.appendChild(newTh);
  }


  var totalTH = document.createElement('th');
  totalTH.textContent = 'Daily Total';
  newTR.appendChild(totalTH);


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

  var hourTotalTD;
  var hourlyTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    hourTotalTD = document.createElement ('td');
    hourlyTotal = 0;

    for(var j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j].cookiesSoldByHour[i];
    }

  }
  hourTotalTD = document.createElement ('td');
  hourTotalTRow.appendChild(hourTotalTD);
};
renderTable();







