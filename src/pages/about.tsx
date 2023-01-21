import { type PageWithLayout } from '@application/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@application/components/layouts'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const AboutPage: PageWithLayout = () => {
    return <>AboutPage</>
}

AboutPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default AboutPage
