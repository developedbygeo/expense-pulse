import { BentoGrid, BentoGridItem } from '@/components/elements/BentoGrid'
import { Container } from '@/components/elements/Container'
import FadeIn from '@/components/elements/FadeIn'
import { items } from '@/data/mockHomeItems'
import { cn } from '@/lib/utils'

const Home = () => {
    return (
        <Container as="section">
            <h1 className="sr-only">Home</h1>

            <FadeIn className="">
                <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                    Welcome to Expense Pulse
                </h2>
                <p className="mt-6 text-xl text-neutral-600">
                    We will help you get your finances in order.
                </p>
                <BentoGrid className="apply-mb mt-12">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            className={cn(
                                'pl-0',
                                i === 3 || i === 6 ? 'md:col-span-2' : ''
                            )}
                        />
                    ))}
                </BentoGrid>
            </FadeIn>
        </Container>
    )
}

export default Home
