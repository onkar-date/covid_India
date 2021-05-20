
export class CovidData {
  statewiseData = null;
  districtwiseData = null;
  covidData = null;
  monthwiseCases = null;
  dailyCases = null;
  date = null;
   constructor(covidData, dailyCases, monthwiseCases, date) {
    this.covidData = covidData;
    this.dailyCases = dailyCases;
    this.monthwiseCases = monthwiseCases;
    this.date = date;
  }

}