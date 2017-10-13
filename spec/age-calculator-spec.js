import {Calculator } from './../js/age.js';


  describe('leapYear', function() {
    it('should return true if its leapYear', function(){
      let calculator = new Calculator('1990','05','15');
      expect(calculator.leapYear()).toEqual(false);
    });
  });

  describe('accurateAgeInSecond', function() {
    it('should return accurate age in second', function(){
      let calculator = new Calculator('1990','05','15');
      expect(calculator.accurateAgeInSecond([24,4,29])).toEqual(770083200);
    });
  });

  describe('accrateAge', function() {
    it('should return accurate age in year month and day', function(){
      let calculator = new Calculator('1990','05','15');
      expect(calculator.accrateAge()).toEqual([27,4,29]);
    });
  });

  describe('roundAge', function() {
    it('should return round age in year', function(){
      let calculator = new Calculator('1990','05','15');
      expect(calculator.roundAge([27,4,29])).toEqual(27.415);
    });
  });

  describe('yearToSecond', function() {
    it('should return year in seconds', function(){
      let calculator = new Calculator('1990','05','15');
      expect(calculator.yearToSecond(27)).toEqual(851472000);
    });
  });

  describe('monthToSecond', function() {
    it('should return month in seconds', function(){
      let calculator = new Calculator('1990','05','15');
      expect(calculator.monthToSecond(5)).toEqual(13392000);
    });
  });

  describe('dayToSecond', function() {
    it('should return day in seconds', function(){
      let calculator = new Calculator('1990','05','15');
      expect(calculator.dayToSecond(1)).toEqual(86400);
    });
  });
