class StatsSummaryMapper {
  getSummarySections = (countryData, state: string, district: string): Array<any> => {
    const res = [
      {
        name: 'India',
        totals: countryData.totals,
        active: false
      }
    ];
    if (state) {
      const selectedState = countryData.states.find(_ => _.name === state);
      const stateData = {
        name: state,
        totals: selectedState.totals,
        active: false
      };
      res.push(stateData);
      if (district) {
        const selectedDistrict = selectedState.districts.find(_ => _.name === district);
        const districtData = {
          name: district,
          totals: selectedDistrict.totals,
          active: false
        };
        res.push(districtData);
      }
    }
    res[res.length - 1].active = true;
    return res;
  }
}

export const statsSummaryMapper = new StatsSummaryMapper();