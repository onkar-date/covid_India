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
    deltaconfirmed: number;
    deltarecovered: number;
    deltadeaths: number;
    confirmed: number;
    recovered: number;
    deaths: number;
    active: number;
    activePer: string;
    recoveredPer: string;
    deathsPer: string;
}
