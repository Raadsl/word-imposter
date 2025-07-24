import { StyleSheet, View, ScrollView, Alert } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedContainer } from '@/components/ThemedContainer';
import { FlipCard } from '@/components/FlipCard';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useSharedValue } from 'react-native-reanimated';
import { getSelectedCategories, getImposterHintSetting } from '@/utils/categoryStorage';
import { getRandomWordFromCategories } from '@/constants/Categories';

export default function GameScreen() {
  const theme = useAppTheme();
  const { playerCount } = useLocalSearchParams<{ playerCount: string }>();
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [startingPlayer, setStartingPlayer] = useState(1);
  const [revealedContent, setRevealedContent] = useState<string | null>(null);
  const [imposter, setImposter] = useState<number | null>(null);
  const [isCardRevealed, setIsCardRevealed] = useState(false);
  const [gamePhase, setGamePhase] = useState<'playing' | 'starting' | 'handoff' | 'ending'>('starting');
  const [wordRevealed, setWordRevealed] = useState(false);
  const [loadingWord, setLoadingWord] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hintEnabled, setHintEnabled] = useState(false);
  const isFlipped = useSharedValue(false);

  const numPlayers = parseInt(playerCount || '4', 10);

  useEffect(() => {
    initializeGame();
  }, [numPlayers]);

  const initializeGame = async () => {
    try {
      // Load selected categories and get random word
      const selectedCategories = await getSelectedCategories();
      const randomWord = getRandomWordFromCategories(selectedCategories);
      
      // Load hint setting
      const hintSetting = await getImposterHintSetting();
      setHintEnabled(hintSetting);
      
      if (!randomWord) {
        // Fallback to a default word if no categories selected
        setCurrentWord('Mystery');
        setSelectedCategory('General');
      } else {
        setCurrentWord(randomWord);
        // Find which category this word belongs to
        const enabledCategories = selectedCategories.filter(cat => cat.enabled);
        const wordCategory = enabledCategories.find(cat => 
          cat.words.includes(randomWord)
        );
        setSelectedCategory(wordCategory?.name || 'General');
      }

      // Set up imposter and starting player
      const randomImposter = Math.floor(Math.random() * numPlayers) + 1;
      setImposter(randomImposter);
      
      // Make the chance of the starting player being the imposter lower
      const randomStartingPlayer = Math.floor(Math.random() * numPlayers) + 1;
      setStartingPlayer(randomStartingPlayer);
      
      if (randomStartingPlayer === randomImposter) {
        // 40% chance to make someone else the imposter
        if (Math.random() < 0.4) {
          const newImposter = (randomImposter % numPlayers) + 1;
          setImposter(newImposter);
        }
      }
    } catch (error) {
      console.error('Error initializing game:', error);
      setCurrentWord('Mystery'); // Fallback word
      setSelectedCategory('General');
    } finally {
      setLoadingWord(false);
    }
  };

  function revealWord(playerNumber: number) {
    setWordRevealed(true);
    if (playerNumber === imposter) {
      if (hintEnabled && selectedCategory) {
        setRevealedContent(`You are the imposter!\nCategory: ${selectedCategory}\nTry to blend in!`);
      } else {
        setRevealedContent(`You are the imposter!\nTry to blend in!`);
      }
    } else {
      setRevealedContent(`The word is:\n${currentWord}`);
    }
    
    isFlipped.value = true;
    setIsCardRevealed(true);
  }

  function endGame() {
    // ask the user to confirm. If platform is web, use confirm dialog
    if (typeof window !== 'undefined') {
      const confirmed = window.confirm('Are you sure you want to end the game?');
      if (confirmed) setGamePhase('ending');
      return; 
    }
    Alert.alert('Confirm', 'Are you sure you want to end the game?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => setGamePhase('ending')},
    ]);
  }

  function handleNextPlayer() {
    setWordRevealed(false);
    isFlipped.value = false;   

    if (currentPlayer < numPlayers) {
      setGamePhase('handoff');
    }
  }

  function confirmHandoff() {
    setCurrentPlayer(currentPlayer + 1);
    isFlipped.value = false;
    setRevealedContent(null);
    setIsCardRevealed(false);
    setGamePhase('starting');
  }

  // Show loading state
  if (loadingWord) {
    return (
      <ThemedContainer centerContent>
        <ThemedText type="title">Preparing Game...</ThemedText>
        <ThemedText style={{ marginTop: 16, textAlign: 'center' }}>
          Loading word categories and setting up the game
        </ThemedText>
      </ThemedContainer>
    );
  }

  // Render handoff screen
  if (gamePhase === 'handoff') {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedContainer spacing="md" style={{ flex: 1, justifyContent: 'center' }}>
          <ThemedView style={styles.handoffContainer}>
            <ThemedText style={{ height: 40, textAlign: 'center', fontSize: 30, paddingTop: 10, marginBottom: 20 }}>
              📱
            </ThemedText>
            <ThemedText style={{ textAlign: 'center' }} type="title">
              Hand Phone to Player {currentPlayer + 1}
            </ThemedText>
            <ThemedText style={{ textAlign: 'center', marginVertical: 20 }} type="subtitle">
              Make sure Player {currentPlayer} has looked away before continuing.
            </ThemedText>
            <ThemedText style={{ textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>
              Player {currentPlayer + 1}, press the button below when you're ready and have the phone.
            </ThemedText>
            
            <ThemedButton
              title={`I'm Player ${currentPlayer + 1} - Continue`}
              variant="primary"
              size="lg"
              onPress={confirmHandoff}
              style={{ marginVertical: theme.spacing.md }}
            />
          </ThemedView>
        </ThemedContainer>
      </ScrollView>
    );
  }

  if (gamePhase === 'playing') {
    return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedContainer spacing="md" style={{ flex: 1, justifyContent: 'center' }}>
          <ThemedView style={styles.handoffContainer}>
            
            <ThemedText type="title">
              Game is on
            </ThemedText>
            <ThemedText type="subtitle">
              <ThemedText type="subtitle" style={{ 
                backgroundColor: theme.colors.highlight, 
                color: theme.colors.highlightText,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4
              }}>Player {startingPlayer}</ThemedText> starts the game.
            </ThemedText>
            <ThemedText style={{ textAlign: 'center' }}>
              The game is now in progress. Time to talk and figure out who the imposter is!
            </ThemedText>


            <ThemedButton
              title="Reveal the Imposter"
              variant="primary"
              size="lg"
              onPress={endGame}
              style={{ marginVertical: theme.spacing.md }}
            />
          </ThemedView>
        </ThemedContainer>
      </ScrollView>
    );
  }

  if (gamePhase === 'ending') {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedContainer spacing="md" style={{ flex: 1, justifyContent: 'center' }}>
          <ThemedView style={styles.handoffContainer}>
            <ThemedText style={{ textAlign: 'center' }} type="title">
              Imposter:
            </ThemedText>
            <ThemedText style={{ textAlign: 'center', color: theme.colors.error, marginBottom: 20 }} type="subtitle">
              Player {imposter} was the imposter!
            </ThemedText>
            <ThemedText style={{ textAlign: 'center' }} type="title">
              Word:
            </ThemedText>
            <ThemedText style={{ textAlign: 'center' }} type="subtitle">
              {currentWord}
            </ThemedText>
            <ThemedButton
              title="New Game"
              variant="primary"
              size="lg"
              onPress={() => {
                // Reset game state and initialize new game
                setGamePhase('starting');
                setCurrentPlayer(1);
                setRevealedContent(null);
                setIsCardRevealed(false);
                setWordRevealed(false);
                isFlipped.value = false;
                setLoadingWord(true);
                initializeGame();
              }}
              style={{ marginVertical: theme.spacing.md }}
            />
            
          </ThemedView>
        </ThemedContainer>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
    <ThemedContainer spacing="md" style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <ThemedView style={styles.gameContainer}>
          <ThemedText id="main-text" style={{ textAlign: 'center' }} type="title">
            You are player {currentPlayer} of {numPlayers}
          </ThemedText>
            <ThemedText style={{ textAlign: 'center' }} type="subtitle">
            Do not show the phone to any other players!
            </ThemedText>
               <FlipCard
                 isFlipped={isFlipped}
                 FlippedContent={<ThemedText style={{ textAlign: 'center', fontSize: 18 }}>{revealedContent}</ThemedText>}
                 RegularContent={<ThemedText style={{ textAlign: 'center' }}>Press the button to see your word</ThemedText>}
                 isImposter={imposter !== null && currentPlayer === imposter}
               />
            
            {!isCardRevealed ? (
              <ThemedButton
                  title="Reveal My Word"
                  variant="primary"
                  size="lg"
                  onPress={() => revealWord(currentPlayer)}
                  style={{ marginVertical: theme.spacing.md }}
              />
            ) : (
              <ThemedButton
                  title="Hide Word"
                  variant="success"
                  size="lg"
                  onPress={() => {
                    isFlipped.value = false;
                    setRevealedContent(null);
                    setIsCardRevealed(false);
                  }}
                  style={{ marginVertical: theme.spacing.md }}
              />
            )}
        </ThemedView>
      </View>

      {/* Navigation buttons */}
      <View style={styles.navigationContainer}>
        
        {currentPlayer < numPlayers && wordRevealed && (
          <ThemedButton
            title="Ready to Pass Phone"
            variant="secondary"
            size="md"
            onPress={handleNextPlayer}
          />
        )}
        
        {currentPlayer === numPlayers && wordRevealed && (
          <ThemedButton
            title="Start Game"
            variant="primary"
            onPress={() => {
              // Navigate to game play or results
              setGamePhase('playing');
              isFlipped.value = false;
            }}
          />
        )}
      </View>


    </ThemedContainer>
    </ScrollView>
  );
}

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
    gameContainer: {
        marginBottom: 20,
        padding: 20,
    },
    handoffContainer: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 400,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        gap: 10,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
