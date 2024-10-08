import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}


function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Startups 101',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Startups 101"
      intro="Frameworks, videos, and opinions. Things that I've seen help me. Good founders build their own convictions. Take what's useful, leave the rest."
    >
      <div className="space-y-20">
        <SpeakingSection title="What to work on">
          <Appearance
            href="/articles/what-to-work-on"
            title="Framework: How to choose what to work on"
            description="My framework for figuring out what to work on and how to measure if it's a good fit or not"
            event="Written on: 5/1/2024"
            cta="To article"
          />
          
        </SpeakingSection>
       
      </div>
      <div className="space-y-20 mt-4">
        <SpeakingSection title="Cofounders">
          <Appearance
            href="/articles/cofounders"
            title="What makes a great Cofounder"
            description="My thoughts on Cofounders and what makes a great one"
            event="Written on: 8/26/2024"
            cta="To article"
          />
          
        </SpeakingSection>
       
      </div>
    </SimpleLayout>
  )
}
