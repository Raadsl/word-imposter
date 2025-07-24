import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image } from 'expo-image';

import InputSpinner from "react-native-input-spinner";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedContainer } from '@/components/ThemedContainer';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useRef, useState, useCallback, useMemo } from 'react';
import { router } from 'expo-router';
import { Theme } from '@/constants/Colors';

import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';

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
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bottomSheetContent: {
    flex: 1,
    padding: 24,
  },
  howToPlayButton: {
    padding: 8,
    borderRadius: 8,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  ruleNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  ruleText: {
    flex: 1,
    lineHeight: 20,
  },
  sectionTitle: {
    marginBottom: 16,
    marginTop: 8,
  },
  tipContainer: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },

});


export default function SetupScreen() {
  const theme = useAppTheme();
  const [playerCount, setPlayerCount] = useState(4); 
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Bottom sheet snap points
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleOpenHowToPlay = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCloseHowToPlay = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <ThemedView style={{ flex: 1 }}>
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
          <ThemedView style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <TouchableOpacity 
              onPress={handleOpenHowToPlay}
              style={[styles.howToPlayButton, { backgroundColor: theme.colors.surface }]}
            >
              <ThemedText type='subtitle' style={{ textAlign: 'center', color: theme.colors.primary }}>
                How to play?
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedContainer>
      </ParallaxScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: theme.colors.background }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.border }}
      >
        <BottomSheetScrollView style={styles.bottomSheetContent} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <ThemedText type="title" style={{ color: theme.colors.primary }}>
              How to Play
            </ThemedText>
            <TouchableOpacity onPress={handleCloseHowToPlay}>
              <ThemedText style={{ color: theme.colors.primary, fontSize: 18 }}>✕</ThemedText>
            </TouchableOpacity>
          </View>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: theme.colors.text }]}> 
            🎯 Objective
          </ThemedText>
          <ThemedText style={[styles.ruleText, { color: theme.colors.text, marginBottom: 20 }]}> 
            Find the imposter among the players! Everyone gets the same word except one person who doesn't know the word (the imposter).
          </ThemedText>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: theme.colors.text }]}> 
            📋 Game Rules
          </ThemedText>
          <View style={styles.ruleItem}>
            <View style={[styles.ruleNumber, { backgroundColor: theme.colors.primary }]}> 
              <ThemedText style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>1</ThemedText>
            </View>
            <ThemedText style={[styles.ruleText, { color: theme.colors.text }]}> 
              <ThemedText style={{ fontWeight: 'bold' }}>Setup:</ThemedText> Choose the number of players (3-12) and start the game, but keep in mind that not more than 6 players are recommended for a smooth experience.
            </ThemedText>
          </View>
          <View style={styles.ruleItem}>
            <View style={[styles.ruleNumber, { backgroundColor: theme.colors.primary }]}> 
              <ThemedText style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>2</ThemedText>
            </View>
            <ThemedText style={[styles.ruleText, { color: theme.colors.text }]}> 
              <ThemedText style={{ fontWeight: 'bold' }}>View Words:</ThemedText> Each player secretly views their word one by one and passes the phone to the next person. Don't let others see your word!
            </ThemedText>
          </View>
          <View style={styles.ruleItem}>
            <View style={[styles.ruleNumber, { backgroundColor: theme.colors.primary }]}> 
              <ThemedText style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>3</ThemedText>
            </View>
            <ThemedText style={[styles.ruleText, { color: theme.colors.text }]}> 
              <ThemedText style={{ fontWeight: 'bold' }}>Discussion:</ThemedText> When everyone has seen their word, players take turns describing their word using hints, clues, or related words (without saying the actual word).
            </ThemedText>
          </View>
          <View style={styles.ruleItem}>
            <View style={[styles.ruleNumber, { backgroundColor: theme.colors.primary }]}> 
              <ThemedText style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>4</ThemedText>
            </View>
            <ThemedText style={[styles.ruleText, { color: theme.colors.text }]}> 
              <ThemedText style={{ fontWeight: 'bold' }}>Find the Imposter:</ThemedText> Listen carefully to everyone's descriptions and try to identify who doesn't know the word. Continue until someone thinks they have found the imposter.
            </ThemedText>
          </View>
          <View style={styles.ruleItem}>
            <View style={[styles.ruleNumber, { backgroundColor: theme.colors.primary }]}> 
              <ThemedText style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>5</ThemedText>
            </View>
            <ThemedText style={[styles.ruleText, { color: theme.colors.text }]}> 
              <ThemedText style={{ fontWeight: 'bold' }}>Voting:</ThemedText> After discussion, everyone votes on who they think is the imposter. End the game and the imposter is revealed.
            </ThemedText>
          </View>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: theme.colors.text }]}> 
            🏆 Winning
          </ThemedText>
          <View style={styles.ruleItem}>
            <ThemedText style={{ fontSize: 18, marginRight: 8 }}>👥</ThemedText>
            <ThemedText style={[styles.ruleText, { color: theme.colors.text }]}> 
              <ThemedText style={{ fontWeight: 'bold' }}>Regular Players Win:</ThemedText> If they correctly identify the imposter.
            </ThemedText>
          </View>
          <View style={styles.ruleItem}>
            <ThemedText style={{ fontSize: 18, marginRight: 8 }}>🕵️</ThemedText>
            <ThemedText style={[styles.ruleText, { color: theme.colors.text }]}> 
              <ThemedText style={{ fontWeight: 'bold' }}>Imposter Wins:</ThemedText> If they avoid being detected oand players vote incorrectly.
            </ThemedText>
          </View>
          <View style={styles.tipContainer}>
            <ThemedText style={{ fontWeight: 'bold', color: '#b8860b', marginBottom: 8 }}>
              💡 Pro Tips
            </ThemedText>
            <ThemedText style={{ color: theme.colors.text, lineHeight: 20 }}>
              • <ThemedText style={{ fontWeight: 'bold' }}>For Regulars:</ThemedText> Give specific but not too obvious clues, or else the imposter might find out the real word!{'\n'}
              • <ThemedText style={{ fontWeight: 'bold' }}>For Imposters:</ThemedText> Listen carefully and give vague, general descriptions{'\n'}
              • <ThemedText style={{ fontWeight: 'bold' }}>For Everyone:</ThemedText> Pay attention to who gives suspicious or off-topic clues
            </ThemedText>
          </View>
          <ThemedButton
            title="Got it! Let's Play"
            variant="primary"
            size="lg"
            onPress={handleCloseHowToPlay}
            style={{ marginTop: 24, marginBottom: 40 }}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </ThemedView>
  );
}
