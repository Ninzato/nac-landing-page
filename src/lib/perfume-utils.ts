import { PerfumeCatalogDataId, PerfumeCatalogDataEng, PerfumeCatalog } from '@/data/perfume/Catalog';

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const findPerfumeBySlug = (slug: string, locale: string = 'id') => {
  const perfumeData = locale === 'en' ? PerfumeCatalogDataEng : PerfumeCatalogDataId;
  return perfumeData.find(perfume =>
    generateSlug(perfume.title) === slug
  );
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const generateWhatsAppURL = (perfume: PerfumeCatalog, whatsappMessage: string, sellerPhone: string = '6281234567890') => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappURL = `https://wa.me/${sellerPhone}?text=${encodedMessage}`;

  return whatsappURL;
};