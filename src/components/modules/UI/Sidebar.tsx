import { motion } from 'framer-motion'
import { useReducer } from 'react'
import { NavLink } from 'react-router-dom'

import { Separator } from '@/components/elements/Separator'
import AnimatedBurgerButton from '@/components/modules/UI/AnimatedBurgerButton'
import { NAVIGATION_LINKS } from '@/data/links'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

const Sidebar = ({ className }: WithClassName) => {
    const [expanded, setExpanded] = useReducer((prev) => !prev, false)

    return (
        <div
            className={cn(
                'h-full dark:bg-neutral-800 overflow-hidden bg-neutral-100',
                className
            )}
        >
            <motion.aside className="">
                <nav>
                    <ul className="flex flex-col justify-center items-center">
                        <AnimatedBurgerButton
                            className="h-12 w-12 place-self-start"
                            open={expanded}
                            handleOpen={setExpanded}
                        />
                        {NAVIGATION_LINKS.map((link) => {
                            const NavIcon = link.icon
                            return (
                                <>
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            cn(
                                                'w-full py-3 flex items-center transition-colors duration-300',
                                                isActive
                                                    ? 'text-accent'
                                                    : 'text-neutral-700 hover:text-neutral-800 '
                                            )
                                        }
                                        to={link.href}
                                        key={link.href}
                                        title={link.label}
                                    >
                                        <NavIcon className="w-8 h-8 ml-2" />
                                        <motion.span
                                            className="whitespace-nowrap"
                                            initial={false}
                                            animate={{
                                                width: expanded
                                                    ? 'fit-content'
                                                    : 0,
                                                opacity: expanded ? 100 : 0,
                                                paddingRight: expanded
                                                    ? '1.5rem'
                                                    : 0,
                                                marginLeft: expanded
                                                    ? '1.5rem'
                                                    : 0,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            {link.label}
                                        </motion.span>
                                    </NavLink>
                                    <Separator />
                                </>
                            )
                        })}
                    </ul>
                </nav>
            </motion.aside>
        </div>
    )
}

export default Sidebar
