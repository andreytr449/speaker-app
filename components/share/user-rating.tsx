import React from 'react';
import {View} from "react-native";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import InfoCard from "@/components/share/info-card";
import {CertificateIcon, ProgressChartIcon} from "@/assets/icons/icons";

const UserRating = ({isDarkMode}:{isDarkMode:boolean}) => {

    return (
       <View>
           <OnBoardingTitle>Rating</OnBoardingTitle>
           <View className='flex-row h-auto justify-between items-center my-5'>
               <InfoCard title='5 correction'
                         icon={<ProgressChartIcon isDark={isDarkMode}/>}/>

               <View
                   className={`h-full w-[3px]  ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>


               <InfoCard title='3 likes'
                         icon={<CertificateIcon isDark={isDarkMode}/>}/>
               <View
                   className={`h-full w-[3px]  ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>
               <InfoCard title='3 the best'
                         icon={<ProgressChartIcon isDark={isDarkMode}/>}/>


           </View>
       </View>
    );
};

export default UserRating;