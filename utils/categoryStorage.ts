import AsyncStorage from '@react-native-async-storage/async-storage';
import { Category, DEFAULT_CATEGORIES } from '@/constants/Categories';

const CATEGORIES_STORAGE_KEY = '@WordImposter:categories';
const HINT_SETTING_STORAGE_KEY = '@WordImposter:giveImposterHint';

export async function getSelectedCategories(): Promise<Category[]> {
  try {
    const stored = await AsyncStorage.getItem(CATEGORIES_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Return default categories if none stored
    return DEFAULT_CATEGORIES;
  } catch (error) {
    console.error('Error loading categories:', error);
    return DEFAULT_CATEGORIES;
  }
}

export async function saveSelectedCategories(categories: Category[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
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
