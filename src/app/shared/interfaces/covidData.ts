export interface ICovidData {
    states: IState[];
    totals: ITotal;
}

export interface IState {
    name: string;
    districts: IDistrict[];
    totals: ITotal;
}

export interface IDistrict {
    name: string;
    totals: ITotal;
}

export interface ITotal {
    confirmed: number;
    recovered: number;
    deaths: number;
    active: number;
    factor?: string | number;
    factor1?: string | number;
}