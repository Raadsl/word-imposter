import React from 'react';
import { TouchableOpacity, StyleSheet, type TouchableOpacityProps } from 'react-native';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors, Theme } from '@/constants/Colors';

export type ThemedButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  lightColor?: string;
  darkColor?: string;
  textStyle?: any;
};

export function ThemedButton({
  title,
  variant = 'primary',
  size = 'md',
  style,
  lightColor,
  darkColor,
  textStyle,
  disabled,
  ...rest
}: ThemedButtonProps) {
  
  // Professional button color configurations
  const getButtonColors = () => {
    switch (variant) {
      case 'primary':
        return {
          light: {
            bg: '#2563eb', // Professional blue
            text: '#ffffff',
            border: '#2563eb',
          },
          dark: {
            bg: '#3b82f6',
            text: '#ffffff', 
            border: '#3b82f6',
          }
        };
      
      case 'secondary':
        return {
          light: {
            bg: '#f1f5f9', // Light gray
            text: '#334155', // Dark gray text
            border: '#e2e8f0',
          },
          dark: {
            bg: '#334155',
            text: '#f8fafc',
            border: '#475569',
          }
        };
        
      case 'success':
        return {
          light: {
            bg: '#059669', // Professional green
            text: '#ffffff',
            border: '#059669',
          },
          dark: {
            bg: '#10b981',
            text: '#ffffff',
            border: '#10b981',
          }
        };
        
      case 'outline':
        return {
          light: {
            bg: 'transparent',
            text: '#2563eb',
            border: '#2563eb',
          },
          dark: {
            bg: 'transparent',
            text: '#3b82f6',
            border: '#3b82f6',
          }
        };
        
      case 'ghost':
        return {
          light: {
            bg: 'transparent',
            text: '#374151',
            border: 'transparent',
          },
          dark: {
            bg: 'transparent',
            text: '#d1d5db',
            border: 'transparent',
          }
        };
        
      default:
        return {
          light: { bg: '#2563eb', text: '#ffffff', border: '#2563eb' },
          dark: { bg: '#3b82f6', text: '#ffffff', border: '#3b82f6' }
        };
    }
  };

  const colors = getButtonColors();
  
  const backgroundColor = useThemeColor(
    { 
      light: lightColor || colors.light.bg, 
      dark: darkColor || colors.dark.bg
    }, 
    'background'
  );
  
  const textColor = useThemeColor(
    { 
      light: colors.light.text, 
      dark: colors.dark.text 
    }, 
    'text'
  );
  
  const borderColor = useThemeColor(
    { 
      light: colors.light.border,
      dark: colors.dark.border
    }, 
    'border'
  );

  // Size configurations
  const sizeConfig = {
    sm: {
      paddingVertical: Theme.spacing.sm,
      paddingHorizontal: Theme.spacing.md,
      fontSize: Theme.typography.fontSize.sm,
    },
    md: {
      paddingVertical: Theme.spacing.md,
      paddingHorizontal: Theme.spacing.lg,
      fontSize: Theme.typography.fontSize.md,
    },
    lg: {
      paddingVertical: Theme.spacing.lg,
      paddingHorizontal: Theme.spacing.xl,
      fontSize: Theme.typography.fontSize.lg,
    },
  };

  const currentSize = sizeConfig[size];

  const buttonStyle = [
    styles.base,
    {
      backgroundColor: backgroundColor,
      paddingVertical: currentSize.paddingVertical,
      paddingHorizontal: currentSize.paddingHorizontal,
      borderWidth: variant === 'outline' ? 2 : variant === 'secondary' ? 1 : 0,
      borderColor: variant === 'outline' || variant === 'secondary' ? borderColor : 'transparent',
    },
    // Add pressed state styling
    variant === 'ghost' && styles.ghost,
    variant === 'outline' && styles.outline,
    disabled && styles.disabled,
    style,
  ];

  const textStyleCombined = [
    {
      color: textColor,
      fontSize: currentSize.fontSize,
      fontWeight: Theme.typography.fontWeight.semibold,
    },
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity style={buttonStyle} disabled={disabled} {...rest}>
      <ThemedText style={textStyleCombined}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadows.sm,
    // Improve touch feedback
    transform: [{ scale: 1 }],
  },
  outline: {
    // Remove shadow for outline buttons
    shadowOpacity: 0,
    elevation: 0,
  },
  ghost: {
    // Remove shadow for ghost buttons
    shadowOpacity: 0,
    elevation: 0,
  },
  disabled: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  },
  disabledText: {
    opacity: 0.8,
  },
});
