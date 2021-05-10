import { IDailyCases } from './../interfaces/dailyCases';
import { covidDataHelper } from '../helpers/covidData.helper';
import { ICovidData } from '../interfaces/covidData';

class CovidMapper {

    mapData = (stateWiseData, stateDistrictWiseData): ICovidData => {
        const allStates = stateWiseData.statewise;
        const states = allStates.map(state => {
            return {
                name: state.state,
                totals: covidDataHelper.getTotals(state),
                districts: covidDataHelper.getStateDistricts(state.state, stateDistrictWiseData)
            };
        });
        return {
            states: states.filter(_ => _.name.toLowerCase() !== 'total'),
            totals: states.find(_ => _.name.toLowerCase() === 'total')?.totals
        };
    }

    mapDailyCases = (dailyCases: IDailyCases) => {
        return covidDataHelper.getDailyCases(dailyCases.data);
    }
}

export const covidMapper = new CovidMapper();
