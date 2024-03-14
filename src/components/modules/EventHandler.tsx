import { useAppDispatch } from '@/store/hooks'
import { setPort } from '@/store/slices/appSettings'

const EventHandler = () => {
    const dispatch = useAppDispatch()

    window.core.onReceivePort((port: number) => {
        if (typeof port === 'number') dispatch(setPort({ port }))
    })

    return null
}

export default EventHandler
