import { PerfumeCatalogDataId, PerfumeCatalog } from '@/data/perfume/Catalog';

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const findPerfumeBySlug = (slug: string) => {
  return PerfumeCatalogDataId.find(perfume =>
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

export const generateWhatsAppURL = (perfume: PerfumeCatalog, sellerPhone: string = '6281234567890') => {
  const message = `Halo! Saya tertarik dengan parfum ${perfume.title} seharga ${formatPrice(perfume.price)}. Bisakah Anda memberikan informasi lebih lanjut mengenai produk ini?`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${sellerPhone}?text=${encodedMessage}`;

  return whatsappURL;
};