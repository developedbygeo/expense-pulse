import { useEffect } from 'react'

import { Container } from '@/components/elements/Container'
import FadeIn from '@/components/elements/FadeIn'

const Home = () => {
    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/api/createUser')
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container as="section">
            <h1 className="sr-only">Home</h1>

            <FadeIn className="max-w-3xl">
                <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                    Welcome to Expense Pulse
                </h2>
                <p className="mt-6 text-xl text-neutral-600">
                    We will help you get your finances in order.
                </p>
            </FadeIn>
        </Container>
    )
}

export default Home
