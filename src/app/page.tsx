import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const problems = [
  'Our systems don’t talk to each other',
  'We run the whole business out of spreadsheets',
  'Orders get re-typed into three different tools',
  'Our website doesn’t bring in customers',
  'Reports take days to pull together',
  'The developer who built it disappeared',
  'We’ve outgrown our off-the-shelf software',
  'Online sales work, but barely',
]

function Problems() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Sound familiar? These are the problems Pineflux fixes
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {problems.map((problem) => (
              <li key={problem}>
                <FadeIn>
                  <p className="font-display text-lg font-medium text-white">
                    &ldquo;{problem}&rdquo;
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services({ services }: { services: Array<MDXEntry<CaseStudy>> }) {
  return (
    <>
      <SectionIntro
        title="Custom software, without the agency overhead"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Pineflux builds the systems small businesses actually need: business
          applications, integrations, ecommerce, and websites. Everything is
          scoped honestly and built by the person you hired.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={service.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={service.logo}
                      alt=""
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span className="font-semibold">{service.client}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {service.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="mt-12 flex justify-center">
          <Button href="/work">See all services</Button>
        </FadeIn>
      </Container>
    </>
  )
}

function FounderNote() {
  return (
    <div className="relative isolate mt-24 bg-neutral-50 py-16 sm:mt-32 sm:py-28 md:py-32 lg:mt-40">
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['\201C'] after:content-['\201D'] sm:before:absolute sm:before:right-full">
                There is nobody here to hand you off to. I scope the work,
                write the code, and answer the emails.
              </p>
            </blockquote>
            <figcaption className="mt-10 text-base font-semibold text-neutral-950">
              Travis Hayes, founder of Pineflux
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}

function WhyFounderLed() {
  return (
    <>
      <SectionIntro
        eyebrow="Why a studio of one"
        title="Small on purpose. Senior by default."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Agencies put layers between you and the person doing the work.
          Pineflux removes them, and most of what makes working with me
          different follows from that.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="One point of contact">
              The person you talk to on day one is the person who designs,
              builds, and ships your project, so nothing gets lost between a
              salesperson&apos;s promise and a developer&apos;s backlog.
            </ListItem>
            <ListItem title="Senior work only">
              Over a decade of professional experience building business
              applications, ERP and API integrations, and ecommerce systems
              goes into every project, including the small ones.
            </ListItem>
            <ListItem title="Built to be maintained">
              Boring, proven technology and readable code. The goal is software
              that still makes sense in five years, to me or to any developer
              you hire after me.
            </ListItem>
            <ListItem title="Honest scope, honest pricing">
              Pineflux takes on a small number of projects at a time. If your
              project is a bad fit, or off-the-shelf software would serve you
              better, you will hear that up front.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Pineflux is a founder-led software studio in Seattle building business applications, integrations, and ecommerce for small businesses and entrepreneurs.',
}

export default async function Home() {
  let services = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Software that fits the way your business actually works.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Pineflux is a small software studio in Seattle, run by Travis
            Hayes. I build business applications, integrations, and ecommerce
            for small businesses and entrepreneurs. Most of it is the
            unglamorous software that keeps orders moving, systems in sync,
            and reports accurate.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Button href="/contact">Start a project</Button>
            <Link
              href="/work"
              className="text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              See what I build <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>

      <Problems />

      <Services services={services} />

      <FounderNote />

      <WhyFounderLed />

      <ContactSection />
    </RootLayout>
  )
}
