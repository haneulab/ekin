import { classnames } from '@application/functions'
import { ApplicationComponent } from '@application/types'
import { IDirectCard } from './DirectCard.types'

const DirectCard: ApplicationComponent<IDirectCard> = ({
    title,
    description,
    buttons,
}) => {
    const [firstTitle, secondTtile] = title.split(',')

    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-center px-8 py-16">
            <h3 className="font-bold font-poppins text-xl md:text-3xl lg:text-4xl mb-2 text-center">
                {firstTitle},{' '}
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-cyan-800 to-sky-700">
                    {secondTtile}
                </span>
            </h3>
            <p className="font-light font-nunito text-center mb-6 text-sm w-max lg:text-lg">
                {description}
            </p>
            <div
                className={classnames(
                    'grid grid-cols-1 gap-4',
                    buttons.length >= 2 ? 'md:grid-cols-2 lg:grid-cols-4' : ''
                )}
            >
                {buttons.map((button, idx) => (
                    <button
                        key={idx}
                        onClick={button.onClick}
                        className="inline-flex col-span-1 lg:col-span-2 justify-center items-center rounded-full bg-neutral-900 text-white font-medium font-poppins text-lg lg:text-xl px-8 py-3 lg:py-4 transition-smooth hover:opacity-60 transform lg:hover:scale-105"
                    >
                        {button.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DirectCard
