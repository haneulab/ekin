import { type ReactNode, ComponentType, ReactElement } from 'react'
import { type NextPage } from 'next'

export type GenericProps<T extends {}> = {
    [K in keyof T]: T[K]
}

export type GenericComponent<T extends {}> = React.FC<GenericProps<T>>

export type CustomComponent<
    ComponentProps extends {} = {},
    DefineGenericProps extends {} = {}
> = GenericComponent<ComponentProps & DefineGenericProps>

export interface ApplicationGenericComponentProps {
    className?: string
    children?: ReactNode
}

export type ApplicationComponent<Props extends {} = {}> = CustomComponent<
    Props,
    ApplicationGenericComponentProps
>

export type GetLayout = (_page: ReactElement) => ReactNode

export interface IPageWithLayout {
    getLayout?: GetLayout
    layout?: ComponentType
}
export type PageWithLayout<P extends {} = {}> = NextPage<P> & IPageWithLayout
