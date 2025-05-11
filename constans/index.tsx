import {
    AverageIcon,
    BelgianFlag,
    FranceFlag,
    MistakeIcon, SuccessIcon,
    TurkeyFlag,
    UKFlag
} from "@/assets/icons/icons";
import {itemType} from "@/components/share/settings-list";
import {Image} from "react-native";
import React from "react";

export type todayTaskType = {
    title: string;
    count: number;
    type: 'answer' | 'image' | 'record'
}

export type DailyQuestion = {
    question?: string;
    img?: string;
    userImgUri: string;
    userName: string;
    audio?: string
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
        title: "🗺️ We're going on vocation",
        id: "lesson-1"
    },
    {
        imgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGFxfRXqtg5aKF4y2wDaLgVgO69jRyC2xlw&s',
        title: "✈️ Description of travel experiences",
        id: "lesson-2"
    },
    {
        imgUri: 'https://lh3.googleusercontent.com/proxy/HC1jfDcJNLCJzEE4g_wCeQsVuxqNtvKQKToLIllcb_qXnfBM7bnfrPhvTdapnislGxh0eKcbeWGmZQAq1zLYVOOYWioSA1w8UUhRJXqb9eBPg4oHKSpR-s-JLFiGqJjcyf2Tj-OT-KOzQpvH',
        title: "🏆 Discussing types of vocation",
        id: "lesson-3"
    },
    {
        imgUri: 'https://st2.depositphotos.com/2309453/8331/i/950/depositphotos_83313510-stock-photo-office-people-discussing-document-in.jpg',
        title: "✍️ Developing speaking and writing skills",
        id: "lesson-4"
    },
]

