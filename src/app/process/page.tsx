import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Understand" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every project starts with a conversation about your{' '}
          <strong className="font-semibold text-neutral-950">business</strong>,
          not about technology. What does the work actually look like day to
          day? Where does time disappear? What breaks, and what does it cost
          when it does?
        </p>
        <p>
          From there I map the workflow we&apos;re fixing and write up a{' '}
          <strong className="font-semibold text-neutral-950">
            written scope
          </strong>
          : what we&apos;re building, what we&apos;re deliberately not building
          yet, what it costs, and how long it takes. Wherever possible I quote a
          fixed scope at a fixed price.
        </p>
        <p>
          This is also where I&apos;ll tell you if you{' '}
          <strong className="font-semibold text-neutral-950">
            shouldn&apos;t hire me
          </strong>
          . If an off-the-shelf tool solves your problem for $40 a month, you
          deserve to know that before you spend real money on custom software.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Free initial consultation</TagListItem>
        <TagListItem>Workflow mapping</TagListItem>
        <TagListItem>Build-vs-buy recommendation</TagListItem>
        <TagListItem>Written scope and fixed quote</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Work happens in short cycles with something{' '}
          <strong className="font-semibold text-neutral-950">visible</strong> at
          the end of each one. You&apos;re looking at real screens and real data
          within the first couple of weeks instead of waiting until the end to
          see anything.
        </p>
        <p>
          You get a short progress update every week: what got done, what&apos;s
          next, and anything I need from you. Questions get answered by the
          person writing the code, usually the same business day.
        </p>
        <p>
          Scope changes are handled honestly. Small adjustments are part of the
          work. If something genuinely changes the size of the project, you get
          the cost and timeline impact in writing{' '}
          <strong className="font-semibold text-neutral-950">before</strong> I
          build it, and you decide.
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver & support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We plan launch around your business calendar: a quiet season, a
          weekend, whatever causes the least disruption. We test with your real
          data and your real team before anything goes live, and I&apos;m{' '}
          <strong className="font-semibold text-neutral-950">around</strong> for
          the switchover and the first days after it.
        </p>
        <p>
          You get everything: the code, the accounts, the credentials, and
          documentation written for whoever comes after me. If you ever want
          another developer to take over, they&apos;ll have what they need.
        </p>
        <p>
          After launch, support can be handled through a small monthly
          arrangement or scheduled as needed for fixes, changes, and questions.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing with real data">
          Software gets tested against your actual workflows and edge cases
          before launch, with your team involved, so day one is boring in the
          best way.
        </ListItem>
        <ListItem title="Full ownership">
          Code, accounts, credentials, and documentation are yours from day one.
          You could leave at any point and take all of it with you.
        </ListItem>
        <ListItem title="Support that fits">
          A monthly support arrangement if you want a standing safety net, or
          hourly help when you need it. Retainers are optional.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="Principles" title="The rules the work follows">
        <p>
          These are the standards I hold the work to, and you should hold me to
          them too.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Honest scoping">
            The estimate you get is the estimate I believe, including the parts
            that are uncertain. Bad news early beats bad news late.
          </GridListItem>
          <GridListItem title="Boring technology">
            Proven tools over shiny ones. Your business software should be built
            on technology that will still be supported in ten years.
          </GridListItem>
          <GridListItem title="Small releases">
            Working software early and often, so course corrections happen when
            they&apos;re cheap instead of when they&apos;re painful.
          </GridListItem>
          <GridListItem title="Business before technology">
            Technical decisions are explained through their effect on cost,
            risk, timelines, and the way your team works.
          </GridListItem>
          <GridListItem title="Your ownership">
            Everything built for you belongs to you: code, data, accounts,
            documentation. It should always be easy to walk away with everything
            in hand.
          </GridListItem>
          <GridListItem title="Maintainable first">
            Every line is written knowing someone else may maintain it someday.
            That discipline is what makes software cheap to change later.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'How Pineflux Builds Custom Software',
  description:
    'A simple, honest process: understand the business, build in short visible cycles, deliver with full ownership and support that fits.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="How we work"
        title="A clear path from business problem to working software"
      >
        <p>
          You&apos;ll always know where your project stands. The path from
          &ldquo;here&apos;s our problem&rdquo; to software your team relies on
          is short, and you see working results every week along the way.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
