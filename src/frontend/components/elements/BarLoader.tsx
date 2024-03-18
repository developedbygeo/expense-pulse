import { cn } from '@/frontend/lib/utils'
import { WithClassName } from '@/frontend/types/UI'
import { Variants, motion } from 'framer-motion'

const variants: Variants = {
    initial: {
        scaleY: 0.5,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 1,
            ease: 'circIn',
        },
    },
}

type BarLoaderProps = WithClassName & {
    content?: string
}

const BarLoader = ({ className, content }: BarLoaderProps) => {
    return (
        <motion.div
            transition={{
                staggerChildren: 0.25,
            }}
            initial="initial"
            animate="animate"
            className={cn('flex items-center gap-1', className)}
        >
            <motion.div
                variants={variants}
                className="h-8 w-1 bg-neutral-400"
            />
            <motion.div
                variants={variants}
                className="h-8 w-1 bg-neutral-400"
            />
            <motion.div
                variants={variants}
                className="h-8 w-1 bg-neutral-400"
            />
            <motion.div
                variants={variants}
                className="h-8 w-1 bg-neutral-400"
            />
            <motion.div
                variants={variants}
                className="h-8 w-1 bg-neutral-400"
            />
            <p className="ml-4 text-neutral-500">{content}</p>
        </motion.div>
    )
}

export default BarLoader