export const lessonData = [
    {
        lessonId: 'lesson-1',
        lessonData: [
            {
                title: 'About the lesson',
                isQuestion: false,
                lessonData: [{
                    type: 'video',
                    videoUri: 'https://assets.mixkit.co/videos/4834/4834-720.mp4'
                }]
            },
            {
                "title": "Finish the sentences",
                "isQuestion": true,
                "correctText": "Correct! In the US, people say 'on vacation', while in the UK, they usually say 'on holiday'. Well done!",
                "wrongText": "Oops, that’s not quite right. The correct answer is 'on vacation'. In the US, that’s the usual phrase. Try again!",
                "lessonData": [
                    {
                        "type": "sentence",
                        "textData": "People in the US might ask: Are you going '_______' this summer?",
                        "variants": [
                            { "question": "on vacation", "correct": true },
                            { "question": "on holiday", "correct": false },
                            { "question": "in vacation", "correct": false }
                        ]
                    }
                ]
            },
            {
                title: 'Finish the sentences',
                isQuestion: true,
                correctText: 'Correct! In the US, people say "on vacation", while in the UK, they usually say "on holiday". Well done!',
                wrongText: 'Oops, that’s not quite right. The correct answer is "on vacation". In the US, that’s the usual phrase. Try again!',
                lessonData: [
                    {
                        type: 'video',
                        videoUri: 'https://assets.mixkit.co/videos/4863/4863-720.mp4'
                    },
                    {
                        type: 'sentence',
                        textData: 'Did you know that in USA people say: "_________" but in the UK people normally say "on holiday"?',
                        variants: [
                            {question: 'on vacation', correct: true},
                            {question: 'in vacation', correct: false},
                        ]
                    }
                ]
            },
            {
                "title": "Finish the sentences",
                "isQuestion": true,
                "correctText": "Correct! In the US, people say 'on vacation', while in the UK, they usually say 'on holiday'. Well done!",
                "wrongText": "Oops, that’s not quite right. The correct answer is 'on vacation'. In the US, that’s the usual phrase. Try again!",
                "lessonData": [
                    {
                        "type": "sentence",
                        "textData": "In the UK, when someone is taking a break, they often say '_________', while in the US, 'on vacation' is the common term.",
                        "variants": [
                            { "question": "on holiday", "correct": true },
                            { "question": "in holiday", "correct": false },
                            { "question": "on leave", "correct": false }
                        ]
                    }
                ]
            },
            {
                title: 'Is the sentence written correctly?',
                isQuestion: true,
                correctText: 'Correct! In the US, people say "on vacation", while in the UK, they usually say "on holiday". Well done!',
                wrongText: 'Oops, that’s not quite right. The correct answer is "on vacation". In the US, that’s the usual phrase. Try again!',
                lessonData: [
                    {
                        type: 'video',
                        videoUri: 'https://assets.mixkit.co/videos/4834/4834-720.mp4'
                    },
                    {
                        type: 'sentence',
                        textData: "I'm going abroad next month with a friend! I can't wait!",
                        variants: [
                            {question: 'Right', correct: false},
                            {question: 'Wrong', correct: true},
                        ]
                    }
                ]
            },
        ]
    },
    {
        lessonId: 'lesson-2',
        lessonData: [
            {
                title: 'About the lesson',
                isQuestion: false,
                lessonData: [{
                    type: 'video',
                    videoUri: 'https://ia801404.us.archive.org/23/items/grammar-bootcamp/04%20Re%20Phrasing.mp4'
                }]
            },
            {
                title: 'Finish the sentences',
                isQuestion: true,
                correctText: 'Correct! In the UK, "at the weekend" is commonly used. Great job!',
                wrongText: 'Not quite. The correct phrase in the UK is "at the weekend". Keep going!',
                lessonData: [
                    {
                        type: 'video',
                        videoUri: 'https://ia601404.us.archive.org/23/items/grammar-bootcamp/05%20Fewer%20Octopuses%20Or%20Less%20Octopi.mp4'
                    },
                    {
                        type: 'sentence',
                        textData: 'In the UK people say "at the weekend", but in the US they usually say: "_________"',
                        variants: [
                            {question: 'on the weekend', correct: true},
                            {question: 'in the weekend', correct: false},
                        ]
                    }
                ]
            },
            {
                title: 'Is the sentence written correctly?',
                isQuestion: true,
                correctText: 'Correct! Americans often say "on the weekend". Good catch!',
                wrongText: 'Incorrect. The correct version would be "on the weekend" in US English.',
                lessonData: [
                    {
                        type: 'video',
                        videoUri: 'https://ia601404.us.archive.org/23/items/grammar-bootcamp/05%20Fewer%20Octopuses%20Or%20Less%20Octopi.mp4'
                    },
                    {
                        type: 'sentence',
                        textData: 'Let’s go hiking at the weekend if the weather is nice.',
                        variants: [
                            {question: 'Right', correct: true},
                            {question: 'Wrong', correct: false},
                        ]
                    }
                ]
            },
        ]
    },
    {
        lessonId: 'lesson-3',
        lessonData: [
            {
                title: 'About the lesson',
                isQuestion: false,
                lessonData: [{
                    type: 'video',
                    videoUri: 'https://ia601404.us.archive.org/23/items/grammar-bootcamp/05%20Fewer%20Octopuses%20Or%20Less%20Octopi.mp4'
                }]
            },
            {
                title: 'Finish the sentences',
                isQuestion: true,
                correctText: 'Correct! In British English, it’s "at university". Well done!',
                wrongText: 'That’s not correct. The British usually say "at university". Try again!',
                lessonData: [
                    {
                        type: 'video',
                        videoUri: 'https://ia601404.us.archive.org/23/items/grammar-bootcamp/05%20Fewer%20Octopuses%20Or%20Less%20Octopi.mp4'
                    },
                    {
                        type: 'sentence',
                        textData: 'In American English, people say "in college", but in British English, they say: "_________"',
                        variants: [
                            {question: 'at university', correct: true},
                            {question: 'on university', correct: false},
                        ]
                    }
                ]
            },
            {
                title: 'Is the sentence written correctly?',
                isQuestion: true,
                correctText: 'Correct! That sentence uses British English accurately. Good job!',
                wrongText: 'Oops! In British English, it should be "at university". Watch out for prepositions!',
                lessonData: [
                    {
                        type: 'video',
                        videoUri: 'https://ia601404.us.archive.org/23/items/grammar-bootcamp/05%20Fewer%20Octopuses%20Or%20Less%20Octopi.mp4'
                    },
                    {
                        type: 'sentence',
                        textData: 'My sister is studying at university in London.',
                        variants: [
                            {question: 'Right', correct: true},
                            {question: 'Wrong', correct: false},
                        ]
                    }
                ]
            },
        ]
    }
];


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

