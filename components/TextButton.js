import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {FONTS, COLORS} from '../constants';
const TextButton = ({
  contentContainStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...contentContainStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;