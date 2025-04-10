import {BelgianFlag, FranceFlag, TurkeyFlag, UKFlag} from "@/assets/icons/icons";

export const availableLanguages = [
    {name: 'English', flag: <UKFlag />},
    {name: 'French', flag: <FranceFlag />},
    {name: 'Belgian', flag: <BelgianFlag />},
    {name: 'Turkish', flag: <TurkeyFlag />},
]

export const dummyLanguagesLevel = [
    {short: 'A1', full: 'Beginning'},
    {short: 'A2', full: 'Elementary'},
    {short: 'B1', full: 'Intermediate'},
    {short: 'B2', full: 'Upper intermediate'},
    {short: 'C1', full: 'Advance'},
]

export const minutesVariants = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 80];