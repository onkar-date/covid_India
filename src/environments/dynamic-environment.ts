declare var window: any;

export class DynamicEnvironment {
    public get variables(): IEnvironmentVariable {
        return window.config;
    }
}

export interface IEnvironmentVariable {
    baseUrl: string;
    baseUrlCovin: string;
}