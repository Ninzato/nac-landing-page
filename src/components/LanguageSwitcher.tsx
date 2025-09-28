'use client';

import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'id' ? 'en' : 'id';
    const pathname = window.location.pathname;

    // Remove current locale from pathname if it exists
    const pathWithoutLocale = pathname.replace(/^\/(en|id)/, '') || '/';

    // Navigate to new locale
    const newPath = newLocale === 'id' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-ghost btn-sm"
      aria-label="Switch language"
    >
      <span className="iconify lucide--globe size-4"></span>
      {locale === 'id' ? 'EN' : 'ID'}
    </button>
  );
}