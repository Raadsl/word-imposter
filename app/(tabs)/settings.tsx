import { StyleSheet, View, ScrollView, Switch } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedContainer } from '@/components/ThemedContainer';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useEffect, useState } from 'react';
import { Category } from '@/constants/Categories';
import { getSelectedCategories, saveSelectedCategories, toggleCategory, resetCategoriesToDefault, getImposterHintSetting, saveImposterHintSetting } from '@/utils/categoryStorage';
export default function SettingsScreen() {
  const theme = useAppTheme();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [giveImposterHint, setGiveImposterHint] = useState(false);

  useEffect(() => {
    loadCategories();
    loadHintSetting();
  }, []);

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

  const enabledCount = categories.filter(cat => cat.enabled).length;
  const totalWords = categories
    .filter(cat => cat.enabled)
    .reduce((sum, cat) => sum + cat.words.length, 0);

  if (loading) {
    return (
      <ThemedContainer centerContent>
        <ThemedText type="title">Loading Settings...</ThemedText>
      </ThemedContainer>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <ThemedContainer spacing="md" style={{ flex: 1 }}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText type="title" style={{ textAlign: 'center' }}>
            Word Categories
          </ThemedText>
          <ThemedText type="subtitle" style={{ textAlign: 'center', marginTop: 8 }}>
            Choose which categories to include in the game
          </ThemedText>
          
          <View style={[styles.statsContainer, { backgroundColor: theme.colors.surface }]}>
            <ThemedText style={{ textAlign: 'center' }}>
              {enabledCount} categories enabled • {totalWords} words available
            </ThemedText>
          </View>
        </ThemedView>

        {/* Game Settings Section */}
        <ThemedView style={[styles.sectionContainer, { backgroundColor: theme.colors.surface }]}>
          <ThemedText type="title" style={{ textAlign: 'center', marginBottom: 16 }}>
            Game Settings
          </ThemedText>
          
          <View style={[styles.categoryItem, { backgroundColor: theme.colors.background }]}>
            <View style={styles.categoryInfo}>
              <ThemedText type="subtitle">Give Imposter a Hint</ThemedText>
              <ThemedText style={{ color: theme.colors.icon, fontSize: 14 }}>
                The imposter gets a category hint instead of "blend in"
              </ThemedText>
            </View>
            <Switch
              value={giveImposterHint}
              onValueChange={handleToggleHint}
              trackColor={{ 
                false: theme.colors.surface, 
                true: theme.colors.primary + '40' 
              }}
              thumbColor={giveImposterHint ? theme.colors.primary : theme.colors.icon}
            />
          </View>
        </ThemedView>

        <ThemedView style={styles.categoriesContainer}>
          {categories.map((category) => (
            <View key={category.id} style={[styles.categoryItem, { backgroundColor: theme.colors.surface }]}>
              <View style={styles.categoryInfo}>
                <ThemedText type="subtitle">{category.name}</ThemedText>
                <ThemedText style={{ color: theme.colors.icon, fontSize: 14 }}>
                  {category.words.length} words
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
          ))}
        </ThemedView>

        {enabledCount === 0 && (
          <ThemedView style={[styles.warningContainer, { backgroundColor: theme.colors.error + '20' }]}>
            <ThemedText style={{ color: theme.colors.error, textAlign: 'center' }}>
              ⚠️ No categories selected! Please enable at least one category to play.
            </ThemedText>
          </ThemedView>
        )}

        <View style={styles.buttonContainer}>
          <ThemedButton
            title="Reset to Defaults"
            variant="secondary"
            size="md"
            onPress={handleResetCategories}
            style={{ marginBottom: theme.spacing.md }}
          />
        </View>
      </ThemedContainer>
    </ScrollView>
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
});
