import { ThemedButton } from '@/components/ThemedButton';
import { ThemedContainer } from '@/components/ThemedContainer';
import { ThemedInput } from '@/components/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Category, Language } from '@/constants/Categories';
import { useAppTheme } from '@/hooks/useAppTheme';
import { addCustomWord, getCustomWords, getImposterHintSetting, getLanguageSetting, getSelectedCategories, resetCategoriesToDefault, saveCustomWords, saveImposterHintSetting, saveLanguageSetting, toggleCategory } from '@/utils/categoryStorage';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';

import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
export default function SettingsScreen() {
  const theme = useAppTheme();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [customText, setCustomText] = useState('');
  const [customWords, setCustomWords] = useState<string[]>([]);
  const [giveImposterHint, setGiveImposterHint] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const bottomSheetRef = useRef<BottomSheet>(null);

  // Bottom sheet snap points
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleOpenCustomWords = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCloseCustomWords = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleCloseCustomWordsAndSave = useCallback(() => {
    // Logic to save custom words can be added here
    bottomSheetRef.current?.close();
  }, []);

  const loadCustomWords = async () => {
    const words = await getCustomWords();
    setCustomWords(words);
  }

  useEffect(() => {
    loadCustomWords();
    loadCategories();
    loadHintSetting();
    loadLanguageSetting();
  }, []);

  const loadLanguageSetting = async () => {
    try {
      const lang = await getLanguageSetting();
      if (lang === 'en' || lang === 'nl') setLanguage(lang);
    } catch (error) {
      // fallback to 'en'
    }
  };
  const handleLanguageSwitch = async (lang: Language) => {
    setLanguage(lang);
    await saveLanguageSetting(lang);
  };

  const loadCategories = async () => {
    try {
      const savedCategories = await getSelectedCategories();
      setCategories(savedCategories);
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadHintSetting = async () => {
    try {
      const hintSetting = await getImposterHintSetting();
      setGiveImposterHint(hintSetting);
    } catch (error) {
      console.error('Error loading hint setting:', error);
    }
  };

  const handleToggleCategory = async (categoryId: string) => {
    try {
      const updatedCategories = await toggleCategory(categoryId);
      setCategories(updatedCategories);
    } catch (error) {
      console.error('Error toggling category:', error);
    }
  };

  const handleResetCategories = async () => {
    try {
      const defaultCategories = await resetCategoriesToDefault();
      setCategories(defaultCategories);
    } catch (error) {
      console.error('Error resetting categories:', error);
    }
  };

  const handleToggleHint = async (enabled: boolean) => {
    try {
      await saveImposterHintSetting(enabled);
      setGiveImposterHint(enabled);
    } catch (error) {
      console.error('Error saving hint setting:', error);
    }
  };

  const handleAddCustomWord = async () => {
    if (customText.trim() === '') return;
    if (customWords.includes(customText.trim())) {
      if (typeof window !== 'undefined') {
        const confirmed = window.alert('This word already exists in your custom words list.');
        return;
      }
      Alert.alert('Duplicate Word', 'This word already exists in your custom words list.', [
        { text: 'OK', style: 'cancel' }
      ]);
      return;
    }
    try {
      await addCustomWord(customText.trim());
      setCustomText('');
      loadCustomWords();
    } catch (error) {
      console.error('Error adding custom word:', error);
    }
  };

  const handleRemoveCustomWord = async (word: string) => {
    try {
      const updatedWords = customWords.filter(w => w !== word);
      await saveCustomWords(updatedWords);
      setCustomWords(updatedWords);
    } catch (error) {
      console.error('Error removing custom word:', error);
    }
  };

  const handleResetCustomWords = async () => {
    try {
      await saveCustomWords([]);
      setCustomWords([]);
    } catch (error) {
      console.error('Error resetting custom words:', error);
    }
  };

  const enabledCount = categories.filter(cat => cat.enabled).length;
  const totalWords = categories
    .filter(cat => cat.enabled)
    .reduce((sum, cat) => sum + (cat.words[language]?.length || 0), 0);


  if (loading) {
    return (
      <ThemedContainer centerContent>
        <ThemedText type="title">Loading Settings...</ThemedText>
      </ThemedContainer>
    );
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedContainer spacing="md" style={{ flex: 1 }}>
          <ThemedView style={styles.headerContainer}>
            <ThemedText type="title" style={{ textAlign: 'center' }}>
              Word Categories
            </ThemedText>
            <ThemedText type="subtitle" style={{ textAlign: 'center', marginTop: 8 }}>
              Choose which categories to include in the game
            </ThemedText>
            {/* Language Switch */}
            <ThemedView style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
              <ThemedButton
                title="English"
                variant={language === 'en' ? 'primary' : 'outline'}
                size="sm"
                onPress={() => handleLanguageSwitch('en')}
                style={{ marginRight: 8 }}
              />
              <ThemedButton
                title="Nederlands"
                variant={language === 'nl' ? 'primary' : 'outline'}
                size="sm"
                onPress={() => handleLanguageSwitch('nl')}
              />
            </ThemedView>
            <ThemedView style={[styles.statsContainer, { backgroundColor: theme.colors.surface }]}> 
              <ThemedText style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {enabledCount} categories enabled
              </ThemedText>
              <ThemedText style={{ textAlign: 'center', marginTop: 2 }}>
                Words available: <ThemedText style={{ fontWeight: 'bold' }}>{totalWords}</ThemedText> ({language === 'en' ? 'English' : 'Nederlands'})
              </ThemedText>
            </ThemedView>
          </ThemedView>

          {/* Game Settings Section */}
          <ThemedView style={[styles.sectionContainer, { backgroundColor: theme.colors.surface }]}>
            <ThemedText type="title" style={{ textAlign: 'center', marginBottom: 16 }}>
              Game Settings
            </ThemedText>
            
            <ThemedView style={[styles.categoryItem, { backgroundColor: theme.colors.background }]}>
              <ThemedView style={styles.categoryInfo}>
                <ThemedText type="subtitle">Give Imposter a Hint</ThemedText>
                <ThemedText style={{ color: theme.colors.icon, fontSize: 14 }}>
                  The imposter gets a category hint instead of "blend in"
                </ThemedText>
              </ThemedView>
              <Switch
                value={giveImposterHint}
                onValueChange={handleToggleHint}
                trackColor={{ 
                  false: theme.colors.surface, 
                  true: theme.colors.primary + '40' 
                }}
                thumbColor={giveImposterHint ? theme.colors.primary : theme.colors.icon}
              />
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.categoriesContainer}>
            {categories.map((category) => {
              const isCustom = category.id === 'custom-words';
              const countCurrent = isCustom ? customWords.length : (category.words[language]?.length || 0);
              return (
                <View key={category.id} style={[styles.categoryItem, { backgroundColor: theme.colors.surface }]}> 
                  <View style={styles.categoryInfo}>
                    <ThemedText type="subtitle">{category.name}</ThemedText>
                    <ThemedText style={{ color: theme.colors.icon, fontSize: 14 }}>
                      {countCurrent} words
                    </ThemedText>
                  </View>
                  <Switch
                    value={category.enabled}
                    onValueChange={() => handleToggleCategory(category.id)}
                    trackColor={{ 
                      false: theme.colors.surface, 
                      true: theme.colors.primary + '40' 
                    }}
                    thumbColor={category.enabled ? theme.colors.primary : theme.colors.icon}
                  />
                </View>
              );
            })}
          </ThemedView>

          {enabledCount === 0 && (
            <ThemedView style={[styles.warningContainer, { backgroundColor: theme.colors.error + '20' }]}>
              <ThemedText style={{ color: theme.colors.error, textAlign: 'center' }}>
                ⚠️ No categories selected! Please enable at least one category to play.
              </ThemedText>
            </ThemedView>
          )}

          <ThemedView style={styles.buttonContainer}>
             <ThemedButton
              title="Edit Custom Words"
              variant="secondary"
              size="md"
              onPress={handleOpenCustomWords}
              style={{ marginBottom: theme.spacing.md }}
            />
            <ThemedButton
              title="Reset to Defaults"
              variant="secondary"
              size="md"
              onPress={handleResetCategories}
              style={{ marginBottom: theme.spacing.md }}
            />
          </ThemedView>
          <ThemedText type="caption" style={{ textAlign: 'center', marginTop: 16 }}>
            Made with ❤️ by Jorik
          </ThemedText>
        </ThemedContainer>
      </ScrollView>
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
              Custom Words
            </ThemedText>
            <TouchableOpacity onPress={handleCloseCustomWords}>
              <ThemedText style={{ color: theme.colors.primary, fontSize: 18 }}>✕</ThemedText>
            </TouchableOpacity>
          </View>
          <ThemedText type="subtitle" style={{ marginBottom: 16 }}>
            Edit your custom words here. You can add, remove, or modify words to create your own categories.
          </ThemedText>
          <ThemedView style={styles.bottomSheetContainer}>
            <ThemedText type="subtitle" style={{ marginBottom: 8 }}>
              Custom Words List
            </ThemedText>
            <ScrollView>
              {customWords.map((word, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4, borderWidth: 1, borderColor: theme.colors.border, padding: 8, borderRadius: 8 }}>
                  <ThemedText style={{ flex: 1 }}>{word}</ThemedText>
                  <TouchableOpacity style={{ marginLeft: 8 }} onPress={() => handleRemoveCustomWord(word)}>
                    <ThemedText style={{ color: theme.colors.error, fontWeight: 'bold', fontSize: 18 }}>✕</ThemedText>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <ThemedInput
              placeholder="Add a new word"
              value={customText}
              onChangeText={setCustomText}
              style={{ marginTop: 16, marginBottom: 8 }}
            />
            <ThemedButton
              title="Add Word"
              variant="secondary"
              size="md"
              onPress={handleAddCustomWord}
              style={{ marginBottom: 10 }}
            />
            <ThemedButton
              title="Remove all Custom Words"
              variant="outline"
              size="md"
              onPress={handleResetCustomWords}
              style={{ marginBottom: 16 }}
            />
          </ThemedView>

          <ThemedText type="caption" style={{ marginTop: 16, textAlign: 'center' }}>
            Custom words will only be used if the "Custom Words" category is enabled in the main settings, the words are automatically updated and there is no need to save changes.
          </ThemedText>

          <ThemedButton
            title="Close"
            variant="primary"
            size="lg"
            onPress={handleCloseCustomWordsAndSave}
            style={{ marginTop: 24, marginBottom: 40 }}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  statsContainer: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
  },
  sectionContainer: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
  },
  categoriesContainer: {
    flex: 1,
    padding: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
  },
  categoryInfo: {
    flex: 1,
  },
  warningContainer: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    padding: 20,
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
