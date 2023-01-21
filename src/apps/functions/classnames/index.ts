import { type ClassNames } from './classnames.types'

const classnames: ClassNames<string> = (...args) =>
    args.filter(Boolean).join(' ')

export default classnames
