import { useColorScheme } from 'react-native';
import { Colors, Theme } from '@/constants/Colors';

export function useAppTheme() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return {
    colors,
    spacing: Theme.spacing,
    borderRadius: Theme.borderRadius,
    typography: Theme.typography,
    shadows: Theme.shadows,
    isDark: colorScheme === 'dark',
    isLight: colorScheme === 'light',
  };
}

// Utility function to create consistent styles
export function createThemedStyles(stylesFn: (theme: ReturnType<typeof useAppTheme>) => any) {
  return (theme: ReturnType<typeof useAppTheme>) => stylesFn(theme);
}
