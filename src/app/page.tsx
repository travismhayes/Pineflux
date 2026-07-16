import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
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
                    {problem}
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
        title="Software for the work your current tools can’t handle"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Custom applications, integrations, and ecommerce systems for work that
          has outgrown spreadsheets, manual handoffs, or off-the-shelf software.
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

function WorkingWithPineflux() {
  return (
    <>
      <SectionIntro
        eyebrow="Working with Pineflux"
        title="Experience stays close to the work"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          I learn how the work happens now, decide what is worth changing, and
          build the solution. That continuity keeps the business problem at the
          center of the project.
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
            <ListItem title="Understand before building">
              Every project starts with the workflow, the people involved, and
              the cost of the current problem. Technology comes after the
              business case is clear.
            </ListItem>
            <ListItem title="Experienced work throughout">
              Over a decade of professional experience building business
              applications, ERP and API integrations, and ecommerce systems goes
              into the scoping, technical decisions, and implementation.
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
    'Custom software and systems integration for small businesses that need to replace manual work, connect systems, and improve day-to-day operations.',
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
            Pineflux builds custom tools and integrations for small businesses
            losing time to spreadsheets, duplicate data entry, and systems that
            do not stay in sync. I&apos;m Travis Hayes, a Seattle software
            engineer with more than a decade of experience in order management,
            billing automation, ecommerce, and ERP and API integrations.
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

      <WorkingWithPineflux />

      <ContactSection />
    </RootLayout>
  )
}
