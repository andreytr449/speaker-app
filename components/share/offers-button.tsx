import React from 'react';
import {Text, View} from "react-native";
import useTheme from "@/store/theme";
import Button from "@/components/ui/button";

const OffersButton = ({title, buttonTitle, mainColor, bgColor, bgIcon}:
                      { title: string, buttonTitle: string, mainColor?: string, bgColor? :string, bgIcon: React.ReactNode }) => {
    const {isDarkMode} = useTheme()
    let viewBgColor = isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'
    if(bgColor)
        viewBgColor = bgColor;

    const uiBg =
        [
            {horizontal: '2.73%', top: '-11%'},
            {horizontal: '2.73%', top: '45%'},
            {horizontal: '2.73%', top: '100%'},

            {horizontal: '18.73%', top: '-11%'},


            {horizontal: '-3.77%', top: '15%'},
            {horizontal: '11.77%', top: '15%'},

            {horizontal: '-3.77%', top: '75%'},
            {horizontal: '11.77%', top: '65%'},

        ]

    return (
        <View
            className={`${viewBgColor} rounded-[12px] w-full py-2 justify-center items-center overflow-hidden`}>
            <View>
                <Button fullCustomTextClassName='text-label-large text-body-primary-dark'
                        className={`px-4 text-label-large ${mainColor ? `bg-[${mainColor}]`: ''}`}>{buttonTitle}</Button>
            </View>
            <View className='text-center max-w-64'>
                <Text className={`${mainColor ? `text-[${mainColor}]` : 'text-primary'} text-title-medium my-2 text-center`}>{title}</Text>
            </View>


            {uiBg.map((data, i) => (
                <View
                    key={i + 'discount - left'}
                    // @ts-ignore
                    style={{
                        position: 'absolute',
                        top: data.top,
                        left: data.horizontal,
                    }}
                >
                    {bgIcon}
                </View>
            ))}
            {uiBg.map((data, i) => (
                <View
                    key={i + 'discount - right'}
                    // @ts-ignore
                    style={{
                        position: 'absolute',
                        top: data.top,
                        right: data.horizontal,
                    }}
                >
                    {bgIcon}
                </View>
            ))}


        </View>
    );
};

export default OffersButton;