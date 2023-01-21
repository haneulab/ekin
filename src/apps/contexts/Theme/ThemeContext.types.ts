import { type ReactNode } from 'react'

export type ThemeOptions<
    ThemeOptionsExtension extends string = 'light' | 'dark'
> = ThemeOptionsExtension

export interface ThemeContextProps {
    theme: ThemeOptions
    onThemeSwitch: ((_theme: ThemeOptions) => void) | null
}

export interface ThemeContextProviderProps {
    children: ReactNode
}
