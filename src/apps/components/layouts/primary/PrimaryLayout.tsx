import { type IPrimaryLayout } from './Primary.types'
import { type ApplicationComponent } from '@application/types'
import { FooterLayout } from '../footer'
import { MetaLayout } from '../meta'
import { HeaderLayout } from '../header'

const PrimaryLayout: ApplicationComponent<IPrimaryLayout> = ({
    children,
    title,
    description,
    keywords,
}) => {
    return (
        <>
            <MetaLayout
                title={title}
                description={description}
                keywords={keywords}
            />
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
