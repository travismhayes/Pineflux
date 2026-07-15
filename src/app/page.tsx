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
  'Our systems never agree with each other',
  'The whole business runs out of one spreadsheet',
  'Every order gets typed in three times',
  'Our website looks fine, but leads are scarce',
  'A simple report takes half a day',
  'Nobody knows how the old software works',
  'Our software is getting in the team’s way',
  'Online orders create hours of back-office work',
]

function Problems() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            The problems Pineflux is built to solve
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
        title="Fix the workflow that keeps costing you time"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          I build focused software for a specific business problem, from an
          order system your team can trust to a website that brings in better
          inquiries. You work directly with me from the first sketch through
          launch.
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
                When you hire Pineflux, you get me. I learn the workflow,
                recommend the fix, write the code, and stay with it through
                launch.
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
        eyebrow="A studio of one"
        title="You hire me. You work with me."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Pineflux stays small so decisions are faster and responsibility is
          clear. The person making the recommendation is also the person who
          has to build it and make it work.
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
              Bring questions, changes, and concerns straight to me. You will
              get an answer from the person who knows the project and can do
              something about it.
            </ListItem>
            <ListItem title="Senior work only">
              Over a decade of professional experience building business
              applications, ERP and API integrations, and ecommerce systems
              goes into every project, including the small ones.
            </ListItem>
            <ListItem title="Built to be maintained">
              I use proven technology and write readable code, with the
              accounts and documentation in your name. Another capable
              developer can take over without starting from scratch.
            </ListItem>
            <ListItem title="Clear scope and pricing">
              Before you commit, you will know what I recommend, what it will
              cost, and where the uncertainty is. When an existing product is
              the better buy, I will point you to it.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Pineflux builds custom business applications, systems integrations, ecommerce, and lead-generating websites for small businesses.',
}

export default async function Home() {
  let services = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Custom software for the parts of your business that do not fit off
            the shelf.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I&apos;m Travis Hayes, a software engineer in Seattle with more than
            a decade of experience building the systems businesses run on. I
            help small teams move orders faster, connect the tools they already
            use, replace fragile spreadsheets, and turn more website visits
            into inquiries.
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
