import { motion } from 'framer-motion'
import { Fragment, useEffect, useReducer } from 'react'
import { NavLink } from 'react-router-dom'

import { Separator } from '@/components/elements/Separator'
import AnimatedBurgerButton from '@/components/modules/UI/AnimatedBurgerButton'
import { NAVIGATION_LINKS } from '@/data/links'
import { handleLayoutWithSidebar } from '@/lib/UI'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

const Sidebar = ({ className }: WithClassName) => {
    const [expanded, setExpanded] = useReducer((prev) => !prev, false)

    useEffect(() => {
        handleLayoutWithSidebar(expanded)
    }, [expanded])

    return (
        <div
            className={cn(
                'h-full dark:bg-neutral-800 overflow-hidden bg-neutral-100',
                className
            )}
        >
            <aside className="py-4">
                <nav>
                    <ul className="relative">
                        <AnimatedBurgerButton
                            className="h-12 w-12 px-2 ml-2  place-self-start"
                            open={expanded}
                            handleOpen={setExpanded}
                        />
                        <div className="h-[83.5vh] mt-6 flex flex-col relative">
                            {NAVIGATION_LINKS.core.map((link) => {
                                const NavIcon = link.icon
                                return (
                                    <Fragment key={link.href}>
                                        <NavLink
                                            className={({ isActive }) =>
                                                cn(
                                                    'w-full px-2 py-3 flex items-center hover:bg-neutral-200 transition-colors duration-300',
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
                                    </Fragment>
                                )
                            })}
                        </div>
                        <div className="">
                            {NAVIGATION_LINKS.misc.map((link) => {
                                const NavIcon = link.icon
                                return (
                                    <Fragment key={link.href}>
                                        <NavLink
                                            className={({ isActive }) =>
                                                cn(
                                                    'w-full px-2 py-3 flex hover:bg-neutral-200 items-center transition-colors duration-300',
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
                                    </Fragment>
                                )
                            })}
                        </div>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar
