export const languages = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const languageList = Object.keys(languages) as Lang[];

export function isLang(value: string | undefined): value is Lang {
  return Boolean(value && value in languages);
}
