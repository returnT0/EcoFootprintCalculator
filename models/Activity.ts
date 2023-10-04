export type CO2EmissionUnit = 'kgCO2e';

export interface Activity {
    description: string;
    multiplier: number;
    unit: CO2EmissionUnit;
}
