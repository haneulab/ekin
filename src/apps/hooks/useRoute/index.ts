/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter, type NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IsRoutePathname, type Pathname, type UseRoute } from './useRoute.types'

const useRoute: UseRoute = (onRouteChange) => {
    const router = useRouter()
    const [current, setCurrent] = useState<string>(router.pathname)
    const [previous, setPrevious] = useState<null | string>(null)
    const [pathname, setPathname] = useState<{
        current: string
        previous: null | string
    }>({
        current: router.pathname,
        previous: null,
    })

    useEffect(() => {
        setCurrent(router.pathname)
        setPrevious(null)
    }, [])

    useEffect(() => {
        setPrevious(current)
        setCurrent(router.pathname)
    }, [router.pathname])

    useEffect(() => {
        setPathname({
            current,
            previous,
        })
    }, [current, previous])

    useEffect(() => {
        if (onRouteChange && typeof onRouteChange === 'function') {
            onRouteChange()
        }
    }, [pathname])

    return {
        ...router,
        pathname,
        isRoute: (_route) => {
            return {
                current: _route === current,
                previous: _route === previous,
            }
        },
    } as NextRouter & {
        pathname: Pathname
        isRoute: (_route: string) => IsRoutePathname
    }
}

export default useRoute