export const dummyQuestions: DailyQuestion[] = [
    {
        userName: 'Megan Fox',
        type: 'answer',
        question: 'If I would have seen him, I would have told him the truth.',
        userImgUri: 'https://v.wpimg.pl/NzE1ZmJhYRskUyxeZRNsDmcLeAQjSmJYMBNgT2VZfEJ1SXULIwQrCCBBNUMtGjsKJEYqQzoEYRs1WHUbe0cqEzZBNgwzRysXJ1Q-QnJdKxl1CTlfZ114H3ccbgxyWGNCdlI7QC4NKE10BDwPKwp6T2dM'
    },
    {
        userName: 'Jason Statham',
        type: 'answer',
        audio: 'https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3',
        question: 'Neither of the answers are correct.',
        userImgUri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2ZJHCqvbwrYmln1iiTIkTJwC0atIVCccya2ucLRQCQByn_j7WBRha0auTDkt1I-SI-oy7gcEN63c6snfkcaXLqQ'
    },
    {
        userName: 'Ryan Gosling',
        type: 'answer',
        img: 'https://media.istockphoto.com/id/1439820420/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D0%B8%D0%B9-bmw-m3.jpg?s=612x612&w=0&k=20&c=HsOJmn1pKZFM36XRp9ex0svoRRkOssKYrzTgEw0ODhU=',
        question: 'She suggested going to the museum instead.',
        userImgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAYqRjClt0pmy_OncCgl0UJPPJmBVVtjruw&s'
    },
    {
        userName: 'Megan Fox',
        type: 'answer',
        question: 'The book, that I bought yesterday, is very interesting.',
        userImgUri: 'https://v.wpimg.pl/NzE1ZmJhYRskUyxeZRNsDmcLeAQjSmJYMBNgT2VZfEJ1SXULIwQrCCBBNUMtGjsKJEYqQzoEYRs1WHUbe0cqEzZBNgwzRysXJ1Q-QnJdKxl1CTlfZ114H3ccbgxyWGNCdlI7QC4NKE10BDwPKwp6T2dM'
    },
    {
        userName: 'Megan Fox',
        type: 'answer',
        img: 'https://images.prismic.io/virginexperiencedays/207db631-6b1f-415a-bca1-0d0f115be17b_day-trip-to-the-25093853.jpg?auto=compress,format&rect=0,86,1200,628&w=1200&h=628',
        question: 'I wish I knew the answer.',
        userImgUri: 'https://v.wpimg.pl/NzE1ZmJhYRskUyxeZRNsDmcLeAQjSmJYMBNgT2VZfEJ1SXULIwQrCCBBNUMtGjsKJEYqQzoEYRs1WHUbe0cqEzZBNgwzRysXJ1Q-QnJdKxl1CTlfZ114H3ccbgxyWGNCdlI7QC4NKE10BDwPKwp6T2dM'
    },
    {
        userName: 'Jason Statham',
        type: 'answer',
        audio: 'https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3',
        question: 'Neither of the answers are correct.',
        userImgUri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2ZJHCqvbwrYmln1iiTIkTJwC0atIVCccya2ucLRQCQByn_j7WBRha0auTDkt1I-SI-oy7gcEN63c6snfkcaXLqQ'
    },
]

export interface UserProgressType {
    fill: number
    fistBlock: string
    secondBlock: string
    bottomText: string
}

export const dummyUserProgress: UserProgressType[] = [
    {
        fill: 50,
        fistBlock: '3 words learned',
        secondBlock: '1 certificates',
        bottomText: 'Language Knowledge'
    },
    {
        fill: 40,
        fistBlock: '31 completed exercises',
        secondBlock: '3 certificates',
        bottomText: 'Completed exercises'
    },
    {
        fill: 89,
        fistBlock: '5 corrections',
        secondBlock: '12 certificates',
        bottomText: 'Left to get a new level'
    },
]

export const settingsListItems: itemType[] = [
    {name: 'User Name', value: 'Andrew Boyko', type: 'text'},
    {
        name: 'Avatar', value: <Image
            className='rounded-full w-[30px] h-[30px]'
            source={{uri: 'https://i.pinimg.com/736x/fd/30/ef/fd30ef808f9e58031f40c98581418e1d.jpg'}}
        />, type: 'component'
    },
    {name: 'About Me', value: 'Learn and become better', type: 'text'},
    {name: 'Email', value: 'someemail@gmail.com', type: 'text'},
    {name: 'I speak', value: 'Poland', type: 'text'},
    {name: 'Plan of education', value: 'Free', type: 'text'},
]