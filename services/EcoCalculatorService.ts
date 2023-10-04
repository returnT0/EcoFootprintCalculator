import { Activity } from '../models/Activity';
import { UserActivity } from '../models/UserActivity';

export class EcoCalculatorService {
    private activities: Record<string, Activity>;

    constructor() {
        this.activities = {
            carTravel: {
                description: 'Travel by car',
                multiplier: 0.2,
                unit: 'kgCO2e',
            },
            meatMeal: {
                description: 'Eating a meat-based meal',
                multiplier: 2.5,
                unit: 'kgCO2e',
            },
            // Add more activities as needed.
        };
    }

    public getAvailableActivities(): Activity[] {
        return Object.values(this.activities);
    }

    public calculateCO2Emission(userActivities: UserActivity[]): number {
        return userActivities.reduce((totalEmission, userActivity) => {
            return totalEmission + (userActivity.activity.multiplier * userActivity.amount);
        }, 0);
    }
}
