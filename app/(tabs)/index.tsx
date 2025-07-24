import { StyleSheet, View, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image } from 'expo-image';

import InputSpinner from "react-native-input-spinner";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedContainer } from '@/components/ThemedContainer';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useState } from 'react';
import { router } from 'expo-router';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.6,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  gameOptionsContainer: {
      marginBottom: 20,
  },
  inputSpinner: {
      elevation: 0,
      boxShadow: 'none',
      borderWidth: 1,
  },

});


export default function SetupScreen() {
  const theme = useAppTheme();
  const [playerCount, setPlayerCount] = useState(4); 


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner.png')}
          style={styles.reactLogo}
        />
      }>
    <ThemedContainer spacing="md" style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <ThemedView>
          <ThemedText style={{ textAlign: 'center' }} type="title">Word Imposter game</ThemedText>
          <ThemedView style={{ borderBottomWidth: 1, borderBottomColor: theme.colors.border, marginVertical: theme.spacing.lg }} />
        </ThemedView>
        
        <ThemedView style={styles.gameOptionsContainer}>
        <ThemedText style={{ textAlign: 'center' }} type="subtitle">Players</ThemedText>
        </ThemedView>
        <ThemedView>
          <InputSpinner
            min={3}
            max={12}
            step={1}
            value={playerCount}
            skin="clean"
            colorMax={theme.colors.primary}
            colorMin={theme.colors.primary}
            colorPress={theme.colors.primary}
            onChange={(num: number) => setPlayerCount(num)}
            style={styles.inputSpinner}
          />
        </ThemedView>
      </View>

      <ThemedButton
        title="Start game"
        variant="primary"
        size="lg"
        onPress={() => router.push({
            pathname: '/game',
            params: { playerCount }
        })}
        style={{ marginVertical: theme.spacing.md }}
      />

    </ThemedContainer>
    </ParallaxScrollView>
  );
}
