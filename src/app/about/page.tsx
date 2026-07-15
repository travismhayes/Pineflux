import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageTravisHayes from '@/images/travis-hayes.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function HowIWork() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How I work"
        title="Direct access makes for better software"
        invert
      >
        <p>
          You can ask a question, make a decision, and move the project forward
          in the same conversation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Plain English" invert>
            You should never need a translator for your own project. I explain
            scope, trade-offs, and progress in the language of your business.
          </GridListItem>
          <GridListItem title="Small by design" invert>
            I limit the number of active projects so I have time to understand
            the details and do the work myself. You get a realistic schedule
            before you commit.
          </GridListItem>
          <GridListItem title="Built to hand off" invert>
            You receive readable code, proven technology, and useful
            documentation. Your business can keep working with me or hand the
            project to another developer later.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Founder() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              The person behind Pineflux
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                I&apos;m Travis Hayes, a software engineer in Seattle. I&apos;ve
                spent over a decade building the software that businesses run
                on: order management systems, ERP and API integrations, billing
                automation, ecommerce platforms, and the internal tools that
                keep operations moving.
              </p>
              <p>
                I&apos;ve seen where business software earns its keep. Orders
                move without being retyped, billing runs without a monthly
                scramble, and the numbers people use to make decisions are
                current. Pineflux focuses on that practical work.
              </p>
              <p>
                Small businesses need experienced software help at a sensible
                scale. Pineflux can take on the focused application,
                integration, store, or website that is too specific for a
                packaged tool and too small for a large agency team.
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
  title: 'About',
  description:
    'Meet Travis Hayes, the software engineer behind Pineflux, with more than a decade of experience in business applications, integrations, and ecommerce.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About" title="Senior software work, kept personal">
        <p>
          Pineflux is the software studio of Travis Hayes.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I work with small-business owners who have a valuable problem
            trapped between a spreadsheet, a packaged product, and a large
            agency quote. I learn how the work moves through the business and
            build the smallest useful solution.
          </p>
          <p>
            I handle the discovery, design, development, and launch myself.
            Keeping that responsibility in one place lets me take on a limited
            number of projects and give each one proper attention.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Years building business software" />
          <StatListItem value="1" label="Person you talk to, start to finish" />
          <StatListItem value="0" label="Layers between you and your developer" />
        </StatList>
      </Container>

      <Founder />

      <HowIWork />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Notes for business owners deciding what to build, what to buy, and when their current tools have become more expensive than replacing them."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
