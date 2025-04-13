import React from 'react';
import {Pressable, Text, View, Image} from "react-native";
import {LockIcon, MarkIcon} from "@/assets/icons/icons";

const ChapterTestCard = ({title, description, isLock}: {
    title: string,
    description: string,
    isLock?: boolean
}) => {
    return (
        <View
            className={`w-full flex-row rounded-[12px] justify-between items-center p-2 bg-primary`}>
            <View className='flex-row gap-2 '>
                <View
                    className={`z-10 h-[90px] w-[90px] justify-center items-center border-4 border-bg-light rounded-full`}>
                    {isLock &&
                      <>
			                <View className='absolute z-20'>
				                <LockIcon isDark={true}/>
			                </View>
	                      <View
		                      className='absolute bg-primary w-16 h-16 rounded-full z-10 opacity-50'/>
                      </>
                    }

                    <Image
                        source={{uri: 'https://media.istockphoto.com/id/939566616/photo/wooden-table-with-empty-paper-top-view.jpg?s=612x612&w=0&k=20&c=9fcXhqijV2bzhcA1q9FprWU0s88qLOSeMx_c2OmfE-Q='}}
                        className='w-16 h-16 rounded-full'/>
                </View>
                <View className='w-auto max-w-56'>
                    <Text
                        className={`mt-3 text-body-large text-body-primary-dark`}>
                        {title}
                    </Text>
                    <Text
                        className={`mt-3 text-body-small font-normal text-body-primary-dark`}>
                        {description}
                    </Text>
                </View>
            </View>

            <Pressable
                className={`mr-2 w-12 h-12 border-2 border-bg-light rounded-[12px] items-center justify-center`}>
                <MarkIcon isDark={true}/>
            </Pressable>


        </View>
    );
};

export default ChapterTestCard;