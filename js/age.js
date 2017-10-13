export class Calculator {
  constructor(year, month, date){
    this.year = parseInt(year);
    this.month = parseInt(month);
    this.date = parseInt(date);
    this.today =new Date();
    this.currentYear = this.today.getUTCFullYear();
    this.currentMonth = this.today.getMonth()+1;
    this.currentDate = this.today.getDate();
    this.monthDays =[31,this.leapYear()? 29: 28 ,31,30,31,30,31,31,30,31,30,31];
  }

  mercuryYear(age){
    return ((age * 100)/24);
  }

  venusYear(age){
    return ((age * 100)/62);
  }

  marsYear(age){
    return ((age * 100)/188);
  }

  jupiterYear(age){
    return ((age * 100)/1186);
  }

  roundAge(age){
    let roundAge;
    let year = age[0];
    let month = age[1];
    let date = age[2];
    if(date >= 15){
      month = month+1;
    }
    return year + (0.083* month);
  }

  yearToSecond(year){
    return year * 365*24*60*60;
  }

  monthToSecond(month){
    return month * 31*24*60*60;
  }

  dayToSecond(day){
    return day * 24*60*60;
  }

  accurateAgeInSecond(age){
    let calculator = this;
    return (calculator.yearToSecond(age[0]) + calculator.monthToSecond(age[1]) + calculator.dayToSecond(age[2]));
  }
  accrateAge(){
    let calculator = this;
    let year=0;
    let month=0;
    let day =0;
    let diff;
    for(;calculator.year <= calculator.currentYear;calculator.year++ ){
      if(calculator.year == calculator.currentYear){
        if(calculator.month == calculator.currentMonth){
          if(calculator.date > calculator.currentDate){
            year -=1;
            month +=11;
            day += (calculator.date - calculator.currentDate);
          }else{
            day += (calculator.currentDate - calculator.date);
          }
        }else if(calculator.month < calculator.currentMonth){
          if(calculator.date <= calculator.currentDate){
            month += (calculator.currentMonth - calculator.month);
            day = calculator.currentDate - calculator.date;
          }else{
            month += (calculator.currentMonth - calculator.month) -1;
            day = (calculator.monthDays[calculator.month-1] - calculator.date);
            day += calculator.currentDate;
          }

        }else{
          year -=1;
          if(calculator.date <= calculator.currentDate){
            day = calculator.currentDate - calculator.date;
            month += ((12 - calculator.month)+ calculator.currentMonth);
          }else{
            day = (calculator.monthDays[calculator.month-1] - calculator.date);
            day += calculator.currentDate;
            month += ((12 - calculator.month)+ calculator.currentMonth)-1;
          }
        }
      }else{
        year +=1;
      }
    }
    diff =[year, month, day];
    return diff;
  }

  leapYear(){
    let leapYear;
    if((this.currentYear%4==0) || ((this.currentYear%100==0) && (this.currentYear%400==0))){
      leapYear =true;
    }
    return leapYear;
  }

  mercuryYearLeftForLive(avgLifeSpan, mercuryYear){
    let ageLeft = (((avgLifeSpan * 100)/24) - mercuryYear);
    if(ageLeft <= 0){
      ageLeft = "You are bellesed with Long Life";
    }
    return ageLeft;
  }
  venusYearLeftForLive(avgLifeSpan, venusYear){
    let ageLeft = (((avgLifeSpan * 100)/24) - venusYear);
    if(ageLeft <= 0){
      ageLeft = "You are bellesed with Long Life";
    }
    return ageLeft;
  }
  marsYearLeftForLive(avgLifeSpan, marsYear){
    let ageLeft = (((avgLifeSpan * 100)/24) - marsYear);
    if(ageLeft <= 0){
      ageLeft = "You are bellesed with Long Life";
    }
    return ageLeft;
  }

  jupitorYearLeftForLive(avgLifeSpan, jupitorYear){
    let ageLeft = (((avgLifeSpan * 100)/24) - jupitorYear);
    if(ageLeft <= 0){
      ageLeft = "You are bellesed with Long Life";
    }
    return ageLeft;
  }
  earthYearLeftForLive(avgLifeSpan, roundAge){
    let ageLeft = (avgLifeSpan - roundAge);
    if(ageLeft <= 0){
      ageLeft = "You are bellesed with Long Life";
    }
    return ageLeft;
  }
}
