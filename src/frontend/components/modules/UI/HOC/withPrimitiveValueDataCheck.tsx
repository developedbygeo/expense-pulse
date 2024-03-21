import { ComponentType, FC } from 'react'

import { primitiveValueExists } from '@/frontend/lib/data'
import { WithClassName } from '@/frontend/types/UI'

type WithValueDataCheckDataType<T> = {
    data?: T | null
}

type WithPrimitiveValueDataCheckProps<T> = {
    Component: ComponentType<WithValueDataCheckDataType<T> & WithClassName>
    Skeleton: ComponentType<WithClassName>
    componentClassName?: string
    skeletonClassName?: string
}

const withPrimitiveValueDataCheck = <T,>({
    Component,
    Skeleton,
    componentClassName = '',
    skeletonClassName = '',
}: WithPrimitiveValueDataCheckProps<T>): FC<WithValueDataCheckDataType<T>> => {
    return ({ data }) => {
        const valueExists = primitiveValueExists(data)

        if (!valueExists) {
            return <Skeleton className={skeletonClassName} />
        }

        return <Component data={data} className={componentClassName} />
    }
}

export default withPrimitiveValueDataCheck
