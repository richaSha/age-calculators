import {Calculator } from './../js/age.js';
$(document).ready(function() {
   $('.container-fluid').css('height', $(window).height() - $('.jumbotron').height());
  $('.btn').click(function(e){
    e.preventDefault();
    let age = $('.age').val();
    let avgLifeSpan = $('.avgHumanLifeSpan').val();
    age = age.split("-");
    let calculatorObj = new Calculator(age[0], age[1], age[2]);
    let accrateAge = calculatorObj.accrateAge();
    let ageInSecond=calculatorObj.accurateAgeInSecond(accrateAge);
    let roundAge=calculatorObj.roundAge(accrateAge);
    let mercuryYear = calculatorObj.mercuryYear(roundAge);
    let venusYear=calculatorObj.venusYear(roundAge);
    let marsYear=calculatorObj.marsYear(roundAge);
    let jupitorYear=calculatorObj.jupiterYear(roundAge);

    let mercuryYearLeftForLive = calculatorObj.mercuryYearLeftForLive(avgLifeSpan,mercuryYear);
    let venusYearLeftForLive=calculatorObj.venusYearLeftForLive(avgLifeSpan,venusYear);
    let marsYearLeftForLive=calculatorObj.marsYearLeftForLive(avgLifeSpan, marsYear);
    let jupitorYearLeftForLive=calculatorObj.jupitorYearLeftForLive(avgLifeSpan, jupitorYear);
    let earthYearLeftForLive=calculatorObj.earthYearLeftForLive(avgLifeSpan, roundAge);

    $("#accurateAge").text(`Accurate Age: ${accrateAge[0]} Year ${accrateAge[1]} Month ${accrateAge[2]} Day`);
    $('#ageInSecond').text(`Age In Second: ${ageInSecond}`);
    $('#roundAge').text(`Age: ${roundAge} Year`);
    $('#mercuryYear').text(`Mercury Year: ${mercuryYear} Year`);
    $('#venusYear').text(`Venus Year: ${venusYear} Year`);
    $('#marsYear').text(`Mars Year: ${marsYear} Year`);
    $('#jupitorYear').text(`Jupitor Year: ${jupitorYear} Year`);

    $('#mercuryYearLeft').text(`Left Year in Mercury: ${mercuryYearLeftForLive} Year`);
    $('#venusYearLeft').text(`Left Year in Venus: ${venusYearLeftForLive} Year`);
    $('#marsYearLeft').text(`Left Year in Mars: ${marsYearLeftForLive} Year`);
    $('#jupitorYearLeft').text(`Left Year in Jupitor: ${jupitorYearLeftForLive} Year`);
    $('#earthYearLeft').text(`Left Year in Earth: ${earthYearLeftForLive} Year`);
  });
});
