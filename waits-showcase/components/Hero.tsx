import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white">
      <Image
        src="/images/hero.jpg"
        alt="The Waits Album Showcase"
        fill
        className="object-cover -z-10 brightness-50"
      />
      <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">{t('title')}</h1>
      <p className="text-lg md:text-2xl mb-8">{t('subtitle')}</p>
      <Link
        href="https://tix.to/THEWAITSAlbumShowcase"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
      >
        {t('getTickets')}
      </Link>
    </section>
  );
}
