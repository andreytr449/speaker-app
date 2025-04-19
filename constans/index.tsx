import {
    AverageIcon,
    BelgianFlag,
    FranceFlag,
    MistakeIcon, SuccessIcon,
    TurkeyFlag,
    UKFlag
} from "@/assets/icons/icons";

export type todayTaskType = {
    title: string;
    count: number;
    type: 'answer' | 'image' | 'record'
}

export const availableLanguages = [
    {name: 'English', flag: <UKFlag/>},
    {name: 'French', flag: <FranceFlag/>},
    {name: 'Belgian', flag: <BelgianFlag/>},
    {name: 'Turkish', flag: <TurkeyFlag/>},
]

export const dummyLanguagesLevel = [
    {short: 'A1', full: 'Beginning'},
    {short: 'A2', full: 'Elementary'},
    {short: 'B1', full: 'Intermediate'},
    {short: 'B2', full: 'Upper intermediate'},
    {short: 'C1', full: 'Advance'},
]

export const minutesVariants = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 80];

export const chapterDummyData = [
    {
        imgUri: 'https://images.theconversation.com/files/578175/original/file-20240227-28-cejldv.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C7668%2C3828&q=45&auto=format&w=1356&h=668&fit=crop',
        title: "We're going on vocation"
    },
    {
        imgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGFxfRXqtg5aKF4y2wDaLgVgO69jRyC2xlw&s',
        title: "Description of travel experiences"
    },
    {
        imgUri: 'https://lh3.googleusercontent.com/proxy/HC1jfDcJNLCJzEE4g_wCeQsVuxqNtvKQKToLIllcb_qXnfBM7bnfrPhvTdapnislGxh0eKcbeWGmZQAq1zLYVOOYWioSA1w8UUhRJXqb9eBPg4oHKSpR-s-JLFiGqJjcyf2Tj-OT-KOzQpvH',
        title: "Discussing types of vocation"
    },
    {
        imgUri: 'https://st2.depositphotos.com/2309453/8331/i/950/depositphotos_83313510-stock-photo-office-people-discussing-document-in.jpg',
        title: "Developing speaking and writing skills"
    },
]

export const infoCardsDummyData = [
    {icon: <MistakeIcon/>, title: 'Mistakes', count: 4},
    {icon: <AverageIcon/>, title: 'Average', count: 7},
    {icon: <SuccessIcon/>, title: 'Success', count: 15},
]

export const vocabularyDummyData = [
    {
        id: 'vocabCrdId - 1',
        title: 'Travel and speak 150 words for you',
        imgUri: 'https://www.mantripping.com/images/stories/advice-for-solo-travel-men/solo-man-traveling.jpg'
    },
    {
        id: 'vocabCrdId - 2',
        title: 'Everything you need to know while on vacation',
        imgUri: 'https://t4.ftcdn.net/jpg/02/00/06/99/360_F_200069964_B1LUrtiIovZURlIJ5a0hfxzBuAeVyD70.jpg'
    },
    {
        id: 'vocabCrdId - 3',
        title: '300 words you need to know to move',
        imgUri: 'https://i.guim.co.uk/img/media/b8ed8927f8ba824b2bd730c9d474f2524423186a/0_158_4716_2829/master/4716.jpg?width=1200&quality=85&auto=format&fit=max&s=835c461861214759b7211e65ff2cc206'
    },
    {
        id: 'vocabCrdId - 4',
        title: 'Speak confidently at the restaurant',
        imgUri: 'https://www.thanx.com/wp-content/uploads/2019/02/thanx-full_service_restaurant_guide_to_customer_engagement-hero.jpg'
    },
    {
        id: 'vocabCrdId - 5',
        title: 'Essential phrases for emergency situations',
        imgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekDoNJbwPruhpNI6wYVJPWq4C8_Sk6-mQdA&s'
    },
    {
        id: 'vocabCrdId - 6',
        title: 'Learn the basics of shopping vocabulary',
        imgUri: 'https://media.istockphoto.com/id/1729402032/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B5%D1%83%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D0%B5%D0%BC%D0%B0%D1%8F-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%89%D0%B0%D1%8F-%D1%81%D1%83%D0%BC%D0%BA%D0%B8-%D1%81-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=CwwZBHzXG9_uJNswqtc1LDIcnCjHBks5rYlBNJbeQNs='
    },
    {
        id: 'vocabCrdId - 7',
        title: 'Everything you need to know to buy a car',
        imgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygUXIN2VtDCXCJ1M0cA3DjeLHG4GfnpSwLA&s'
    },
];


export const dummyTodayTasks: todayTaskType[] = [
    {title: 'Answer using English', count: 5, type: 'answer'},
    {title: 'Describe the image', count: 2, type: 'image'},
    {title: 'Record an audio message', count: 3, type: 'record'},
]