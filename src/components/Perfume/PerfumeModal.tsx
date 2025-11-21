'use client';

import { WhatsAppIcon } from '@/components/icon/WhatsAppIcon';
import { findPerfumeBySlug, formatPrice, generateWhatsAppURL } from '@/lib/perfume-utils';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export const PerfumeModal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('perfume.modal');
  const locale = useLocale();

  const perfumeSlug = searchParams.get('perfume');
  const selectedPerfume = perfumeSlug ? findPerfumeBySlug(perfumeSlug, locale) : null;
  const isModalOpen = !!selectedPerfume;

  const closeModal = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('perfume');
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.push(newUrl, { scroll: false });
    document.body.style.overflow = 'unset';
  }, [searchParams, router]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen || !selectedPerfume) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999999999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <div className="relative bg-white shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-200 hover:cursor-pointer hover:text-accent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Image Section */}
          <div className="lg:w-1/2 bg-accent/80 relative lg:p-4 shrink-0">
            <div className="relative bg-accent w-full h-96 lg:h-full">
              <Image
                src={selectedPerfume.imagePath}
                alt={selectedPerfume.title}
                fill
                className="object-cover hover:scale-110 transition-all ease-in-out"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 flex flex-col lg:justify-center flex-1 overflow-y-auto min-h-0">
            <div className="space-y-6">
              {/* Price */}
              <p className="text-sm tracking-wider text-accent font-montserrat">
                {formatPrice(selectedPerfume.price)}
              </p>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                {selectedPerfume.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg ">
                {selectedPerfume.description}
              </p>

              {/* Unique Points */}
              <div className="space-y-3">
                {selectedPerfume.uniquePoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Contact Button */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={generateWhatsAppURL(t('whatsappMessage', {
                    title: selectedPerfume.title,
                    price: formatPrice(selectedPerfume.price)
                  }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-primary hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 font-montserrat"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  {t('contactSeller')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};