export interface IDailyCases {
  success: boolean;
  data: IDailyData[];
}

export interface IDailyData {
  day: string; // eg :- "2021-04-14"
  summary: IDailySummary;
  regional: IRegionalDaily[];
  lastRefreshed: string;
  lastOriginUpdate: string;
}

export interface IDailySummary {
  total: number;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  confirmedButLocationUnidentified: number;
}

export interface IRegionalDaily {
  loc: string;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  totalConfirmed: number;
}
