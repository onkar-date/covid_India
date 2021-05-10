class StatsSummaryMapper {
  getSummarySections = (countryData) => {
    return {
      name: 'India',
      totals: countryData.totals
    };
  }
}

export const statsSummaryMapper = new StatsSummaryMapper();