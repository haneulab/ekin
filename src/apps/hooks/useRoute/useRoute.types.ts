import { type NextRouter } from 'next/router'

export interface Pathname {
    current: string
    previous: null | string
}

export interface IsRoutePathname {
    current: boolean
    previous: boolean
}

export type UseRoute = (_onRouteChange?: () => void) => NextRouter & {
    pathname: Pathname
    isRoute: (_route: string) => IsRoutePathname
}
