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
        title="The advantages of hiring the person who does the work."
        invert
      >
        <p>
          Everything about Pineflux is a consequence of one decision: no layers
          between you and your developer.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Plain English" invert>
            You should never need a translator for your own project. Scope,
            trade-offs, and progress are explained in the language of your
            business, not in jargon.
          </GridListItem>
          <GridListItem title="Small by design" invert>
            Pineflux takes on a few projects at a time, so every project gets
            senior attention. If the timeline will not work, you will know
            before you commit, not after.
          </GridListItem>
          <GridListItem title="Built to hand off" invert>
            Readable code, boring technology, and real documentation. You are
            never locked in, which is exactly why clients stay.
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
                Most of that work taught me the same lesson from different
                angles: the software that helps a business most is rarely the
                flashiest. It&apos;s the tool that fits the workflow so well
                that people stop noticing it. That&apos;s the kind of software
                Pineflux exists to build.
              </p>
              <p>
                Small businesses usually get a bad deal in software. Agencies
                are built for enterprise budgets, freelancer marketplaces are a
                lottery, and off-the-shelf tools fit until the day they
                don&apos;t. A small, senior, founder-led studio is my answer to
                that gap.
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
    'Pineflux is the software studio of Travis Hayes: a decade of experience building business applications, integrations, and ecommerce, available to small businesses.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About" title="A software studio the size of the problem">
        <p>
          Pineflux is a founder-led studio, and that is not a limitation.
          It&apos;s the product.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Most small businesses don&apos;t need an agency. They need one
            senior engineer who understands how businesses operate, takes the
            time to learn how theirs does, and builds exactly what&apos;s
            needed, nothing more. That is the entire premise of Pineflux.
          </p>
          <p>
            There is no sales team, no account managers, and no junior
            developers learning on your budget. When you work with Pineflux,
            you work with me, Travis Hayes, from the first conversation to the
            last deploy. It&apos;s a deliberately small studio that does a
            small number of things unusually well.
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
        intro="Plain-English writing about the software that runs small businesses: what to build, what to buy, and how to avoid expensive mistakes."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
