import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import imageTravisHayes from '@/images/travis-hayes.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function HowIWork() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How I decide what to build"
        title="Custom software has to earn its cost"
        invert
      >
        <p>
          I look at the time a problem consumes, the errors it creates, how
          often it happens, and what changes as the business grows.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Follow the recurring cost" invert>
            Repeated data entry, manual reconciliation, missed handoffs, and
            unreliable reports are expensive because they happen again every
            day, week, or month.
          </GridListItem>
          <GridListItem title="Use what already works" invert>
            Sometimes the answer is a custom application. Sometimes two existing
            systems need to be connected. Sometimes a product you can buy
            already solves the problem.
          </GridListItem>
          <GridListItem title="Start with the smallest useful change" invert>
            The first scope should solve a meaningful problem without trying to
            rebuild the whole business at once. Results can guide what comes
            next.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Experience() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              What I know well
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                <strong className="font-semibold text-neutral-950">
                  Orders, inventory, and fulfillment.
                </strong>{' '}
                Systems that keep orders moving and give sales, operations,
                warehouse, and field teams the same information.
              </p>
              <p>
                <strong className="font-semibold text-neutral-950">
                  Integrations and data flow.
                </strong>{' '}
                Connections between ERP, accounting, ecommerce, CRM, inventory,
                and other systems that currently depend on exports or duplicate
                entry.
              </p>
              <p>
                <strong className="font-semibold text-neutral-950">
                  Billing and workflow automation.
                </strong>{' '}
                Tools that reduce repetitive preparation, reconciliation,
                reporting, and administrative work.
              </p>
              <p>
                <strong className="font-semibold text-neutral-950">
                  Internal business applications.
                </strong>{' '}
                Focused applications, dashboards, and portals for workflows
                packaged software does not handle well.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="max-w-md lg:justify-self-end">
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src={imageTravisHayes}
                alt="Travis Hayes, founder of Pineflux"
                className="w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                  Travis Hayes
                </p>
                <p className="mt-2 text-sm text-white">Founder</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Travis Hayes',
  description:
    'Meet Travis Hayes, a Seattle software engineer with more than a decade of experience in business applications, systems integration, billing automation, and ecommerce.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About"
        title="I’m Travis Hayes. I build software around how a business actually works."
      >
        <p>
          I&apos;ve spent more than a decade building order management systems,
          billing automation, ERP and API integrations, ecommerce systems, and
          internal business tools.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            That experience taught me to start with the workflow. I look for the
            places where people repeat the same task, information gets lost, or
            errors and delays cost the business money. Then I determine whether
            the right answer is an integration, a focused application, a change
            to an existing system, or something you can buy instead.
          </p>
          <p>
            I started Pineflux to do that work for small businesses. I handle
            each project from the first conversation through launch, so the
            person learning how your business works is also the person designing
            and building the solution.
          </p>
        </div>
      </PageIntro>
      <Experience />

      <HowIWork />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Selected writing"
        intro="Notes for business owners dealing with spreadsheets, disconnected systems, and software decisions: when to improve what you have, when to buy, and when custom work makes sense."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
