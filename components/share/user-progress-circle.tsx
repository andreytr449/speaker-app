import React from 'react';
import {Text, View} from "react-native";
import {AnimatedCircularProgress} from "react-native-circular-progress";
import {CertificateIcon, ProgressChartIcon, UKFlag} from "@/assets/icons/icons";
import InfoCard from "@/components/share/info-card";
import {UserProgressType} from "@/constans";

interface UserProgressCircleProps extends UserProgressType{
    isDarkMode:boolean
}

const UserProgressCircle = ({isDarkMode, fill, bottomText, secondBlock, fistBlock}:UserProgressCircleProps) => {
    return (
        <>
            <View className='px-6 flex-row justify-between items-center'>
                <View className='flex-row gap-3 items-center'>
                    <View
                        className="h-[35px] w-[27px] rounded-full overflow-hidden pr-3">
                        <UKFlag width={35} height={35}/>
                    </View>
                    <Text className={`text-title-small ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>English</Text>
                </View>
                <View
                    className={`${isDarkMode ? 'bg-surfaces-light-1' : 'bg-surfaces-dark-1'} w-6 h-[2px]`}/>
                    <Text className={`text-title-small ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>British</Text>
            </View>
            <View className='flex-1 justify-center items-center'>
                <AnimatedCircularProgress
                    size={160}
                    width={17}
                    fill={fill}
                    tintColor="#007AFF"
                    backgroundColor={isDarkMode ? '#00254D' : '#E6F2FF'}
                    duration={1000}
                >
                    {fill => <Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} font-bold text-headline-medium`}>{`${Math.round(fill)}%`}</Text>}
                </AnimatedCircularProgress>
                <Text className={`text-title-small my-4 font-extralight ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>{bottomText}</Text>
            </View>

            <View className='flex-row h-auto justify-between items-center px-5'>
                <InfoCard title={fistBlock}
                          icon={<ProgressChartIcon isDark={isDarkMode}/>}/>

                <View
                    className={`h-full w-[3px]  ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>


                <InfoCard title={secondBlock}
                          icon={<CertificateIcon isDark={isDarkMode}/>}/>
            </View>
        </>
    );
};

export default UserProgressCircle;