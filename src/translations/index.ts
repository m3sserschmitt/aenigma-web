
import { enTranslations } from './en';
import { roTranslations } from './ro';
import { Language } from '@/types/language';

export const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  ro: roTranslations
};
