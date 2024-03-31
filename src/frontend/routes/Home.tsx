import { BentoGrid, BentoGridItem } from '@/components/elements/BentoGrid';
import { Container } from '@/components/elements/Container';
import FadeIn from '@/components/elements/FadeIn';
import CurrentUserGreeting from '@/frontend/components/modules/User/CurrentUserGreeting';
import { cn } from '@/lib/utils';
import { Fragment } from 'react/jsx-runtime';

import homeModules from '@/frontend/components/modules/Home/HomeModules';
import { useAppSelector } from '@/frontend/store/hooks';

const Home = () => {
    // const expenseData = useAppSelector(state => state.)

    return (
        <Container as="section">
            <h1 className="sr-only">Home</h1>

            <FadeIn className="">
                <CurrentUserGreeting
                    text="Welcome to Expense Pulse"
                    description="We will help you get your finances in order."
                />
                <BentoGrid className="apply-mb mt-12">
                    {homeModules.map((item, i) => (
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
    );
};

export default Home;
