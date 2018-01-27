'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = ['First and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var firstAndPike = {
  stores: [],
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      this.totalCookies += this.cookiesSoldByHour[j];
      console.log(this.cookiesSoldByHour[j]);
    }
    console.log(this.totalCookies + ' cookies total.');
  },


  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }

    liEl.textContent = 'Total: ' + this.totalCookies;
  },
};
firstAndPike.render();


// var totalEle = document.createElement('li');
// totalEle.textContent = 'Total: ' 
// fandp.appendChild(totalEle);
// firstandpike.textContent = this.name;
// firstandpike.appendChild(fandp);
// ----------------------------------------------------------

var SeaTacAirport = {
  name: 'Seatac Airport',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      this.totalCookies += this.cookiesSoldByHour[j];
      console.log(this.cookiesSoldByHour[j]);
    }
    console.log(this.totalCookies + ' cookies total.');
  },

  render: function() {
    var SeaTacAirport = document.getElementById('SeaTacAirport');
    var sta = document.getElementById('sta');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    sta.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      SeaTacAirport.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalCookies;
  }
  
};
SeaTacAirport.render();
// ----------------------------------------------------------
var SeattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      this.totalCookies += this.cookiesSoldByHour[j];
      console.log(this.cookiesSoldByHour[j]);
    }
    console.log(this.totalCookies + ' cookies total.');
  },
  render: function() {
    var SeattleCenter = document.getElementById('SeattleCenter');
    var seaCent = document.getElementById('seaCent');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seaCent.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      SeattleCenter.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalCookies;
  }
};
SeattleCenter.render();
// ----------------------------------------------------------
var CapitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      this.totalCookies += this.cookiesSoldByHour[j];
      console.log(this.cookiesSoldByHour[j]);
    }
    console.log(this.totalCookies + ' cookies total.');
  },

  render: function() {
    var CapitolHill = document.getElementById('CapitolHill');
    var capHill = document.getElementById('capHill');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    capHill.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      CapitolHill.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalCookies;
  }
};
CapitolHill.render();
// ----------------------------------------------------------
var alki = {
  name: 'Alki',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      this.totalCookies += this.cookiesSoldByHour[j];
      console.log(this.cookiesSoldByHour[j]);
    }
    console.log(this.totalCookies + ' cookies total.');
  },
  render: function() {
    var alki = document.getElementById('alki');
    var alkiBeach = document.getElementById('alkiBeach');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    alkiBeach.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      alki.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalCookies;
  }
};
alki.render();