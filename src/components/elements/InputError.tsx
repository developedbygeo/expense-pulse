import { MdError } from 'react-icons/md'

import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

type InputErrorProps = WithClassName & {
    message?: string
}

const InputError = ({ className, message }: InputErrorProps) => {
    if (!message) return null
    return (
        <div className={cn(' text-red-700', className)}>
            <MdError className="w-4 h-4 inline mr-2" />
            <span className="text-xs">{message}</span>
        </div>
    )
}

export default InputError
