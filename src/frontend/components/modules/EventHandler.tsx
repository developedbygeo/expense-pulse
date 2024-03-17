import { useAppDispatch } from '@/store/hooks'
import { setPort } from '@/store/slices/appSettings'
import { ReactNode } from 'react'

const EventHandler = (): ReactNode => {
    const dispatch = useAppDispatch()

    window.core.onReceivePort((port: number) => {
        if (typeof port === 'number') dispatch(setPort({ port }))
    })

    return null
}

export default EventHandler
