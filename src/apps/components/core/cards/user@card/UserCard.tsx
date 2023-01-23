import { type ApplicationComponent } from '@application/types'
import { type IUserCard } from './UserCard.types'
import Image from 'next/image'

const UserCard: ApplicationComponent<IUserCard> = ({ username, src, alt }) => {
    return (
        <div className="relative">
            <picture className="w-full h-full relative z-0">
                <Image src={src} alt={alt} />
            </picture>
            <span className="absolute z-10  bottom-4 left-2 bg-transparent backdrop-blur-md text-sm bg-slate-100 text-emerald-400">
                <span className="font-medium font-mono px-2 py-1 transition-smooth hover:bg-white text-emerald-400 hover:text-slate-800">
                    @{username}
                </span>
            </span>
        </div>
    )
}

export default UserCard
