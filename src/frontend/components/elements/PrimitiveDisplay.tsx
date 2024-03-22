import { WithChildren, WithClassName } from '@/frontend/types/UI';
import { ElementType } from 'react';

type PrimitiveDisplayProps = WithClassName &
    WithChildren & {
        as: ElementType;
    };

const PrimitiveDisplay = ({
    className,
    children,
    as = 'span',
}: PrimitiveDisplayProps) => {
    const Component = as;

    return <Component className={className}>{children}</Component>;
};

export default PrimitiveDisplay;
