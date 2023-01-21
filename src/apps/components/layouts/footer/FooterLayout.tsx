import { type ApplicationComponent } from '@application/types'

const FooterLayout: ApplicationComponent = () => {
    return (
        <footer>
            <div className="p-8 max-w-cutoff mx-auto">
                <p className="text-center font-light text-sm text-neutral-500">
                    Made With Love By{' '}
                    <code className="transition-smooth hover:text-neutral-900 cursor-pointer">
                        @HaneuLab
                    </code>
                </p>
            </div>
        </footer>
    )
}

export default FooterLayout
