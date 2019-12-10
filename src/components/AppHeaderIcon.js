import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import THEME from '../theme';

const AppHeaderIcon = () => (
    <HeaderButton
        iconSize={24}
        color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
        IconComponent={Ionicons}
    />
);

export default AppHeaderIcon;
