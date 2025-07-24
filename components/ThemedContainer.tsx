import React from 'react';
import { StyleSheet, type ViewProps } from 'react-native';
import { ThemedView } from './ThemedView';
import { Theme } from '@/constants/Colors';

export type ThemedContainerProps = ViewProps & {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centerContent?: boolean;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedContainer({
  spacing = 'md',
  centerContent = false,
  style,
  children,
  ...rest
}: ThemedContainerProps) {
  const spacingValue = spacing === 'none' ? 0 : Theme.spacing[spacing];
  
  const containerStyle = [
    styles.base,
    {
      padding: spacingValue,
    },
    centerContent && styles.centered,
    style,
  ];

  return (
    <ThemedView style={containerStyle} {...rest}>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
