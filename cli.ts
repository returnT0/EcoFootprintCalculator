import { EcoCalculatorService } from './services/EcoCalculatorService';
import { selectActivity, getAmountForActivity } from './utils/inquirerHelper';

async function main() {
    const ecoService = new EcoCalculatorService();
    const userActivities = [];

    let continueLoop = true;

    while (continueLoop) {
        const activity = await selectActivity(ecoService.getAvailableActivities());
        if (activity) {
            const amount = await getAmountForActivity(activity);
            userActivities.push({ activity, amount });
        } else {
            continueLoop = false;
        }
    }

    const totalEmission = ecoService.calculateCO2Emission(userActivities);
    console.log(`\nTotal CO2 Emission: ${totalEmission.toFixed(2)} kgCO2e`);
}

main();
