import { useRoute } from '@application/hooks'
import { ApplicationComponent } from '@application/types'
import { useState } from 'react'
import { IProductBar } from './ProductBar.types'

const ProductBar: ApplicationComponent<IProductBar> = ({
    product,
    categories,
}) => {
    const { push } = useRoute()
    const [showCategories, setShowCategories] = useState<boolean>(true)
    function onShowCategories() {
        setShowCategories(true)
    }
    function onHideCategories() {
        setShowCategories(false)
    }
    function onPush(category: string) {
        push(
            {
                pathname: `/products/${product}?category=${category}?`,
                query: {
                    product,
                    category,
                },
            },
            `/products/${product}?category=${category}`
        )
    }

    return (
        <ul className="pl-2">
            <h4
                onClick={showCategories ? onHideCategories : onShowCategories}
                className="font-normal font-poppins capitalize text-slate-600 text-lg transition-smooth cursor-pointer hover:text-black"
            >
                {product}
            </h4>
            {showCategories && (
                <ul className="flex flex-col gap-y-2 items-start py-4 pl-4 border-l border-dotted">
                    {categories.map((c, idx) => (
                        <button
                            onClick={() => onPush(c)}
                            key={idx}
                            className="font-nunito font-light capitalize text-slate-400 transition-smooth hover:text-slate-600"
                        >
                            {c}
                        </button>
                    ))}
                </ul>
            )}
        </ul>
    )
}

export default ProductBar
