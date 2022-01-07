import { IDailyData } from './../interfaces/dailyCases';
import { IDistrict, ITotal } from '../interfaces/covidData';
import { LineChartdata } from '../constants/lineChart.constant';

class CovidDataHelper {
  getStateDistricts = (stateName, stateDistrictWiseData): Array<IDistrict> => {
    const districts = stateDistrictWiseData[stateName];
    if (!districts) {
      return [];
    } else {
      const arr = [];
      const allDistricts = districts.districtData;
      for (const [districtName, data] of Object.entries(allDistricts)) {
        arr.push({
          name: districtName,
          totals: this.getTotals(data)
        });
      }
      return arr;
    }
  }

  getTotals = (data): ITotal => {
    return {
      deltaconfirmed: data.deltaconfirmed,
      deltarecovered: data.deltarecovered,
      deltadeaths: data.deltadeaths,
      confirmed: data.confirmed,
      active: data.active,
      recovered: data.recovered,
      deaths: data.deaths || data.deceased,
      activePer: ((data.active / data.confirmed) * 100).toFixed(2) + '%',
      recoveredPer: ((data.recovered / data.confirmed) * 100).toFixed(2) + '%',
      deathsPer: (((data.deaths || data.deceased) / data.confirmed) * 100).toFixed(2) + '%'
    };
  }

  getDailyCases = (data: IDailyData[]): Array<number> => {
    const startingDate = LineChartdata.startDate;
    const endDate = LineChartdata.endDate;
    const arr = [];
    let total = 0;
    let currentMonth = startingDate.split('-').slice(0, 2).join('-');
    data.forEach(eachDate => {
      if (new Date(eachDate.day) <= new Date(endDate) && new Date(eachDate.day) >= new Date(startingDate)) {
        if (eachDate.day.includes(currentMonth)) {
          total = eachDate.summary.confirmedCasesIndian;
        } else {
          currentMonth = eachDate.day.split('-').slice(0, 2).join('-');
          if (currentMonth.includes('2021-08')) { // for missing July month data (remove when data is available)
            arr.push(total);
          }
          arr.push(total);
          total = 0;
        }
      }
    });
    arr.push(total);
    return arr;
  }

  getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  }
}

export const covidDataHelper = new CovidDataHelper();
