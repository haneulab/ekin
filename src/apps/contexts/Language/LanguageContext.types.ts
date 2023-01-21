import { type ReactNode } from 'react'

export type LanguageOptions<
    LanguageOptionExtension extends string = 'en' | 'ko'
> = LanguageOptionExtension

export interface LanguageContextProps<LanguageOptions> {
    lang: LanguageOptions
    onLanguageSwitch: ((_lang: LanguageOptions) => void) | null
}

export interface LanguageContextProviderProps {
    children: ReactNode
}
