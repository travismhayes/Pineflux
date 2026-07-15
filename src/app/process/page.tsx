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
          First, I learn how the work moves through your{' '}
          <strong className="font-semibold text-neutral-950">business</strong>.
          Who does what? Which systems are involved? Where does the team lose
          time, re-enter information, or work around a tool that no longer
          fits?
        </p>
        <p>
          Then I map the workflow we&apos;re fixing and write a{' '}
          <strong className="font-semibold text-neutral-950">
            plain-English scope
          </strong>
          . It covers what I will build, what can wait, what it costs, and how
          long it should take. I use fixed scopes and fixed prices wherever the
          work is predictable enough.
        </p>
        <p>
          You will also get a{' '}
          <strong className="font-semibold text-neutral-950">
            build-or-buy recommendation
          </strong>
          . If a $40-a-month product handles the job well, I will point you to
          it before you spend real money on custom software.
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
          I work in short cycles and put something{' '}
          <strong className="font-semibold text-neutral-950">visible</strong>{' '}
          in front of you early. Within the first couple of weeks, you should
          be looking at real screens and testing the important parts of the
          workflow.
        </p>
        <p>
          Each week, you get a short update covering what is finished, what is
          next, and any decision I need from you. When you have a question, you
          ask the person writing the code.
        </p>
        <p>
          Small adjustments are part of the work. If a request changes the
          size of the project, I put the cost and schedule impact in writing{' '}
          <strong className="font-semibold text-neutral-950">before</strong>{' '}
          I build it. You decide whether it belongs in this release or a later
          one.
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
          We plan launch around your business calendar and test with your real
          data and team before anything goes live. I handle the switchover and
          stay close during the first days of normal use.
        </p>
        <p>
          You get everything: the code, the accounts, the credentials, and
          documentation written for whoever comes after me. If you ever want
          another developer to take over, they&apos;ll have what they need.
        </p>
        <p>
          After launch, choose the level of{' '}
          <strong className="font-semibold text-neutral-950">support</strong>{' '}
          your business needs. I can provide ongoing maintenance and changes,
          or you can get in touch when a specific need comes up.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing with real data">
          Software gets tested against your actual workflows and edge cases
          before launch, with your team involved. That catches surprises while
          they are still easy to fix.
        </ListItem>
        <ListItem title="Full ownership">
          Code, accounts, credentials, and documentation are yours from day
          one. You could leave at any point and take all of it with you.
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

      <SectionIntro
        eyebrow="Principles"
        title="The rules the work follows"
      >
        <p>
          These are the standards I hold the work to, and you should hold me
          to them too.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Documented scope">
            Estimates include the parts I know and the parts that still need
            investigation. I explain the uncertainty before it affects your
            budget or schedule.
          </GridListItem>
          <GridListItem title="Boring technology">
            I choose mature, widely used tools with a good chance of being
            supported for years. New technology needs a business reason to
            earn its place in the project.
          </GridListItem>
          <GridListItem title="Small releases">
            You see useful pieces of the system as they are completed. Feedback
            arrives while changing direction is still inexpensive.
          </GridListItem>
          <GridListItem title="Plain English">
            Technical choices come with a practical explanation of the cost,
            risk, maintenance, and effect on the people using the system.
          </GridListItem>
          <GridListItem title="Your ownership">
            The code, data, accounts, and documentation belong to you. I set
            projects up so you can access and transfer each part without
            depending on Pineflux.
          </GridListItem>
          <GridListItem title="Maintainable first">
            Clear structure, readable code, and current documentation reduce
            the time it takes to fix or extend the software later.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'See how Pineflux scopes, builds, launches, and supports custom software for small businesses.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="How we work" title="Know what is happening at every step">
        <p>
          A clear scope, working software early, and a short update every week
          keep the project understandable. You know what is finished, what is
          next, and when I need a decision from you.
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
