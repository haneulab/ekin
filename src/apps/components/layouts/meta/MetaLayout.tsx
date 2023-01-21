import Head from 'next/head'
import { type IMetaLayout } from './MetaLayout.types'
import { type ApplicationComponent } from '@application/types'
import { metaLayoutMock } from './MetaLayout.mock'

const MetaLayout: ApplicationComponent<IMetaLayout> = ({
    title = metaLayoutMock.title ?? '',
    description = metaLayoutMock.description ?? '',
    keywords = metaLayoutMock.keywords ?? null,
    image = metaLayoutMock.image ?? '',
}) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="twitter:card" content={description} />
            <meta name="twitter:site" content="@haneulab" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta
                name="keywords"
                content={
                    keywords
                        ? keywords.join(', ')
                        : metaLayoutMock.keywords.join(', ')
                }
            />
            <meta
                property="og:description"
                content={description ? description : metaLayoutMock.description}
            />
            <meta
                property="og:title"
                content={title ? title : metaLayoutMock.title}
            />
            <meta property="og:image" content={image} />
            <meta
                name="description"
                content={description ? description : metaLayoutMock.description}
            />
            <title>{title ? title : metaLayoutMock.title}</title>
        </Head>
    )
}

export default MetaLayout
