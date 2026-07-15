import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        What happens next
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        You&apos;ll get a reply from me, Travis, within one business day.
        We&apos;ll set up a short call to talk through your project, and
        you&apos;ll get an honest read on whether custom software is even the
        right answer. The conversation is free and there&apos;s no obligation.
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-neutral-950">
              Prefer plain email?
            </dt>
            <dd>
              <Link
                href="mailto:hello@pineflux.com"
                className="text-neutral-600 hover:text-neutral-950"
              >
                hello@pineflux.com
              </Link>
            </dd>
          </div>
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Based in
        </h2>
        <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Elsewhere
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell Pineflux about your project. You will hear back from the founder within one business day.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Tell me about your project">
        <p>
          A few sentences about your business and the problem you&apos;re
          trying to solve is plenty to get started.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
