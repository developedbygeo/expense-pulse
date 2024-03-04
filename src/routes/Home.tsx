import { Container } from '@/components/elements/Container'
import FadeIn from '@/components/elements/FadeIn'

import { WelcomePage } from '@refinedev/core'

const Home = () => {
  return (
    <Container as="section">
      <h1 className="sr-only">Home</h1>

      <FadeIn className="max-w-3xl">
        <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Welcome to Expense Pulse
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          We will help you getting your money in order.
        </p>
      </FadeIn>
      <WelcomePage />
    </Container>
  )
}

export default Home
