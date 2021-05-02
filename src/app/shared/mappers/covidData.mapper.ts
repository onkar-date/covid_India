import { ICovidData, ITotal, IDistrict } from '../interfaces/covidData';

class CovidMapper {

    mapData = (stateWiseData, stateDistrictWiseData): ICovidData => {
        const allStates = stateWiseData.statewise;
        const states =  allStates.map(state => {
            return {
                name: state.state,
                totals: getTotals(state),
                districts : getStateDistricts(state.state, stateDistrictWiseData)
            };
        });
        return {
            states: states.filter(_ => _.name.toLowerCase() !== 'total'),
            totals: states.find(_ => _.name.toLowerCase() === 'total')?.totals
        };
    }
}

function getStateDistricts(stateName, stateDistrictWiseData): Array<IDistrict> {
    const districts = stateDistrictWiseData[stateName];
    if (!districts) {
        return [];
    } else {
        const arr = [];
        const allDistricts = districts.districtData;
        for (const [districtName, data] of Object.entries(allDistricts)) {
            arr.push({
                name: districtName,
                totals: getTotals(data)
            });
        }
        return arr;
    }
}

function getTotals(data): ITotal {
    const factor = 'Active :- ' + (data.active / data.confirmed).toString() + ', ' +
    'Recovered :- ' + (data.recovered / data.confirmed).toString() + ', ' +
    'Deaths :- ' + (data.deaths / data.confirmed).toString();
    const factor1 =( data.active / data.confirmed ) + (data.confirmed / 1000) + (1 - (data.recovered / data.confirmed)) + ((data.deaths / data.confirmed) * 2);
    return {
        confirmed: data.confirmed,
        active: data.active,
        recovered: data.recovered,
        deaths: data.deaths || data.deceased,
        factor,
        factor1
    };
}

export const covidMapper = new CovidMapper();
