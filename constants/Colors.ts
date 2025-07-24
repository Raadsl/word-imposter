/**
 * Word Imposter App Theme - Extended color palette and design tokens
 * Includes colors, spacing, typography, and component styles for consistent theming
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

// Word Imposter brand colors
const brandPrimary = '#18667e';
const brandSecondary = '#A1CEDC';
const brandAccent = '#2E8B57';
const brandWarning = '#FF6B35';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    // Word Imposter specific colors
    primary: brandPrimary,
    secondary: brandSecondary,
    accent: brandAccent,
    warning: brandWarning,
    surface: '#f8f9fa',
    border: '#e1e5e9',
    success: '#28a745',
    error: '#dc3545',
    // Additional colors for better theming
    link: '#0a7ea4',
    highlight: '#ffd700',
    highlightText: '#000000',
    imposterBackground: '#ff6b6b',
    imposterText: '#ffffff',
    cardBackground: '#b6cff7',
    cardText: '#001a72',
    flippedCardBackground: '#baeee5',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    // Word Imposter specific colors
    primary: '#64B5F6',  // Better contrast blue for dark mode
    secondary: '#37474F',
    accent: '#4CAF50',   // Better green for dark mode
    warning: '#FF8A65',
    surface: '#2c3e50',
    border: '#495057',
    success: '#4CAF50',
    error: '#F48FB1',    // Better pink/red for dark mode
    // Additional colors for better theming
    link: '#64B5F6',     // Same as primary for consistency
    highlight: '#FFA726', // Orange highlight for dark mode
    highlightText: '#000000',
    imposterBackground: '#E57373', // Softer red for dark mode
    imposterText: '#000000',
    cardBackground: '#455A64',     // Dark blue-gray
    cardText: '#E3F2FD',          // Light blue text
    flippedCardBackground: '#4CAF50', // Green background
  },
};

// Design tokens for consistent spacing and typography
export const Theme = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    round: 50,
  },
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      xxl: 32,
    },
    fontWeight: {
      normal: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};
