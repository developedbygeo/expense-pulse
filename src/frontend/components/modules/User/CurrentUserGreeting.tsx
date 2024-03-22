import { useAppSelector } from '@/frontend/store/hooks';
import { WithClassName } from '@/frontend/types/UI';
import { ElementType } from 'react';

type CurrentUserGreetingProps = WithClassName & {
    text: string;
    fallbackText: string;
    as?: ElementType;
};

const CurrentUserGreeting = ({
    className,
    text,
    fallbackText,
    as = 'span',
}: CurrentUserGreetingProps) => {
    const currentUser = useAppSelector((state) => state.user.currentUser);

    const Component = as;

    const textToRender = currentUser
        ? `${text}, ${currentUser?.FirstName}`
        : fallbackText;

    return (
        <Component className={className || undefined}>{textToRender}</Component>
    );
};

export default CurrentUserGreeting;
