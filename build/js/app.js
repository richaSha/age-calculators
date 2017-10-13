(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = exports.Calculator = function () {
  function Calculator(year, month, date) {
    _classCallCheck(this, Calculator);

    this.year = parseInt(year);
    this.month = parseInt(month);
    this.date = parseInt(date);
    this.today = new Date();
    this.currentYear = this.today.getUTCFullYear();
    this.currentMonth = this.today.getMonth() + 1;
    this.currentDate = this.today.getDate();
    this.monthDays = [31, this.leapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  _createClass(Calculator, [{
    key: "mercuryYear",
    value: function mercuryYear(age) {
      return age * 100 / 24;
    }
  }, {
    key: "venusYear",
    value: function venusYear(age) {
      return age * 100 / 62;
    }
  }, {
    key: "marsYear",
    value: function marsYear(age) {
      return age * 100 / 188;
    }
  }, {
    key: "jupiterYear",
    value: function jupiterYear(age) {
      return age * 100 / 1186;
    }
  }, {
    key: "roundAge",
    value: function roundAge(age) {
      var roundAge = void 0;
      var year = age[0];
      var month = age[1];
      var date = age[2];
      if (date >= 15) {
        month = month + 1;
      }
      return year + 0.083 * month;
    }
  }, {
    key: "yearToSecond",
    value: function yearToSecond(year) {
      return year * 365 * 24 * 60 * 60;
    }
  }, {
    key: "monthToSecond",
    value: function monthToSecond(month) {
      return month * 31 * 24 * 60 * 60;
    }
  }, {
    key: "dayToSecond",
    value: function dayToSecond(day) {
      return day * 24 * 60 * 60;
    }
  }, {
    key: "accurateAgeInSecond",
    value: function accurateAgeInSecond(age) {
      var calculator = this;
      return calculator.yearToSecond(age[0]) + calculator.monthToSecond(age[1]) + calculator.dayToSecond(age[2]);
    }
  }, {
    key: "accrateAge",
    value: function accrateAge() {
      var calculator = this;
      var year = 0;
      var month = 0;
      var day = 0;
      var diff = void 0;
      for (; calculator.year <= calculator.currentYear; calculator.year++) {
        if (calculator.year == calculator.currentYear) {
          if (calculator.month == calculator.currentMonth) {
            if (calculator.date > calculator.currentDate) {
              year -= 1;
              month += 11;
              day += calculator.date - calculator.currentDate;
            } else {
              day += calculator.currentDate - calculator.date;
            }
          } else if (calculator.month < calculator.currentMonth) {
            if (calculator.date <= calculator.currentDate) {
              month += calculator.currentMonth - calculator.month;
              day = calculator.currentDate - calculator.date;
            } else {
              month += calculator.currentMonth - calculator.month - 1;
              day = calculator.monthDays[calculator.month - 1] - calculator.date;
              day += calculator.currentDate;
            }
          } else {
            year -= 1;
            if (calculator.date <= calculator.currentDate) {
              day = calculator.currentDate - calculator.date;
              month += 12 - calculator.month + calculator.currentMonth;
            } else {
              day = calculator.monthDays[calculator.month - 1] - calculator.date;
              day += calculator.currentDate;
              month += 12 - calculator.month + calculator.currentMonth - 1;
            }
          }
        } else {
          year += 1;
        }
      }
      diff = [year, month, day];
      return diff;
    }
  }, {
    key: "leapYear",
    value: function leapYear() {
      var leapYear = void 0;
      if (this.currentYear % 4 == 0 || this.currentYear % 100 == 0 && this.currentYear % 400 == 0) {
        leapYear = true;
      }
      return leapYear;
    }
  }, {
    key: "mercuryYearLeftForLive",
    value: function mercuryYearLeftForLive(avgLifeSpan, mercuryYear) {
      var ageLeft = avgLifeSpan * 100 / 24 - mercuryYear;
      if (ageLeft <= 0) {
        ageLeft = "You are bellesed with Long Life";
      }
      return ageLeft;
    }
  }, {
    key: "venusYearLeftForLive",
    value: function venusYearLeftForLive(avgLifeSpan, venusYear) {
      var ageLeft = avgLifeSpan * 100 / 24 - venusYear;
      if (ageLeft <= 0) {
        ageLeft = "You are bellesed with Long Life";
      }
      return ageLeft;
    }
  }, {
    key: "marsYearLeftForLive",
    value: function marsYearLeftForLive(avgLifeSpan, marsYear) {
      var ageLeft = avgLifeSpan * 100 / 24 - marsYear;
      if (ageLeft <= 0) {
        ageLeft = "You are bellesed with Long Life";
      }
      return ageLeft;
    }
  }, {
    key: "jupitorYearLeftForLive",
    value: function jupitorYearLeftForLive(avgLifeSpan, jupitorYear) {
      var ageLeft = avgLifeSpan * 100 / 24 - jupitorYear;
      if (ageLeft <= 0) {
        ageLeft = "You are bellesed with Long Life";
      }
      return ageLeft;
    }
  }, {
    key: "earthYearLeftForLive",
    value: function earthYearLeftForLive(avgLifeSpan, roundAge) {
      var ageLeft = avgLifeSpan - roundAge;
      if (ageLeft <= 0) {
        ageLeft = "You are bellesed with Long Life";
      }
      return ageLeft;
    }
  }]);

  return Calculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _age = require('./../js/age.js');

$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    var age = $('.age').val();
    var avgLifeSpan = $('.avgHumanLifeSpan').val();
    age = age.split("-");
    var calculatorObj = new _age.Calculator(age[0], age[1], age[2]);
    var accrateAge = calculatorObj.accrateAge();
    var ageInSecond = calculatorObj.accurateAgeInSecond(accrateAge);
    var roundAge = calculatorObj.roundAge(accrateAge);
    var mercuryYear = calculatorObj.mercuryYear(roundAge);
    var venusYear = calculatorObj.venusYear(roundAge);
    var marsYear = calculatorObj.marsYear(roundAge);
    var jupitorYear = calculatorObj.jupiterYear(roundAge);

    var mercuryYearLeftForLive = calculatorObj.mercuryYearLeftForLive(avgLifeSpan, mercuryYear);
    var venusYearLeftForLive = calculatorObj.venusYearLeftForLive(avgLifeSpan, venusYear);
    var marsYearLeftForLive = calculatorObj.marsYearLeftForLive(avgLifeSpan, marsYear);
    var jupitorYearLeftForLive = calculatorObj.jupitorYearLeftForLive(avgLifeSpan, jupitorYear);
    var earthYearLeftForLive = calculatorObj.earthYearLeftForLive(avgLifeSpan, roundAge);

    $("#accurateAge").text('Accurate Age: ' + accrateAge[0] + ' Year ' + accrateAge[1] + ' Month ' + accrateAge[2] + ' Day');
    $('#ageInSecond').text('Age In Second: ' + ageInSecond);
    $('#roundAge').text('Age: ' + roundAge + ' Year');
    $('#mercuryYear').text('Mercury Year: ' + mercuryYear + ' Year');
    $('#venusYear').text('Venus Year: ' + venusYear + ' Year');
    $('#marsYear').text('Mars Year: ' + marsYear + ' Year');
    $('#jupitorYear').text('Jupitor Year: ' + jupitorYear + ' Year');
  });
});

},{"./../js/age.js":1}]},{},[2]);
