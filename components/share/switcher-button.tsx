import React from 'react';
import {Switch} from "react-native";

const SwitcherButton = ({isEnabled, toggleSwitch}:{isEnabled: boolean, toggleSwitch: () => void}) => {

    return (
        <Switch
            trackColor={{ false: '#767577', true: '#007AFF' }}
            thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
                transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
            }}
        />
    );
};

export default SwitcherButton;