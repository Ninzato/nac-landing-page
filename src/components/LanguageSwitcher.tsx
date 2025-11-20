'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'id' ? 'en' : 'id';
    if (!pathname) return;

    router.push(pathname, {locale: newLocale});
  };

  return (
    <button
      onClick={toggleLanguage}
      className=""
      aria-label="Switch language"
    >
      <span className="iconify lucide--globe size-4"></span>
      {locale === 'id' ? 'ID' : 'EN'}
    </button>
  );
}
