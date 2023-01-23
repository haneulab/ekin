import { ApplicationComponent } from '@application/types'
import { IPopularBar } from './PopularBar.types'

const PopularBar: ApplicationComponent<IPopularBar> = ({
    title,
    categories,
}) => {
    return (
        <section className="sticky bg-white/90 drop-shadow-sm top-0 z-50">
            <div className="p-4 lg:py-6 flex flex-col gap-y-2 lg:gap-y-0 lg:gap-x-0 lg:flex-row justify-between items-center max-w-cutoff mx-auto">
                <h3 className="text-lg lg:text-xl font-bold font-lato text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-cyan-800 to-sky-700">
                    {title}
                </h3>
                <nav className="flex items-center gap-x-4 text-neutral-600">
                    {categories.map((category, idx) => (
                        <button
                            key={idx}
                            onClick={category.onClick}
                            className="transition-smooth hover:opacity-60"
                        >
                            {category.text}
                        </button>
                    ))}
                </nav>
            </div>
        </section>
    )
}

export default PopularBar
