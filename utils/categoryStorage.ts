import AsyncStorage from '@react-native-async-storage/async-storage';
import { Category, DEFAULT_CATEGORIES } from '@/constants/Categories';

const CATEGORIES_STORAGE_KEY = '@WordImposter:categories';
const HINT_SETTING_STORAGE_KEY = '@WordImposter:giveImposterHint';
const CUSTOM_WORDS_STORAGE_KEY = '@WordImposter:customWords';

export async function getSelectedCategories(): Promise<Category[]> {
  try {
    const stored = await AsyncStorage.getItem(CATEGORIES_STORAGE_KEY);
    const customWords = await getCustomWords();
    let categories: Category[];
    if (stored) {
      categories = JSON.parse(stored);
    } else {
      categories = DEFAULT_CATEGORIES;
    }
    // Always update custom-words category with latest custom words
    categories = categories.map(cat =>
      cat.id === 'custom-words' ? { ...cat, words: customWords } : cat
    );
    return categories;
  } catch (error) {
    console.error('Error loading categories:', error);
    // Fallback: update custom-words in default categories
    const customWords = await getCustomWords();
    return DEFAULT_CATEGORIES.map(cat =>
      cat.id === 'custom-words' ? { ...cat, words: customWords } : cat
    );
  }
}

export async function saveSelectedCategories(categories: Category[]): Promise<void> {
  try {
    // If custom-words category is present, update its words property with the latest custom words
    const customWords = await getCustomWords();
    const updatedCategories = categories.map(cat =>
      cat.id === 'custom-words' ? { ...cat, words: customWords } : cat
    );
    await AsyncStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(updatedCategories));
  } catch (error) {
    console.error('Error saving categories:', error);
  }
}

export async function toggleCategory(categoryId: string): Promise<Category[]> {
  try {
    const categories = await getSelectedCategories();
    const updatedCategories = categories.map(cat => 
      cat.id === categoryId ? { ...cat, enabled: !cat.enabled } : cat
    );
    await saveSelectedCategories(updatedCategories);
    return updatedCategories;
  } catch (error) {
    console.error('Error toggling category:', error);
    return await getSelectedCategories();
  }
}

export async function resetCategoriesToDefault(): Promise<Category[]> {
  try {
    await saveSelectedCategories(DEFAULT_CATEGORIES);
    return DEFAULT_CATEGORIES;
  } catch (error) {
    console.error('Error resetting categories:', error);
    return DEFAULT_CATEGORIES;
  }
}

// Hint setting functions
export async function getImposterHintSetting(): Promise<boolean> {
  try {
    const stored = await AsyncStorage.getItem(HINT_SETTING_STORAGE_KEY);
    return stored ? JSON.parse(stored) : false; // Default to false
  } catch (error) {
    console.error('Error loading hint setting:', error);
    return false;
  }
}

export async function saveImposterHintSetting(enabled: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(HINT_SETTING_STORAGE_KEY, JSON.stringify(enabled));
  } catch (error) {
    console.error('Error saving hint setting:', error);
  }
}

export async function getCustomWords(): Promise<string[]> {
  try {
    const stored = await AsyncStorage.getItem(CUSTOM_WORDS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading custom words:', error);
    return [];
  }
}

export async function saveCustomWords(words: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CUSTOM_WORDS_STORAGE_KEY, JSON.stringify(words));
    // Update categories so custom-words category is synced
    const categories = await getSelectedCategories();
    await saveSelectedCategories(categories);
  } catch (error) {
    console.error('Error saving custom words:', error);
  }
}

export async function addCustomWord(word: string): Promise<void> {
  try {
    const words = await getCustomWords();
    if (!words.includes(word)) {
      words.push(word);
      await saveCustomWords(words);
    }
  } catch (error) {
    console.error('Error adding custom word:', error);
  }
}