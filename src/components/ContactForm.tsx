'use client'

import { useId, useState } from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export function ContactForm() {
  let [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    let data = new FormData(event.currentTarget)

    try {
      let response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <FadeIn className="lg:order-last">
        <div className="rounded-2xl border border-neutral-300 p-8">
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Got it. I&apos;ll be in touch.
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Expect a reply within one business day. You can also email{' '}
            <a
              href="mailto:hello@pineflux.com"
              className="font-semibold text-neutral-950"
            >
              hello@pineflux.com
            </a>{' '}
            directly if you need to add anything.
          </p>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Project details
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="What would you like to fix or build?"
            name="message"
            required
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Rough budget
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Under $5K" name="budget" value="under-5k" />
                <RadioInput label="$5K – $15K" name="budget" value="5k-15k" />
                <RadioInput label="$15K – $50K" name="budget" value="15k-50k" />
                <RadioInput
                  label="Not sure yet"
                  name="budget"
                  value="not-sure"
                />
              </div>
            </fieldset>
          </div>
        </div>
        {status === 'error' && (
          <p className="mt-6 text-base text-red-600">
            Something went wrong sending your message. Please email{' '}
            <a href="mailto:hello@pineflux.com" className="font-semibold">
              hello@pineflux.com
            </a>{' '}
            instead.
          </p>
        )}
        <Button
          type="submit"
          className="mt-10"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Send project details'}
        </Button>
      </form>
    </FadeIn>
  )
}
