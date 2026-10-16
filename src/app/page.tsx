import Link from 'next/link';
import {
  Calendar,
  Car,
  Crosshair,
  Download,
  ListChecks,
  MapPin,
  MonitorSmartphone,
  ShoppingCart,
  Swords,
} from 'lucide-react';
import { AdSlot } from '@/components/site/AdSlot';
import { Countdown } from '@/components/content/Countdown';
import { Timeline } from '@/components/content/Timeline';
import { JsonLd } from '@/components/seo/JsonLd';
import { gameFacts, keyFacts, launchTimeline } from '@/data/game';
import { siteConfig } from '@/lib/seo';

const sectionCards = [
  {
    href: '/release-date',
    title: 'Release Date & Timeline',
    description: 'Every official date from announcement to launch day — and what changed along the way.',
    icon: Calendar,
  },
  {
    href: '/pc-release',
    title: 'PC Release Tracker',
    description: 'No PC version at launch. Track the signals and compare Rockstar’s historical pattern.',
    icon: MonitorSmartphone,
  },
  {
    href: '/preorder',
    title: 'Pre-Order Guide',
    description: 'Standard vs Ultimate editions, the Vintage Vice City Pack, and where to buy.',
    icon: ShoppingCart,
  },
  {
    href: '/preload',
    title: 'Preload Guide',
    description: 'Pre-load starts November 12, 2026. Step-by-step prep for PS5 and Xbox Series X|S.',
    icon: Download,
  },
  {
    href: '/vehicles',
    title: 'Vehicles Database',
    description: 'Every vehicle confirmed or seen in official trailers — stats land at launch.',
    icon: Car,
  },
  {
    href: '/missions',
    title: 'Missions Database',
    description: 'Spoiler-safe mission list, going live on launch day.',
    icon: Swords,
  },
  {
    href: '/locations',
    title: 'Locations Guide',
    description: 'Vice City and the state of Leonida — every named region so far.',
    icon: MapPin,
  },
  {
    href: '/weapons',
    title: 'Weapons Database',
    description: 'The confirmed arsenal, category by category.',
    icon: Crosshair,
  },
  {
    href: '/100-checklist',
    title: '100% Completion Checklist',
    description: 'Interactive tracker for completionists — progress saved in your browser.',
    icon: ListChecks,
  },
] as const;

const videoGameJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Grand Theft Auto VI',
  alternateName: 'GTA 6',
  releaseDate: '2026-11-19',
  gamePlatform: ['PlayStation 5', 'Xbox Series X|S'],
  publisher: { '@type': 'Organization', name: 'Rockstar Games' },
  developer: { '@type': 'Organization', name: 'Rockstar Games' },
  genre: ['Action-adventure'],
  offers: [
    { '@type': 'Offer', name: 'Standard Edition', price: '79.99', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Ultimate Edition', price: '99.99', priceCurrency: 'USD' },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={videoGameJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60">
        <div aria-hidden className="hero-sun absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-30" />
        <div aria-hidden className="hero-grid-floor absolute inset-x-0 bottom-0 h-72" />
        <div className="relative mx-auto max-w-content px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-neon-pink">
            Unofficial fan hub · {gameFacts.releaseDate}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl">
            GTA 6: Countdown to <span className="text-sunset">Vice City</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {gameFacts.title} launches on {gameFacts.releaseDate} for{' '}
            {gameFacts.platforms.join(' and ')}. Everything you need before launch day —
            dates, pre-order details, databases and tools — tracked in one place.
          </p>

          <div className="mt-10 flex justify-center">
            <Countdown />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
            <span className="rounded-full border border-line bg-surface px-4 py-1.5 font-semibold text-white">
              {gameFacts.releaseDate}
            </span>
            <span className="rounded-full border border-line bg-surface px-4 py-1.5 font-semibold text-white">
              {gameFacts.platforms.join(' · ')}
            </span>
            <span className="rounded-full border border-line bg-surface px-4 py-1.5 font-semibold text-white">
              From {gameFacts.priceStandard}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/preorder"
              className="rounded-xl bg-neon-pink px-6 py-3 font-bold text-ink transition hover:shadow-glow-pink"
            >
              Pre-Order Guide
            </Link>
            <Link
              href="/release-date"
              className="rounded-xl border border-line bg-surface px-6 py-3 font-bold text-white transition hover:border-neon-cyan/60 hover:shadow-glow-cyan"
            >
              Full Timeline
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <AdSlot variant="banner" className="mt-10" />

        {/* Key facts */}
        <section className="mt-12" aria-label="Key facts">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyFacts.map((fact) => (
              <Link key={fact.label} href={fact.href} className="card card-hover p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-neon-purple">
                  {fact.label}
                </p>
                <p className="mt-2 text-xl font-black text-white">{fact.value}</p>
                <p className="mt-1 text-sm text-mist">{fact.note}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section cards */}
        <section className="mt-14" aria-label="Site sections">
          <h2 className="text-2xl font-bold tracking-tight text-white">Explore the hub</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectionCards.map((card) => (
              <Link key={card.href} href={card.href} className="card card-hover group p-5">
                <card.icon className="h-6 w-6 text-neon-cyan" aria-hidden />
                <h3 className="mt-3 font-bold text-white group-hover:text-neon-cyan">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">{card.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Timeline preview */}
        <section className="mt-14" aria-label="Timeline preview">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white">Road to launch</h2>
            <Link href="/release-date" className="text-sm font-semibold text-neon-cyan hover:underline">
              Full timeline →
            </Link>
          </div>
          <div className="mt-6">
            <Timeline events={launchTimeline.slice(1, 5)} />
          </div>
        </section>

        {/* SEO text block */}
        <section className="prose-gta mt-14 max-w-3xl">
          <h2>What is GTA 6 Hub?</h2>
          <p>
            GTA 6 Hub is an independent, unofficial resource built for players counting down
            to <Link href="/release-date">November 19, 2026</Link>. We track only what
            Rockstar Games has officially confirmed — launch dates, edition pricing, preload
            windows — and clearly label anything seen in trailers as unconfirmed until the
            game ships.
          </p>
          <p>
            On launch day the databases go live: every{' '}
            <Link href="/vehicles">vehicle</Link>, <Link href="/missions">mission</Link>,{' '}
            <Link href="/locations">location</Link> and <Link href="/weapons">weapon</Link>{' '}
            in the state of Leonida, plus the interactive{' '}
            <Link href="/100-checklist">100% completion checklist</Link>. Bookmark the hub
            and let the countdown run.
          </p>
        </section>
      </div>
    </>
  );
}
