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
        I&apos;ll reply within one business day. If the project sounds like
        something I can help with, we&apos;ll schedule a short call to get into
        the workflow, timing, and budget. I&apos;ll tell you whether I would build
        something custom, use an existing product, or take another route.
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
    'Tell Travis at Pineflux what is slowing your business down and get a reply within one business day.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="What would you like to work better?">
        <p>
          Tell me what your business does, where the current process breaks
          down, and what you would like to change. A few sentences is enough.
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
