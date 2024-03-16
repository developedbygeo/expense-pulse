import { motion, MotionConfig } from 'framer-motion'

import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

type AnimatedBurgerButtonProps = WithClassName & {
    open: boolean
    handleOpen: () => void
}

const AnimatedBurgerButton = ({
    className,
    open,
    handleOpen,
}: AnimatedBurgerButtonProps) => {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
        >
            <motion.button
                initial={false}
                animate={open ? 'open' : 'closed'}
                onClick={handleOpen}
                className={cn('relative transition-colors', className)}
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-[0.15rem] w-8 bg-neutral-950"
                    style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-[0.15rem] w-8 bg-neutral-950"
                    style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-[0.15rem] w-8 bg-neutral-950"
                    style={{
                        x: '-50%',
                        y: '50%',
                        bottom: '35%',
                        left: '50%',
                    }}
                />
            </motion.button>
        </MotionConfig>
    )
}

const VARIANTS = {
    top: {
        open: {
            rotate: ['0deg', '0deg', '45deg'],
            top: ['35%', '50%', '50%'],
        },
        closed: {
            rotate: ['45deg', '0deg', '0deg'],
            top: ['50%', '50%', '35%'],
        },
    },
    middle: {
        open: {
            rotate: ['0deg', '0deg', '-45deg'],
        },
        closed: {
            rotate: ['-45deg', '0deg', '0deg'],
        },
    },
    bottom: {
        open: {
            rotate: ['0deg', '0deg', '45deg'],
            bottom: ['35%', '50%', '50%'],
            left: '50%',
        },
        closed: {
            rotate: ['45deg', '0deg', '0deg'],
            bottom: ['50%', '50%', '35%'],
            left: '50%',
        },
    },
}

export default AnimatedBurgerButton
