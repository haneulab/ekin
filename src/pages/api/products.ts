import { Tshirts, Jeans, Shoes } from '@application/mock'
import { type NextApiHandler } from 'next'

type FieldType = {
    type: 'all' | 'tshirts' | 'jeans' | 'shoes'
}

const ProductsHandler: NextApiHandler = async (req, res) => {
    res.status(200).json({
        tshirts: Tshirts,
        jeans: Jeans,
        shoes: Shoes,
    })
}

export default ProductsHandler
