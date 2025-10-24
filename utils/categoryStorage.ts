import { Category, DEFAULT_CATEGORIES, Language } from '@/constants/Categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LANGUAGE_STORAGE_KEY = '@WordImposter:language';
export async function getLanguageSetting(): Promise<Language> {
  try {
    const stored = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === 'nl' || stored === 'en') return stored;
    return 'en';
  } catch {
    return 'en';
  }
}

export async function saveLanguageSetting(lang: Language): Promise<void> {
  try {
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {}
}

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
      cat.id === 'custom-words'
        ? { ...cat, words: { en: customWords, nl: customWords } }
        : cat
    );

    // Merge updates from DEFAULT_CATEGORIES when the default set changed (for example when
    // new words or a bumped `version` were added in the app). This ensures users who
    // already have stored categories still receive content updates without needing to
    // explicitly reset to defaults.
    const storedById = new Map(categories.map(c => [c.id, c]));

    function compareVersions(a?: string | null, b?: string | null) {
      if (!a && !b) return 0;
      if (!a) return -1;
      if (!b) return 1;
      const pa = a.split('.').map(n => parseInt(n, 10) || 0);
      const pb = b.split('.').map(n => parseInt(n, 10) || 0);
      for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const na = pa[i] || 0;
        const nb = pb[i] || 0;
        if (na > nb) return 1;
        if (na < nb) return -1;
      }
      return 0;
    }

    // Walk defaults and merge in any new/updated categories
    const merged = DEFAULT_CATEGORIES.reduce<Category[]>((acc, def) => {
      const storedCat = storedById.get(def.id);
      if (!storedCat) {
        // New category added in defaults -> include it
        acc.push(def);
        return acc;
      }

      // If default has a version and it's newer than stored, update words & metadata
      if (def.version && compareVersions(def.version, storedCat.version) > 0) {
        acc.push({
          ...storedCat,
          // preserve user's enabled setting, but update words and metadata from defaults
          enabled: storedCat.enabled,
          words: def.words,
          version: def.version,
          name: def.name,
          emoji: def.emoji,
          author: def.author,
        });
      } else {
        // keep stored category as-is
        acc.push(storedCat);
      }
      return acc;
    }, []);

    // If there are any stored categories that aren't present in DEFAULT_CATEGORIES
    // (user added custom ones), append them as well
    const defaultIds = new Set(DEFAULT_CATEGORIES.map(d => d.id));
    for (const cat of categories) {
      if (!defaultIds.has(cat.id)) merged.push(cat);
    }

    // Persist merged result if it differs from what was loaded so future reads get the updates
    try {
      const mergedJson = JSON.stringify(merged);
      const loadedJson = JSON.stringify(categories);
      if (mergedJson !== loadedJson) {
        await AsyncStorage.setItem(CATEGORIES_STORAGE_KEY, mergedJson);
      }
    } catch (err) {
      // ignore persistence errors here
    }

    return merged;
  } catch (error) {
    console.error('Error loading categories:', error);
    // Fallback: update custom-words in default categories
    const customWords = await getCustomWords();
    return DEFAULT_CATEGORIES.map(cat =>
      cat.id === 'custom-words'
        ? { ...cat, words: { en: customWords, nl: customWords } }
        : cat
    );
  }
}

export async function saveSelectedCategories(categories: Category[]): Promise<void> {
  try {
    // If custom-words category is present, update its words property with the latest custom words
    const customWords = await getCustomWords();
    const updatedCategories = categories.map(cat =>
      cat.id === 'custom-words'
        ? { ...cat, words: { en: customWords, nl: customWords } }
        : cat
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