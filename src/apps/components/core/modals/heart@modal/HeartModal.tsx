import { classnames } from '@application/functions'
import { type ApplicationComponent } from '@application/types'
import Link from 'next/link'
import { type IHeartModal } from './HeartModal.types'
import { GiTShirt, GiArmoredPants, GiRunningShoe } from 'react-icons/gi'

const HeartModal: ApplicationComponent<IHeartModal> = ({
    showHeartModal,
    onHideHeartModal,
}) => {
    return (
        <aside
            className={classnames(
                'fixed top-0 z-50 backdrop-blur-sm text-slate-800 transform transition-all h-screen w-full flex flex-col items-end',
                showHeartModal
                    ? 'bg-black/50 backdrop-blur-md opacity-100 drop-shadow-lg duration-[0.35s]'
                    : '-right-full duration-[0.55s]'
            )}
        >
            <aside
                className={classnames(
                    'w-[75vw] md:w-[50%] lg:w-[25%] bg-white/95 h-screen transform transition-smooth ',
                    showHeartModal ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <section className="p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-bold font-lato text-xl">
                            Your Saved Apparels
                        </h2>
                        <button
                            onClick={onHideHeartModal}
                            className="text-lg text-red-400 transition-smooth hover:text-red-600"
                        >
                            X
                        </button>
                    </div>
                    <ul className="flex flex-col gap-y-4">
                        <Link href={'/'}>
                            <a className="inline-flex items-center gap-x-2 font-medium text-lg text-neutral-700">
                                <GiTShirt />
                                <span>T-shirts</span>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className="inline-flex items-center gap-x-2 font-medium text-lg text-neutral-700">
                                <GiArmoredPants />
                                <span>Jeans</span>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a className="inline-flex items-center gap-x-2 font-medium text-lg text-neutral-700">
                                <GiRunningShoe />
                                <span>Shoes</span>
                            </a>
                        </Link>
                    </ul>
                </section>
            </aside>
        </aside>
    )
}

export default HeartModal
