import { forwardRef, useId } from 'react'

import InputError from '@/components/elements/InputError'
import { cn } from '@/lib/utils'
import { InputProps } from '@/types/UI'

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, errorMessage, ...props }, ref) => {
        const id = useId()

        return (
            <div
                className={cn(
                    'group relative z-0 transition-all focus-within:z-10',
                    className
                )}
            >
                <input
                    type="text"
                    id={id}
                    ref={ref}
                    {...props}
                    placeholder=" "
                    className={cn(
                        'peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 rounded-md',
                        errorMessage ? 'border-red-700' : ''
                    )}
                />
                <label
                    htmlFor={id}
                    className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
                >
                    {label}
                </label>
                <InputError
                    className="absolute -bottom-6 left-0"
                    message={errorMessage}
                />
            </div>
        )
    }
)

export default Input
