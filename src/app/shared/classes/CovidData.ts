
export class CovidData {
  statewiseData = null;
  districtwiseData = null;
  covidData = null;
  monthwiseCases = null;
  dailyCases = null;
   constructor(covidData, dailyCases, monthwiseCases) {
    this.covidData = covidData;
    this.dailyCases = dailyCases;
    this.monthwiseCases = monthwiseCases;
  }

}