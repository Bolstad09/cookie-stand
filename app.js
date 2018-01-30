'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var store = [];
var cookiesSoldByHour = [];
// var hourlyTotals = 0;
var totalTotal = 0;

// function CookieStore(store, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour){
function MakeLocation(store, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour){
  this.store = store;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = [];
}

this.calcRandCustByHour = function() {
  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randCustByHour[i]);
    // return;
  }
};
this.calcCookiesSoldByHour = function() {
  for(var i = 0; i < hours.length; i++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[i]));
    this.totalCookies += this.cookiesSoldByHour[i];
    console.log(cookiesSoldByHour[i]);
    this.totalCookies += this.cookiesSoldByHour[i];
    // return;
  }
};
// store.push(this);
this.calcRandCustByHour();
this.calcCookiesSoldByHour();

function makeStands(){
  new CookieStore('First and Pike', 23, 65, 6.3);
  new CookieStore('Seatac Airport', 3, 24, 1.2);
  new CookieStore('Seattle Center', 11, 28, 3.7);
  new CookieStore('Capitol Hill', 20, 38, 2.3);
  new CookieStore('Alki', 2, 16, 4.6);
}
makeStands();

function makeHeaderRow(){
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookiestands.appendChild(trEl);
}
makeHeaderRow();

for (var j = 0; j < allLocations.length; j++){
  function makeOneDataRow() {
    var cookiestands = document.getElementById('cookiestants');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].name;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[j].cookiesSoldByHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.creatElement('td');
    tdEl.textContent = allLocations[j].totalCookies;
    trEl.appendChild(tdEl);
    cookiestands.appendChild(trEl);
  };
  makeOneDataRow();







// this.render = function(cookieTable) {
//   this.calculateTotalCookies();
//   var rowElement = document.createElement('tr');
//   var dataElement = document.createElement('td');
//   dataElement.textContent = this.name;
//   rowElement.appendChild(dataElement);
//   for(var j = 0; j < hours.length; j++){
//     dataElement = document.createElement('td');
//     dataElement.textContent = this.cookiesSoldByHour[j];
//     rowElement.appendChild(dataElement);
//   }
//   dataElement = document.createElement('td');
//   dataElement.textContent = this.totalCookies;
//   rowElement.appendChild(dataElement);
//   cookieTable.appendChild(rowElement);
// };
// store.push(this);



// console.log(CookieStore);
// console.log(this.totalTotal + ' cookies total.');
// console.log(cookiesSoldByHour);

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
// }
// console.log(makeHeaderRow);
// console.log(cookiesSoldByHour);
// console.log(hourlyTotals);
// console.log(totalTotal);
// console.log(cookieStore);
