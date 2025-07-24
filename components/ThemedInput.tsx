import React from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'caption';
};

export function ThemedInput({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedInputProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const backgroundColor = useThemeColor({}, 'background');
    const borderColor = useThemeColor({}, 'border');
    const linkColor = useThemeColor({}, 'link');

    return (
        <TextInput
            style={[
                { color, backgroundColor, borderColor },
                styles.base,
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? [styles.link, { color: linkColor }] : undefined,
                type === 'caption' ? styles.caption : undefined,
                style,
            ]}
            placeholderTextColor={color}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    base: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
    },
    caption: {
        fontSize: 12,
        lineHeight: 16,
        color: 'gray',
    },
});