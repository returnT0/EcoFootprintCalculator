import inquirer from 'inquirer';
import { Activity } from '../models/Activity';

export async function selectActivity(activities: Activity[]): Promise<Activity | null> {
    const { activityDescription } = await inquirer.prompt([
        {
            type: 'list',
            name: 'activityDescription',
            message: 'Select an activity:',
            choices: [...activities.map(activity => activity.description), 'Done'],
        },
    ]);

    if (activityDescription === 'Done') {
        return null;
    }

    return activities.find(activity => activity.description === activityDescription) || null;
}

export async function getAmountForActivity(activity: Activity): Promise<number> {
    const { amount } = await inquirer.prompt([
        {
            type: 'input',
            name: 'amount',
            message: `Enter the amount for ${activity.description}:`,
            validate: (value: string) => !isNaN(parseFloat(value)) || 'Please enter a number',
        },
    ]);

    return parseFloat(amount);
}
