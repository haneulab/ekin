import '@application/styles'
import { type PageWithLayout } from '@application/types'
import { type AppProps } from 'next/app'
import {
    LanguageContextProvider,
    ThemeContextProvider,
} from '@application/contexts'

interface PageWithLayoutProps extends AppProps {
    Component: PageWithLayout
}

const App = (props: PageWithLayoutProps) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <ThemeContextProvider>
            <LanguageContextProvider>
                {getLayout(<Component {...pageProps} />)}
            </LanguageContextProvider>
        </ThemeContextProvider>
    )
}

export default App
